import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "/src/editNotes.css";

export default function EditNote() {
    const {id} = useParams();
    const navigate = useNavigate();
    
    // State awal yang konsisten dengan struktur data
    const [catatan, setCatatan] = useState({
        id: 0,
        judul: '', 
        isi: '', 
        checklist: [],
        dibuatPada: new Date().toISOString(),
        diperbaruiPada: new Date().toISOString()
    });
    
    useEffect(() => {
        const semuaCatatan = JSON.parse(localStorage.getItem("catatan")) || [];
        const catatanDitemukan = semuaCatatan.find(c => c.id === Number(id));
        console.log("Semua catatan:", semuaCatatan); // Debugging
        console.log("Mencari ID:", id); // Debugging
    }, [id]);
    
    const handlePerubahan = (e) => {
        const {name, value} = e.target;
        setCatatan(prev => ({
            ...prev, 
            [name]: value,
            diperbaruiPada: new Date().toISOString()
        }));
    };

    const handleChecklistChange = (idItem, field, value) => { 
        setCatatan(prev => ({
            ...prev, 
            checklist: prev.checklist.map(item => 
                item.id === idItem ? {...item, [field]: value} : item
            ),
            diperbaruiPada: new Date().toISOString()
        }));
    };

    const tambahChecklist = () => {
        setCatatan(prev => ({
            ...prev, 
            checklist: [
                ...prev.checklist, 
                {id: Date.now(), teks: "", dicentang: false}
            ], 
            diperbaruiPada: new Date().toISOString()
        }));
    };
    
    const simpanPerubahan = () => {
        const semuaCatatan = JSON.parse(localStorage.getItem("catatan")) || [];
        
        // Cari index catatan yang akan diupdate
        const index = semuaCatatan.findIndex(c => c.id === Number(id));
        
        if (index !== -1) {
            // Update catatan yang ada
            semuaCatatan[index] = catatan;
        } else {
            // Tambahkan catatan baru jika tidak ditemukan (fallback)
            semuaCatatan.push(catatan);
        }
        
        // Simpan ke localStorage
        localStorage.setItem("catatan", JSON.stringify(semuaCatatan));
        navigate("/addNote");
    };

    return (
       <div className="halaman-edit-catatan">
            <button onClick={() => navigate("/addNote")}>Kembali</button>
            
            <div className="form-catatan">
                <input
                    type="text"
                    name="judul"
                    value={catatan.judul}
                    onChange={handlePerubahan}
                    placeholder="Judul Catatan"
                />
                
                <textarea
                    name="isi"
                    value={catatan.isi}
                    onChange={handlePerubahan}
                    placeholder="Isi Catatan"
                />
                
                <div className="daftar-checklist">
                    {catatan.checklist.map((item) => (
                        <div key={item.id} className="item-checklist">
                            <input
                                type="checkbox"
                                checked={item.dicentang || false}
                                onChange={(e) => 
                                    handleChecklistChange(item.id, "dicentang", e.target.checked)
                                }
                            />
                            <input
                                type="text"
                                value={item.teks || ""}
                                onChange={(e) =>
                                    handleChecklistChange(item.id, "teks", e.target.value)
                                }
                                placeholder="Item checklist"
                            />
                        </div>
                    ))}
                    <button onClick={tambahChecklist}>+ Tambah Checklist</button>
                </div>
                
                <button onClick={simpanPerubahan}>Simpan Perubahan</button>
            </div>
        </div>
    );
}
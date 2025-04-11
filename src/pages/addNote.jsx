import "/src/addNote.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AddNote() {
  const [notes, setNotes] = useState(() => {
    // Load from localStorage if available
    const saved = localStorage.getItem("notes");
    return saved ? JSON.parse(saved) : [];
  });
  const navigate = useNavigate();

  // Save to localStorage whenever notes change
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNewNote = () => {
    const newNote = {
      id: Date.now(),
      title: `Catatan Baru ${notes.length + 1}`,
      content: "",
      checkboxes: [{ id: Date.now(), text: "", checked: false }],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    setNotes([newNote, ...notes]); // New notes added at beginning
  };

  const handleNoteClick = (noteId) => {
    const noteExists = notes.some(note => note.id === noteId);
    if (noteExists) {
      navigate(`./editNotes/${noteId}`);
    } else {
      // Handle case where note doesn't exist
      alert("Catatan tidak ditemukan");
    }
  };

  return (
    <div className="add-note-page">
      {/* Header Section */}
      <div className="container-box">
        <div className="container-text">
          <p>
            Tambahkan<br />
            <span>Catatan</span>
            <br />
            Kalian.
            <button className="button-add" onClick={addNewNote}>
              Add
            </button>
          </p>
        </div>
      </div>

      {/* Notes Grid Section */}
      <div className="grid-box">
        <div className="grid-content">
          {notes.map((note) => (
            <div
              key={note.id}
              className="note-container"
              onClick={() => handleNoteClick(note.id)}
            >
              <h3>{note.title}</h3>
              <div className="note-preview">
                {note.content && <p>{note.content.substring(0, 50)}...</p>}
                {note.checkboxes.map((checkbox) => (
                  <div key={checkbox.id} className="checkbox-item">
                    <input
                      type="checkbox"
                      checked={checkbox.checked}
                      readOnly
                    />
                    <span>{checkbox.text || "[Checklist]"}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
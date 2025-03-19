import AddNote from './addNote';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import React, {useEffect} from "react";
import { useRef } from 'react';

export default function Home() {
  const location = useLocation();
    
    useEffect (() => {
        if (location.hash) {
            const element = document.querySelector(location.hash)
            if(element){
                element.scrollIntoView({behavior : "smooth"})
            }
        }
    }, [location])
  return (
    <>
      <div className='container'>
          <div className='welcome' id='welcome'>
            <p >Selamat Datang di Pencatatan Belanja anda</p> 
            <p className="helo">Bersama kami pengeluaran belanja anda akan tercatat dan pengeluaran anda terkendali</p>
            <Link to='/addNote' className="button-mulai">Mulai Sekarang</Link>
          </div>
          <div className='image'>
            <img src="/image/Notebook-bro.png" alt="noteBook" />
        </div>  
      </div>
      <AboutUs />
      <Fiture />
    </>
  )
}

function AboutUs(){
  return (
    <div className="about-us" >
      <div className='about' id='about-us'>
        <h1>About Us</h1>
      </div>
      <div className="isi-about">
        <p> Catatan belanja ini penuh coretan, daftar panjang kebutuhan mulai dari beras, sabun, kopi, hingga camilan. Dompet menipis, diskon menggoda, pilihan sulit antara keinginan dan kebutuhan. Troli melaju, pikiran berhitung. Struk tercetak, kantong penuh. Pulang dengan harapan, semoga cukup sampai akhir bulan.
        </p>
      </div>
    </div>
  )
}

function Fiture (){
  const gridContainerRef = useRef(null);  

  const scrollLeft = () => {
    console.log("scroll left klik")
    if(gridContainerRef.current){
      gridContainerRef.current.scrollBy ({
        left: -200,
        behavior : 'smooth',
      }); 
    }
  };
  const scrollRight = () => {
    console.log("scroll right klik")
    if(gridContainerRef.current){
      gridContainerRef.current.scrollBy ({
        left: 200,
        behaviro: 'smooth',
      });
    }
  };

  return (
  <>
    <div className="our-fiture" >
      <div className='fiture'> 
        <h1>Our Fiture</h1>
      </div>
      <div className="grid-container" ref={gridContainerRef}>
        <div className="grid-item"> 
          <img src="/image/checklist.png" alt="checklist" />
          <h2>Check List</h2>
          <p>Checklist belanja siap di tangan, satu per satu dicek agar tak ada yang terlewat. Barang kebutuhan utama dulu, lalu tambahan jika masih cukup.
          </p>
        </div>
        <div className="grid-item"> 
          <img src="/image/notes.png" alt="checklist" />
          <h2>Tambah Catatan</h2>
          <p>
            Menambahkan catatan belanja penting agar tidak ada yang terlupa. Susu, roti, beras, minyak, gula, kopi, teh, sabun, pasta gigi, mie, telur, daging, dan sayur.
          </p>
        </div>
        <div className="grid-item"> 
          <img src="/image/shopping-cart.png" alt="checklist" />
          <h2>Kategori Belanja</h2>
          <p>
            Belanja mencakup kebutuhan pokok, kebersihan, pakaian, elektronik, transportasi, hiburan, dan investasi yang harus dikelola bijak untuk kesejahteraan dan masa depan.
          </p>
        </div>
      </div> 
      <button className="scroll left" onClick={scrollLeft}> <img src="/image/left-arrow.png" alt="left" /></button>
      <button className="scroll right" onClick={scrollRight}> <img src="/image/right-arrow.png" alt="right" /></button>
    </div>
    
  </>
  )
}







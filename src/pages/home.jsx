import AddNote from './addNote';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import React, {useEffect} from "react";
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Home() {
  const location = useLocation();
  const {scrollYProgress} = useScroll();
    
  // nama variable harus menggunakan properti CSS
  const scale = useTransform(scrollYProgress, [0,1], [1,2])
  const fontSize = useTransform(scrollYProgress, [0,1],['42px','80px'])
  const helo = useTransform(scrollYProgress,[0,1],['25px','45px'])
 
  // fungsi ini untuk membuat scroll ke lokasi 
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
            <motion.p style={{fontSize}} >Selamat Datang di Pencatatan Belanja anda</motion.p> 
            <motion.p style={{fontSize : helo}} className="helo">Bersama kami pengeluaran belanja anda akan tercatat dan pengeluaran anda terkendali</motion.p>
            <Link to='/addNote' className="button-mulai">Mulai Sekarang</Link>
          </div>
          <motion.div className='image' style={{scale}}>
            <img
            src="/image/Notebook-bro.png"
            alt="noteBook"
            />
        </motion.div>  
      </div>
      <AboutUs />
      <Fiture />
    </>
  )
}

function AboutUs(){
  const ref = useRef(null);
  const {scrollYProgress} = useScroll({
    target : ref,
    offset : ["start end","center center"]
  });
  const opacity = useTransform(scrollYProgress,[0,1],[0,1]);
  const scale = useTransform(scrollYProgress, [0,1],[1,1.1])
  return (
    <motion.div 
    className="about-us" 
    style={{opacity,scale}} 
    ref={ref}
    >
      <div className='about' id='about-us'>
        <h1>About Us</h1>
      </div>
      <div className="isi-about">
        <p> Catatan belanja ini penuh coretan, daftar panjang kebutuhan mulai dari beras, sabun, kopi, hingga camilan. Dompet menipis, diskon menggoda, pilihan sulit antara keinginan dan kebutuhan. Troli melaju, pikiran berhitung. Struk tercetak, kantong penuh. Pulang dengan harapan, semoga cukup sampai akhir bulan.
        </p>
      </div>
    </motion.div>
  )
}

function Fiture (){
  const gridContainerRef = useRef(null);// untuk mengakses halaman DOM secara langsung 
  const ref = useRef(null);
  const {scrollYProgress} = useScroll({
    target : ref,
    offset : ["start end","center center"]
  });
  const opacity = useTransform(scrollYProgress,[0,1],[0,1]);
  const scale = useTransform(scrollYProgress, [0,1],[1,1.1])
  
  const scrollLeft = () => { // arrow function biasa digunakan untuk membaut fungsi event heandler seperti onClick dan onChange.
    console.log("scroll left klik")// untuk menampilkan hasil di conslelog 
    if(gridContainerRef.current){ // memeriksa apakah element ref(gridCountainerRef) memiliki element yang valid 
      gridContainerRef.current.scrollBy ({// menggunakan scrollBy untuk menggeser scroll
        left: -200, // menggeser scroll ke kiri sebesar -200
        behavior : 'smooth', // memberikan animasi scroll yang halus
      }); 
    }
  };
  const scrollRight = () => {
    console.log("scroll right klik")
    if(gridContainerRef.current){
      gridContainerRef.current.scrollBy ({
        left: 200, // menggeser scroll ke kanan sebesar 200
        behavior: 'smooth', // memberikan animasi scroll yang halus
      });
    }
  };
  return (
  
    <motion.div className="our-fiture" style={{opacity,scale}} ref={ref}>
      <div className='fiture'  > 
        <h1 > Our Fiture </h1>
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
    </motion.div>
  )
}







import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";
import AddNote from "../pages/addNote";

const Navbar = () => {
//     const {scrollYProgress} = useScroll();
//     const backgroundColor = useTransform(
//         scrollYProgress,
//         [0,0.1],
//         ["transparent", "transparent"]
//     ); 
// ini untuk membuat navbar tetap saat di scroll 

    return (
        <header>    
            <nav>
                <div className='navbar'>
                    <div className='navbar-start'>
                    <div className='navbar-logo'>
                        <img src="/image/notes.png" alt="logo" />
                    </div>
                    <ul className='navbar-menu'>
                        <li>
                            <Link to="/#welcome">Home</Link>
                        </li>
                        <li>
                            <Link to="/#about-us">About</Link>
                        </li>
                    </ul>
                    </div>
                    <div className='navbar-end'>
                        <Link to="/addNote">Catatan Belanja</Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Navbar
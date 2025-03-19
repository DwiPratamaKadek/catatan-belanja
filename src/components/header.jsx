import { Link } from "react-router-dom";
import React from "react";


const Navbar = () => {

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
                    <a href="#">Catatan Belanja</a>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Navbar
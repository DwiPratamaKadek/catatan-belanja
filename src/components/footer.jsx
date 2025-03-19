import React from "react";

function Footer (){
    return (
        <>
            <div className='footer'>
                <div className='footer-item'>
                <h1> Catatan Belanja Anda </h1>
                <p>
                    Terima kasih telah menggunakan layanan kami. Kami menghargai kepercayaan Anda dan berkomitmen memberikan pelayanan terbaik. Sampai jumpa kembali!
                </p>
                </div>
                <div className='footer-email'>
                <img src="image/mail.png" alt="email" />
                <a href='#'>catatanbelanja@gmail.com</a>
                </div>
            </div>
        </>
    )
}

export default Footer
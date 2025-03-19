import React from "react";
import { BrowserRouter as Router, Routes, Route, Link  } from "react-router-dom";
import Home from "./pages/home" ; 
import AddNote from "./pages/addNote" ;
import Navbar from "./components/header" ;
import Footer from "./components/footer";

export default function App() { 
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/addNote" element={<AddNote/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}
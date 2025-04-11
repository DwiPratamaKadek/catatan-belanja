import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/home" ; 
import AddNote from "./pages/addNote" ;
import Navbar from "./components/header" ;
import Footer from "./components/footer";
import EditNote from "./pages/editNotes";
import ErrorBoundary from "./components/erorBoundry";

export default function App() { 
  return (
    <Router>
      <Navbar/>
      <Routes>
        
          <Route path="/" element={<Home/>} />
          <Route path="/addNote" element={<AddNote/>} />
          <Route path="/addNote/editNotes/:id" element={< EditNote/>}/>

      </Routes>
      <Footer/>
    </Router>
  )
}
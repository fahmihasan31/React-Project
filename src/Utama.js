import React, { Component } from "react";
// import { Switch, Route, } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom'
import './CSS/style.css'

import Beranda from './Pages/Beranda';
import Tentangsaya from './Pages/Tentangsaya';
import Karya from './Pages/Karya';
import Kontak from './Pages/Kontak';
import Gallery from './Pages/Gallery';
import Cart from './Pages/Cart'

class Utama extends Component {
  render() {
    return (

      <Routes>
        <Route exact path="/" element={<Beranda />} />
        <Route path="/tentangsaya" element={<Tentangsaya />} />
        <Route path="/karya" element={<Karya />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="/galeri" element={<Gallery />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

    );
  };
};

export default Utama;
import React, { Component } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Utama from "./Utama";
import { Link } from "react-router-dom";
import './CSS/style.css';


class App extends Component {
  render() {
    return (
      <div className="bg">
        {/* Navigation */}
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow">
          <div className="container">
            {/* Logo */}
            <div className="navbar-brand mr-auto">
              <h4>porto<span>folio</span></h4>
            </div>
            {/* Navbar */}
            <div className="navbar-nav">
              <Link to={"/"} className="nav-link mx-2" >Beranda</Link>
              <Link to={"/tentangsaya"} className="nav-link mx-2">TentangSaya</Link>
              <Link to={"/karya"} className="nav-link mx-2">Karya</Link>
              <Link to={"/kontak"} className="nav-link mx-2">Kontak</Link>
              <Link to={"/galeri"} className="nav-link mx-2">Galeri</Link>
              <Link to={"/cart"} className="nav-link mx-2">Cart</Link>

            </div>
          </div>
        </nav>
        {/* content */}
        <div className="container mt-3">
          <Utama />
        </div>
      </div>
    );
  }
}

export default App;

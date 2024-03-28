import React, { Component } from "react";
import '../CSS/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import foto from '../picture/bee.jpg'; // Ganti dengan path gambar Anda

import { Link } from "react-router-dom";

class Beranda extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="card-body">
            <div className="d-flex align-items-center">
              <div className="card-text-container1">
                <p className="card-text">Hello, my name is</p>
                <p className="card-title">Moch. Fahmi Hasan</p>
                <p className="card-text2">And I'm a Web Developer</p>
                <Link to="/tentangsaya">
                  <button className="btn btn-primary">Get to know me!</button>
                </Link>
              </div>
            </div>
            {/* <div className="image"> */}

            {/* <img src={foto} alt="bee" className="image" width="400" height="400" /> */}

          </div>
          {/* </div> */}
        </nav>
      </div>
    )
  }
}

export default Beranda;

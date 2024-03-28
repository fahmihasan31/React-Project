import React, { Component } from "react";
import tefa from '../picture/tefa.png'; // Ganti dengan path gambar Anda
import tefa2 from '../picture/tefa2.png'; // Ganti dengan path gambar Anda
import tefa3 from '../picture/tefa3.png'; // Ganti dengan path gambar Anda

class Karya extends Component {
  render() {
    return (
      <div>
        <h2 className="karya">Karya</h2>
        <div className="container1 row">
          <div className="card col-md-4 mb-3">
            <img src={tefa} className="card-img-top" alt="tefa" />
            <div className="card-body1">
              <p className="card-text1">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          <div className="card col-md-4 mb-3">
            <img src={tefa3} className="card-img-top" alt="tefa3" />
            <div className="card-body1">
              <p className="card-text1">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          <div className="card col-md-4 mb-3">
            <img src={tefa2} className="card-img-top" alt="tefa2" />
            <div className="card-body1">
              <p className="card-text1">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Karya;

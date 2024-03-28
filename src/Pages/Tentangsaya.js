import React, { Component } from "react";
import '../CSS/style.css'
import YourImage from '../picture/fahmi logo.png'; // Ganti dengan path gambar Anda

class Tentangsaya extends Component {
  render() {
    return (
      <div>
        <p className="title-tentang">Tentang Saya</p>
        <div>
        </div>
        <div>
          <img src={YourImage} alt="bee" className="image1" width="400" height="400" />
        </div>
        <nav>
          <div className="card-body">
            <div className="d-flex align-items-center">
              <div className="card-text-container">
                <p className="card-title1">I'm Fahmi and i'm a Web Developer</p>
                <p className="card-text1">Hallo!! Saya Mochammad Fahmi Hasan, siswa dari SMK Telkom Malang yang memiliki minat
                  di bidang pemrograman. Disana saya mengambil jurusan Rekayasa Perangkat Lunak. Saya aktif dalam mencari pengalaman
                  seperti mengikuti seminar/webinar dan juga pelatihan. Belajar beradaptasi pada hal baru merupakan suatu yang menyenangkan.</p>
              </div>
            </div>

          </div>
        </nav>

      </div>
    )
  }
}

export default Tentangsaya;
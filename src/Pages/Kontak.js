import React, { Component } from "react";

class Kontak extends Component {
  handleSubmit = (event) => {
    event.preventDefault(); // Menghentikan perilaku bawaan form untuk me-refresh halaman saat dikirim

    // Mengambil nilai dari input
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Validasi input
    if (!name || !email || !message) {
      alert("Mohon lengkapi semua input sebelum mengirim.");
      return; // Mencegah pengiriman formulir jika ada input yang kosong
    }

    // Jika semua input sudah diisi, tampilkan alert
    alert("Pesan Anda telah terkirim!");
    // Refresh halaman setelah pesan terkirim
    window.location.reload();
  }

  render() {
    return (
      <div className="container">
        <h2 className="kontak">Kontak</h2>
        <div className="bg-light p-4 rounded-md">
          <form onSubmit={this.handleSubmit}> {/* Menambahkan event handler onSubmit */}
            <div className="form-group">
              <label htmlFor="name">Nama:</label>
              <input type="text" className="form-control" id="name" placeholder="Masukkan nama" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" className="form-control" id="email" placeholder="Masukkan email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Pesan:</label>
              <textarea className="form-control" id="message" rows="3" placeholder="Masukkan pesan"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Kirim</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Kontak;

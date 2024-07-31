import React, { Component } from "react";
import Card from "../Components/Card";
import { Modal } from "bootstrap";
import '../CSS/style.css';
// import { Form } from "react-router-dom";
// import { keyboard } from "@testing-library/user-event/dist/keyboard";
class Gallery extends Component {
  constructor() {
    super()
    this.state = {
      buku: [
        {
          isbn: "12345", judul: "Bulan", penulis: "tere liye",
          penerbit: "CV Harapan Kita", harga: 90000,
          cover: "https://th.bing.com/th/id/OIP.8CFZqfWJj7YkQo91CvaGvQHaK0?rs=1&pid=ImgDetMain"
        },
        {
          isbn: "56789", judul: "Anak Badai", penulis: "tere liye",
          penerbit: "CV Nusa Bangsa", harga: 80000,
          cover: "https://1.bp.blogspot.com/-zE3NBRhaY5E/XaJgQ9uypXI/AAAAAAAAALg/9NEEEfO3wgYLaXbiW-Y_YX_7jwA5ss3ogCLcBGAsYHQ/s1600/Si-anak-badai_dpn_low-768x1164.jpg"
        },
        {
          isbn: "54321", judul: "Bumi", penulis: "tere liye",
          penerbit: "CV Jaya Abadi", harga: 70000,
          cover: "https://1.bp.blogspot.com/-hwQ-Ahp78bs/XxGp4XdS1II/AAAAAAAABCM/7dh0OpyMlq8Gzr34Qi9VB9c1rDpp45s5QCLcBGAsYHQ/s1600/bumii.jpg"
        },
        {
          isbn: "0895", judul: "Hujan", penulis: "tere liye",
          penerbit: "CV Jaya Abadi", harga: 70000,
          cover: "https://th.bing.com/th/id/OIP.b--dSfMFwwV1iSOtTrqmSAHaK-?w=486&h=720&rs=1&pid=ImgDetMain"
        },
      ],

      filterBuku: [], // Tambahkan filterBuku di sini
      action: "",
      isbn: "",
      judul: "",
      penulis: "",
      penerbit: "",
      harga: 0,
      cover: "",
      selectedItem: null,
      // user: "" // tambahkan user ke state
    }
    // Binding setUser
    // this.setUser = this.setUser.bind(this);
  }

  //user
  setUser = () => {
    // cek eksistensi dari session storage
    if (localStorage.getItem("user") === null) {
      // kondisi jika session storage "user" belum dibuat
      let prompt = window.prompt("Masukkan Nama Anda", "")
      if (prompt === null || prompt === "") {
        // jika user tidak mengisikan namanya
        this.setUser()
      } else {
        // jika user telah mengisikan namanya

        // simpan nama user ke session storage
        localStorage.setItem("user", prompt)

        // simpan nama user ke state.user
        this.setState({ user: prompt })
      }
    } else {
      // kondisi saat session storage "user" telah dibuat

      // akses nilai dari session storage "user"
      let name = localStorage.getItem("user")
      this.setState({ user: name })
    }
  }

  componentDidMount() {
    this.setUser()
  }

  //cart
  addToCart = (selectedItem) => {
    // membuat sebuah variabel untuk menampung cart sementara
    let tempCart = []

    // cek eksistensi dari data cart pada localStorage
    if (localStorage.getItem("cart") !== null) {
      tempCart = JSON.parse(localStorage.getItem("cart"))
      // JSON.parse() digunakan untuk mengonversi dari string -> array object
    }

    // cek data yang dipilih user ke keranjang belanja
    let existItem = tempCart.find(item => item.isbn === selectedItem.isbn)

    if (existItem) {
      // jika item yang dipilih ada pada keranjang belanja
      window.alert("Anda telah memilih item ini")
    } else {
      // user diminta memasukkan jumlah item yang dibeli
      let promptJumlah = window.prompt("Masukkan jumlah item yang beli", "")
      if (promptJumlah !== null && promptJumlah !== "") {
        // jika user memasukkan jumlah item yg dibeli

        // menambahkan properti "jumlahBeli" pada item yang dipilih
        selectedItem.jumlahBeli = promptJumlah

        // masukkan item yg dipilih ke dalam cart
        tempCart.push(selectedItem)

        // simpan array tempCart ke localStorage
        localStorage.setItem("cart", JSON.stringify(tempCart))
      }
    }
  }

  render() {
    const { filterBuku } = this.state;
    if (filterBuku.length === 0) {
      // Jika filterBuku masih kosong, set nilai filterBuku sama dengan buku
      this.setState({ filterBuku: this.state.buku });
    }
    return (
      <div className="container" style={{ maxWidth: "80%" }}>
        <div className="row">
          <h4 className="text-info my-2">
            Nama Pengguna: {this.state.user}
          </h4>
          <input type="text" className="form-control my-2" placeholder="Pencarian"
            value={this.state.keyword}
            onChange={ev => this.setState({ keyword: ev.target.value })}
            onKeyUp={ev => this.searching(ev)}
          />

          {this.state.filterBuku.map((item, index) => (
            <Card
              judul={item.judul}
              penulis={item.penulis}
              penerbit={item.penerbit}
              harga={item.harga}
              cover={item.cover}
              onEdit={() => this.Edit(item)}
              onDrop={() => this.Drop(item)}
              onCart={() => this.addToCart(item)}
            />

          )
          )
          }
        </div>

        <button className="btn btn-success" onClick={() => this.add()}>
          Tambah Data
        </button>

        {/* component model sebagai control manipuasi data */}
        <div className="modal" id="modal_buku">
          <div className="modal-dialog">
            <div className="modal-content">
              {/* modal header */}
              <div className="modal-header">
                Form Buku
              </div>

              {/* modal body */}
              <div className="modal-body">
                <form onSubmit={ev => this.save(ev)}>
                  Judul Buku
                  <input type="text" className="form-control mb-1"
                    value={this.state.judul}
                    onChange={ev => this.setState({ judul: ev.target.value })}
                    required />

                  Penulis Buku
                  <input type="text" className="form-control mb-2"
                    value={this.state.penulis}
                    onChange={ev => this.setState({ penulis: ev.target.value })}
                    required />

                  Penerbit Buku
                  <input type="text" className="form-control mb-2"
                    value={this.state.penerbit}
                    onChange={ev => this.setState({ penerbit: ev.target.value })}
                    required />

                  Harga Buku
                  <input type="number" className="form-control mb-2"
                    value={this.state.harga}
                    onChange={ev => this.setState({ harga: ev.target.value })}
                    required />

                  Cover Buku
                  <input type="url" className="form-control mb-2"
                    value={this.state.cover}
                    onChange={ev => this.setState({ cover: ev.target.value })}
                    required />

                  <button className="btn btn-info btn-block" type="submit">
                    Simpan
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }


  add = () => {
    Modal.getOrCreateInstance("#modal_buku").show();
    this.setState({
      isbn: Math.random().toString(),
      judul: "",
      penulis: "",
      penerbit: "",
      cover: "",
      harga: 0,
      action: "insert"

    })
  }
  Edit = (item) => {
    // menampilkan komponen modal
    Modal.getOrCreateInstance("#modal_buku").show();
    this.setState({
      isbn: item.isbn,
      judul: item.judul,
      penulis: item.penulis,
      penerbit: item.penerbit,
      cover: item.cover,
      harga: item.harga,
      action: "update",
      selectedItem: item
    })

  }

  save = (event) => {
    event.preventDefault();
    //menampung data state buku
    let tempBuku = this.state.buku

    if (this.state.action === "insert") {
      //menambah data baru
      tempBuku.push({
        isbn: this.state.isbn,
        judul: this.state.judul,
        penulis: this.state.penulis,
        penerbit: this.state.penerbit,
        cover: this.state.cover,
        harga: this.state.harga,
      })
    } else if (this.state.action === "update") {
      // menyimpan perubahan data
      let index = tempBuku.indexOf(this.state.selectedItem)
      tempBuku[index].isbn = this.state.isbn
      tempBuku[index].judul = this.state.judul
      tempBuku[index].penulis = this.state.penulis
      tempBuku[index].penerbit = this.state.penerbit
      tempBuku[index].cover = this.state.cover
      tempBuku[index].harga = this.state.harga
    }

    // menutup komponen modal_buku
    this.setState({ buku: tempBuku })
    Modal.getOrCreateInstance("#modal_buku").hide();

  }

  Drop = (item) => {
    //beri konfirmasi untuk menghapus data
    if (window.confirm("apakah anda yakin ingin menghapus data ini?")) {
      //menghapus data
      let tempBuku = this.state.buku
      //posisi index data yang akan dihapus
      let index = tempBuku.indexOf(item)

      //hapus data
      tempBuku.splice(index, 1)
      this.setState({ buku: tempBuku })
    }
  }

  searching = event => {
    if (event.keyCode === 13) {
      // Perbarui filterBuku
      this.setState({ filterBuku: [this.state.buku] });
      // 13 adalah kode untuk tombol enter

      let keyword = this.state.keyword.toLowerCase();
      let tempBuku = this.state.buku;
      let result = tempBuku.filter(item => {
        return item.judul.toLowerCase().includes(keyword) ||
          item.penulis.toLowerCase().includes(keyword) ||
          item.penerbit.toLowerCase().includes(keyword);
      });
      this.setState({ filterBuku: result })
    }
  }
}



export default Gallery;
<template>
  <div id="Keranjang">
    <Header />

    <div class="container">
      <div class="row">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/"
                  class="breadcrumb-item"
                  href="#"
                  style="text-decoration: none"
                >
                  <a class="fas fa-home"></a> Home</router-link>
              </li>
              <li
                class="breadcrumb-item active"
                aria-current="page"
                style="font-weight: bold"
              >
                Keranjang
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col">
          <table class="table">
            <thead>
              <tr class="tr">
                <th scope="col">Produk</th>
                <th scope="col">Nama</th>
                <th class="keterangan" scope="col">Keterangan</th>
                <th scope="col">Jumlah</th>
                <th class="harga" scope="col">Harga</th>
                <th scope="col">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr class="menu">
                <th scope="row">
                  <img
                    class="banner"
                    src="../assets/nasi geprek kelenger.png"
                    alt=""
                  />
                </th>
                <td class="nasi-geprek">Nasi Geprek <br />Klenger</td>
                <td>Pedes level 3 yaa, mantapp loor</td>
                <td>1</td>
                <td>Rp. 20.000</td>
                <td><i class="fas fa-trash"></i></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col text-lg-end">
          <h6 class="total">Total Harga : &emsp;&emsp;&emsp;&emsp; Rp 20.000</h6>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row justify-content-end">
        <div class="col-lg-4">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Nama Pemesan</label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1" placeholder = "Nama Pemesan"/>
          </div>

          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Nomor Meja</label>
            <input
              type="email"
              class="form-control" 
              id="exampleFormControlInput1" placeholder = "Nomor Meja"/>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-end">
          <router-link to="success" class="btn btn-warning">
            Pesan Sekarang <i class="fas fa-arrow-right"></i>
          </router-link>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Keranjang",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
#Keranjang {
  margin-bottom: 300px;
}
</style>

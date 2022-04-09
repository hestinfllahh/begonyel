<template>
  <div id="Keranjang">
    <Header />

    <div class="container">
      <div class="row">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link
                  to="/"
                  class="breadcrumb-item"
                  href="#"
                  style="text-decoration: none"
                >
                  <a class="fas fa-home"></a> Home</router-link
                >
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
              <tbody v-for="item in menu" :key="item.id">
                <tr class="menu">
                  <th scope="row">
                    <img
                      class="banner"
                      src="../assets/nasi geprek kelenger.png"
                      alt=""
                    />
                  </th>
                  <td>{{ item.product_id }}</td>
                  <td>{{ item.description }}</td>
                  <td>{{ item.quantity }}</td>
                  <td>Rp. {{ item.price }}</td>
                  <td><i class="fas fa-trash"></i></td>
                </tr>
              </tbody>
            </table>

            <div class="col text-lg-end">
              <h6 class="total">
                Total Harga : &emsp;&emsp;&emsp;&emsp; Rp 20.000
              </h6>
            </div>
        </div>
      </div>
    </div>

    <!-- <div class="container">
      <div class="row">
        <div class="col text-lg-end">
          <h6 class="total">Total Harga : &emsp;&emsp;&emsp;&emsp; Rp 20.000</h6>
        </div>
      </div>
    </div> -->

    <div class="container">
      <div class="row justify-content-end">
        <div class="col-lg-4">
          <form v-on:submit.prevent>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"
                >Nama Pemesan</label
              >
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                v-model="cart.customer_name"
              />
            </div>

            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label"
                >Nomor Meja</label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                v-model="cart.table_id"
              />
            </div>
            <button type="submit" class="btn btn-warning" @click="keranjang">
              Pesan Sekarang <i class="fas fa-arrow-right"></i>
            </button>
          </form>
        </div>
      </div>
    </div>

    <!-- <div class="container">
      <div class="row">
        <div class="col-lg-12 text-end">
          <button type="submit" class="btn btn-warning" @click="pesan">
            Pesan Sekarang <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div> -->

    <Footer />
  </div>
</template>

<script>
import axios from "axios";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Keranjang",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      menu: [],
      cart: {},
    };
  },

  methods: {
    keranjang() {
      this.cart.api_key = "kjbfsvkjbvsnllssjnvlsncacjknfkfnvkkdhsfkk";
      console.log(this.cart);

      axios
        .post("http://localhost/begonyel/public/api/order", this.cart)
        .then((response) => {
          console.log(response);
          alert(response.data);
        })
        .catch((error) => {
          console.log(error);
          alert(error);
        });
    },
  },

  mounted() {
    axios
      .get("http://localhost/begonyel/public/api/cart")
      .then((response) => {
        this.menu = response.data;
        console.log(this.menu);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
<style>
#Keranjang {
  margin-bottom: 300px;
}
</style>

<template>
  <div id="ProductDetail">
    <Header />

    <div class="container">
      <div class="row">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link
                  to="/"
                  class="home"
                  href="#"
                  style="text-decoration: none"
                >
                  <i class="fas fa-home"></i> Home</router-link
                >
              </li>
              <li
                class="breadcrumb-item active"
                aria-current="page"
                style="font-weight: bold"
              >
                ProductDetail
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>

    <!-- Slider -->
    <div class="container">
      <div class="row">
        <div class="col-lg-5">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>

              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>

              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>

            <div class="carousel-inner">
              <div class="carousel-item p-3 active">
                <img
                  src="../assets/nasi geprek kelenger.png"
                  class="d-block w-100"
                />
              </div>
              <div class="carousel-item p-3">
                <img
                  src="../assets/nasi geprek kelenger.png"
                  class="d-block w-100"
                />
              </div>
              <div class="carousel-item p-3">
                <img
                  src="../assets/nasi geprek kelenger.png"
                  class="d-block w-100"
                />
              </div>
            </div>

            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <i class="fas fa-arrow-circle-left"></i>
            </button>

            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <i class="fas fa-arrow-circle-right"></i>
            </button>
          </div>
        </div>
        
        <div class="col-lg-7">
          <form v-on:submit.prevent>
          <h4 class="menu">{{ menu.name }}</h4>
          <h6 class="h6" style="color: black">
            Harga : <span>{{ menu.price }}</span>
          </h6>
          <hr />
          
          <div class="input-group mb-3">
          <div class="jumlah">
          <p class="size">Jumlah Pesanan</p>
            <input
              class="input-type"
              type="number"
              min="1"
              max="100"
              placeholder="1"
              id="jumlahpesanan"
              v-model="order.quantity"
            />
          </div>
          </div>

          <div class="mb-3">
            <label class="size" for="exampleFormControlTextarea1"
              >Keterangan</label>
            <textarea 
            type= "text"
            class="form-control" 
            id="exampleFormControlTextarea1"
            v-model= "order.description">
            </textarea>
          </div>

          <button type="submit" class="btn btn-warning" @click="pesan">
            Masukkan Keranjang<i class="fas fa-arrow-right"></i>
          </button>
          </form>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <h4 class="h4"><b>Menu</b> Kami</h4>
        </div>

        <div class="col-lg-6 text-lg-end">
          <h4 class="h4"><i class="fas fa-eye"></i> Lihat Semua</h4>
        </div>
      </div>
    </div>

    <CardProduct/>
    <Footer />
  </div>
</template>

<script>
import axios from "axios";
import Header from "@/components/Header.vue";
import CardProduct from "@/components/CardProduct.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "ProductDetail",
  components: {
    Header,
    CardProduct,
    Footer,
  },

  data() {
    return {
      menu: [],
      order: {}
    };
  },

  methods: {
    pesan(){
      this.order.api_key = "baicivdbibvdaibhvdbihadbbhdiabcdsjbcsbvkbsk";
      this.order.product_id = this.menu.id
      // console.log(this.order);

      axios
      .post("http://localhost/begonyel/public/api/cart", this.order)
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
      .get("http://localhost/begonyel/public/api/products/" + this.$route.params.id)
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
</style>
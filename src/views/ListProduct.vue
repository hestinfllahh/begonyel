<template>
  <div id="ListProduct">
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
                  ><i class="fas fa-home"></i> Home
                </router-link>
              </li>
              <li
                class="breadcrumb-item active"
                aria-current="page"
                style="font-weight: bold"
              >
                ListProduct
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="mb-3">
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Mau makan apa hari ini"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row justify-content-start">
        <div class="col-lg-3" v-for="item in menu" :key="item.id">
          <CardProduct v-bind:menu="item" />
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import axios from "axios";
import Header from "@/components/Header.vue";
import CardProduct from "@/components/CardProduct.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "ListProduct",
  components: {
    Header,
    CardProduct,
    Footer,
  },

  data() {
    return {
      menu: [],
    };
  },

  method: {},

  mounted() {
    axios
      .get("http://localhost/begonyel/public/api/products")
      .then((response) => {
        this.menu = response.data;
        //console.log(this.menu);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>
#ListProduct {
  margin-bottom: 300px;
}
</style>

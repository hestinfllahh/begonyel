<template>
  <div id="LandingPage">
    <Header/>
    <Banner/>
    <Slider/>
    
    <div class="container">
      <div class="row">
        
        <div class="col-lg-6">
          <h4 class="h4"><b>Menu</b> Kami</h4>
        </div>

        <div class="col-lg-6 text-lg-end">
          <h4 class="h4"> <i class="fas fa-eye"></i> Lihat Semua </h4>
        </div>
        
      </div>
    </div>

    <div class="container">
      <div class="row justify-content-start">
        <div class="col-lg-3" 
          v-for="item in menu" 
          :key="item.id">
          <CardProduct v-bind:menu="item" />
        </div>
      </div>
    </div>
    
    <Footer/>
</div>
</template>

<script>
import axios from "axios";
import Header from '@/components/Header.vue'
import Banner from '@/components/Banner.vue'
import Slider from '@/components/Slider.vue'
import CardProduct from '@/components/CardProduct.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'LandingPage',
  components: {
  Header,
  Banner,
  Slider,
  CardProduct,
  Footer
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
#LandingPage{
  margin-bottom: 300px;
}

</style>
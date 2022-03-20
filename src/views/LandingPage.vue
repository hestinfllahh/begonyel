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

    <CardProduct/>
    <Footer/>
     
  </div>
</template>

<script>
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
  }


}
</script>

<style>
#LandingPage{
  margin-bottom: 300px;
}

</style>
<template>
  <div id="ProductDetail"> 
    <Header />

    <div class="container">
      <div class="row">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/" class="home" href="#" style="text-decoration : none;"> <i class="fas fa-home"></i> Home</router-link></li>
              <li class="breadcrumb-item active" aria-current="page" style="font-weight:bold">ProductDetail</li>
            </ol>
          </nav>

        </div>
      </div>
    </div>

    <!-- Slider -->
    <div class="container">
      <div class="row">
        <div class="col-lg-5">

          
        <div id="carouselExampleIndicators"
            class="carousel slide"
            data-bs-ride="carousel">

            <div class="carousel-indicators">
              <button type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1">
              </button>

              <button type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2">
              </button>

              <button type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3">
              </button>
            </div>

            <div class="carousel-inner">
              <div class="carousel-item p-3 active">
                <img src="../assets/nasi geprek kelenger.png" class="d-block w-100" />
              </div>
              <div class="carousel-item p-3">
                <img src="../assets/nasi geprek kelenger.png" class="d-block w-100" />
              </div>
              <div class="carousel-item p-3">
                <img src="../assets/nasi geprek kelenger.png" class="d-block w-100" />
              </div>
            </div>

            
            <button  class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"><i class="fas fa-arrow-circle-left"></i></button>

            
            <button  class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"><i class="fas fa-arrow-circle-right"></i></button>

          </div>

        </div>

        <div class="col-lg-7">
          <h4 class="menu">Nasi Geprek Kelenger</h4>
          <h6 class="h6" style="color: black;">Harga : <span>20.000</span></h6>
          <hr>
          <p class="size">Jumlah Pesanan</p>

        <!-- input-type -->
        <div class="input-group mb-3">
          <input class="input-type" type="number" min="1" max="100" placeholder="1">
        </div>

      <div class="mb-3">
        <label class="size" for="exampleFormControlTextarea1">Keterangan</label>
        <textarea class="form-control" id="exampleFormControlTextarea1">
        </textarea>
      </div>

      <router-link to="keranjang" class="btn btn-warning">Masukkan Keranjang
        <i class="fas fa-arrow-right"></i>
      </router-link>

        </div>

      </div>
    </div>

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
import CardProduct from '@/components/CardProduct.vue'
import Footer from '@/components/Footer.vue'
    

export default {
  name : "ProductDetail",
  components : {
    Header,
    CardProduct,
    Footer
   }
}
</script>

<style>

</style>
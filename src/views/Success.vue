<template>
  <div id="Success">
      <Header />
      
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">

            <img class="img" src="../assets/image 16.png" alt="">
            <h5 class="h5">Yeayy Berhasil</h5>
            <h6 class="h6">Kamu akan menerima pesananmu Dalam <br>Beberapa saat lagi</h6>
            <router-link to="/productdetail" class="btn btn-warning">Pesan Kembali</router-link>

          </div>
        </div>
      </div>

      <Footer/>

  </div>
</template>

<script>
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'

export default {
  name: 'Success',
  components: {
  Header,
  Footer
}
}

</script>

<style>
#Success{
  margin-bottom: 300px;
}
</style>
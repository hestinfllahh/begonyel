<template>
  <div id="Banner">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 m-lg-auto">
          <h6 class="FoodMarket">FoodMarket</h6>
          <h1 class="h1">Waktunya<br> pilih menu favorite kamu</h1>
          <h6 class="h6">mulai dari <b>Rp 20.000</b></h6>
          <router-link to="/listproduct" class="btn btn-Light">Lihat Menu</router-link>
          <router-link to='/productdetail' class="btn btn-warning">
            Pesan <i class="fas fa-arrow-right"></i>
          </router-link>
        </div>

        <div class="col-lg-6">
          <img class="banner" src="../assets/banner.png" alt="" />
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "banner",
};
</script>

<style>
</style>

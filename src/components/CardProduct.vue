<template>
  <div id="CardProduct">
        <!-- CardProduct 1 -->
        
          <div class="card" style="width: 100%">
            <img class="img" src="../assets/menu 1.png" width="100%" />
            <div class="card-body text-center">
              <h5 class="nama-menu">{{item.name}}</h5>
              <h6 class="price">Harga : Rp {{item.price}}</h6>
              <router-link to="productdetail" class="btn btn-warning">
                Pesan Sekarang <i class="fas fa-arrow-right"></i>
              </router-link>
            </div>
          </div>
        </div>

        <!-- CardProduct 2 -->
        <!-- <div class="col-lg-3">
                <div class="card" style="width: 100%;">
                <img class="img" src="../assets/sate.png" width="100%">
                  <div class="card-body text-center">
                  <h5 class="nama-menu"> Sate Ayam </h5>
                    <h6 class="price">Harga : Rp 20.000</h6>
                      <router-link to="productdetail" class="btn btn-warning">
                    Pesan Sekarang <i class="fas fa-arrow-right"></i>
                  </router-link>
                </div>
                    </div>
              </div> -->

        <!-- CardProduct 3 -->
        <!-- <div class="col-lg-3">
                <div class="card" style="width: 100%;">
                <img class="img" src="../assets/sate.png" width="100%">
                  <div class="card-body text-center">
                  <h5 class="nama-menu"> Sate Kambing </h5>
                    <h6 class="price">Harga : Rp 25.000</h6>
                      <router-link to="productdetail" class="btn btn-warning">
                    Pesan Sekarang <i class="fas fa-arrow-right"></i>
                  </router-link>
                </div>
                    </div>
              </div> -->

        <!-- CardProduct 4 -->
        <!-- <div class="col-lg-3">
                  <div class="card" style="width: 100%;">
                <img class="img" src="../assets/baksoo.jpg" width="100%">
                  <div class="card-body text-center">
                  <h5 class="nama-menu"> Bakso </h5>
                    <h6 class="price">Harga : Rp 15.000</h6>
                      <router-link to="productdetail" class="btn btn-warning">
                    Pesan Sekarang <i class="fas fa-arrow-right"></i>
                  </router-link>
                </div>
                    </div>
            </div> -->
      
</template>

<script>
export default {
  name: "cardproduct",

  props:["item"]
};
</script>

<style>
</style>

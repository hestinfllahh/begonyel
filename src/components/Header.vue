<template>
  <div id="Header">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img class="logo" src="../assets/logo_begonyel.png"></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" style="font-weight : bold;" href="/">Home</a>
            </li>
            <li class="nav-item">
              <router-link to="/listproduct" class="nav-link active" aria-current="page" href="#">Menu Makanan</router-link>
            </li>
            <li class="nav-item" >
              <router-link to="/keranjang" class="nav-link" href="#">Keranjang <i class="fas fa-shopping-bag"></i
              ></router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
</style>
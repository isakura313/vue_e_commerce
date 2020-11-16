<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="#">
        <img src="../assets/logo.png" class="logo">
      </a>
      <a role="button" class="navbar-burger burger" aria-label="menu"
         aria-expanded="false" data-target="navbar_ecommerce">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbar_ecommerce" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item">
          Home
        </a>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong> Cart </strong>
            </a>
        </div>
      </div>
    </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
.logo{
  height: 240px;

}
</style>

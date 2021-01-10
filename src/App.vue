<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Header from './layouts/Header.vue';
import Footer from './layouts/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="sass">
@import "~bulma/sass/utilities/_all.sass"

$primary: #005BFF
$primary-dark: #002855
.main_wrap
  margin: 0 10em

</style>

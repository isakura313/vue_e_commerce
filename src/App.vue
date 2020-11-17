<template>
  <div class="wrapper">
    <Header v-bind:countOfProducts="countOfProduct" />
  <div class="columns">
    <div class="column">
      <h1 class="title is-size-3 has-text-centered" v-text="title"> </h1>
    </div>
   </div>
    <div class="columns is-multiline">
    <Card v-for="product in products.products"
          v-bind:key="product.id"
          v-bind:content="product" v-on:addToCart="addProduct(product.id)"/>
    </div>
  </div>

</template>

<script>
import products from './fixtures_books.json';
import Card from './components/Card.vue';
import Header from './components/layout/Header.vue';

export default {
  name: 'App',
  components: {
    Card,
    Header,
  },
  data() {
    return {
      products,
      title: 'Магазин электронной коммерции',
      cart: [],
    };
  },
  methods: {
    addProduct(id) {
      this.cart.push(id);
    },
  },
  computed: {
    countOfProduct() {
      return this.cart.length || 0;
    },
  },
};
</script>

<style>

</style>

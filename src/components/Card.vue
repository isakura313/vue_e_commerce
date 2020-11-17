<template>

    <div class="column is-one-third">

      <div class="card">
        <img v-bind:src="content.image" alt="" class="card__img">
        <h3 class="card__h3 is-size-3" v-text="content.title"> </h3>
        <p class="card__desription is-size-5" v-text="content.description"> </p>
        <p class="card__price is-size-5"> {{ content.price | formatPrice }} </p>
        <button class="button is-danger is-pulled-right" v-on:click="addProductToCart">
            Добавить в корзину
        </button>

      </div>
    </div>

</template>

<script>
export default {
  name: 'Card',
  props: ['content'],
  filters: {
    formatPrice(price) {
      if (!parseInt(price, 10)) { return ''; }
      if (price > 999) {
        const priceArray = String(price).split('').reverse();

        for (let i = 0; i < priceArray.length; i += 1) {
          if (i % 4 === 0) {
            priceArray.splice(i, 0, ' ');
          }
        }
        return `${priceArray.reverse().join('')} ₽`;
      } return `${price} ₽`;
    },
  },
  methods: {
    addProductToCart() {
      this.$emit('addToCart');
    },
  },
};
</script>

<style scoped>
.card{
  margin: 2em;
}
.card__img{
  height: 350px;
  padding: 40px;
}
</style>

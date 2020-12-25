<template>
  <div class="column is-one-quarter">
    <router-link :to="'section/'+link">
      <div class="card_promo">
        <img :src="image" alt="карточка товара" class="card_promo__img">
        <h3 class="card_promo__h3"> {{ name }}</h3>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'PromoCard',
  props: {
    name: String,
    image: String,
    link: String,
  },
};
</script>

<style scoped>
.card_promo {
  margin: 10px;
  cursor: pointer;
}

.card_promo__img {
  height: 200px;

}

</style>

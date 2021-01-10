<template>

  <div class="cart_item">
    <div class="cart__img" v-bind:style="{backgroundImage: `url(${image})`}"></div>
    <router-link :to="'/product/' + id">
      <h3 class="card__title is-size-5"> {{ title }} </h3>
    </router-link>
    <p class="card__price card_price_no_discount is-size-5"
       v-if="discount">
      <span class="has-text-danger has-text-weight-bold">{{ newPrice | formatPrice }} </span>
      <del class="has-text-grey">{{ price | formatPrice }}</del>
    </p>
    <p class="card__price is-size-5 has-text-weight-bold" v-else>
      {{ price | formatPrice }} </p>
    <p class="card__count is-size-6"> Вы заказали <span class="has-text-weight-italic">
        {{ count }}
      </span></p>
    <p class="card__available is-size-6"> В наличии <span class="has-text-weight-bold">
        {{ available }}
      </span></p>
    <button class="button" v-show="canBuy">Нет в наличии</button>
    <button class="button is-danger" @click="deleteFromCart">Удалить</button>
  </div>

</template>

<script>

export default {
  name: 'CartItem',
  components: {},
  data() {
    return {
      addInfo: 'Добавить в корзину',
      addInfoColor: 'button is-link is-pulled-right',
    };
  },
  props: {
    id: Number,
    image: String,
    rating: Number,
    title: String,
    description: String,
    discount: Boolean,
    price: Number,
    newPrice: Number,
    count: Number,
    available: Number,
  },
  filters: {
    formatPrice(price) {
      if (!parseInt(price, 10)) {
        return '';
      }
      if (price > 999) {
        const priceArray = String(price)
          .split('')
          .reverse();
        for (let i = 0; i < priceArray.length; i += 1) {
          if (i % 4 === 0) {
            priceArray.splice(i, 0, ' ');
          }
        }
        return `${priceArray.reverse()
          .join('')} ₽`;
      }
      return `${price} ₽`;
    },
  },
  methods: {
    deleteFromCart() {
      this.$emit('deleteItem');
    },
  },
  computed: {
    canBuy() {
      if (this.available === 0) {
        return true;
      }
      return false;
    },
  },

};
</script>

<style scoped>
.cart_item {
  margin: 2em;
  padding: 10px 10px 30px 10px;
  display: grid;
  grid-template-columns: 25% 35% 10% 10% 10% 10%;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid black;
}

.cart__img {
  height: 150px;
  width: 400px;
  padding: 7px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
}

.btn_discount {
  width: 45px;
  height: 45px;
}
.card_price_no_discount{
  display: flex;
  flex-direction: column;
}

.card__title {
  padding: 0 2em;
  text-align: left;
}

.card__title:hover {
  color: blue;
  cursor: pointer;
}
</style>

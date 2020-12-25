<template>
  <div class="column is-one-quarter-desktop is-full-mobile">

    <div class="card">
      <div class="card__img" v-bind:style="{backgroundImage: `url(${image})`}">
        <button class="button is-danger btn_discount" v-show="discount">
          {{
            discount ? `${Math.round((price - newPrice) /
              (price / 100))}%` : ''
          }}
        </button>
      </div>
      <StarRating
        :increment=0.1
        :read-only=true
        :star-size=20
        active-color="#ff8970"
        :show-rating="false"
        :rating="rating"
      />
      <router-link :to="'/product/' + id">
        <h3 class="card__title is-size-5"> {{ title | formatTitle }} </h3>
      </router-link>
      <p class="card__description is-size-5" v-text="description"></p>
      <p class="card__price is-size-5"
         v-if="discount">
        <span class="has-text-danger has-text-weight-bold">{{ newPrice | formatPrice }} </span>
        <del class="has-text-grey">{{ price | formatPrice }}</del>
      </p>
      <p class="card__price is-size-5 has-text-weight-bold" v-else>
        {{ price | formatPrice }} </p>
      <p class="card__available is-size-6"> В наличии {{ available }} </p>
      <button v-bind:class="addInfoColor"
              v-on:click="addProductToCart" v-if="available"> {{ addInfo }}
      </button>
      <button class="button" v-show="canBuy">Нет в наличии</button>
    </div>

  </div>

</template>

<script>
import StarRating from 'vue-star-rating';

export default {
  name: 'Card',
  components: {
    StarRating,
  },
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
    formatTitle(title) {
      if (title.length > 28) {
        return `${title.slice(0, 28)}...`;
      }
      return `${title}`;
    },
  },
  methods: {
    addProductToCart() {
      this.addInfo = 'В корзине';
      this.addInfoColor = 'is-danger button is-link is-pulled-right';
      this.$emit('addToCart');
    },
  },
  computed: {
    canBuy() {
      if (this.available === 0) {
        return true;
      }
      return false;
    },
    // discountSize() {
    //   // if (this.discount) {
    //   return `${Math.round((this.price - this.newPrice) / (this.price / 100))}%`;
    //   // }
    // },
  },

};
</script>

<style>
.card {
  margin: 2em;
  padding: 10px 10px 30px 10px;
}

.card__img {
  height: 350px;
  width: auto;
  padding: 7px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
}

.btn_discount {
  width: 45px;
  height: 45px;
}

.card__title:hover {
  color: blue;
  cursor: pointer;
}
</style>

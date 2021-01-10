<template>
  <div class="column is-one-quarter-desktop is-one-third-tablet is-full-mobile">

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
        <h3 class="card__title is-size-6-desktop "> {{ title | formatTitle }} </h3>
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
              id="btn_add"
              v-on:click="addProductToCart"
              v-if="available && !alreadyInCart">
        {{ addInfo }}
      </button>
      <div class="button_wrapper"
           v-else-if="alreadyInCart">
        <div class="buttons">
          <button v-bind:class="newInfoColor"
                  v-on:click="addProductToCart">
            {{ newInfo }}
          </button>
          <button class="button" @click="removeFromCart(id)"> -</button>
          <button class="button">{{ countInCart }}</button>
          <button class="button" @click="addToCart(id)"> +</button>
        </div>
        <button class="button" v-show="canBuy">Нет в наличии</button>
      </div>

    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import StarRating from 'vue-star-rating';

export default {
  name: 'Card',
  components: {
    StarRating,
  },
  data() {
    return {
      addInfo: 'В корзину',
      addInfoColor: 'btn_add button is-link is-pulled-right',
      newInfo: 'В корзине',
      newInfoColor: 'is-danger btn_add button is-link is-pulled-right',
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
      const filterNumber = 26;
      if (title.length > filterNumber) {
        return `${title.slice(0, filterNumber)}...`;
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
    addToCart() {
      this.$emit('addToCart');
      // this.$store.commit('UPDATE_COUNT_CART', id);
    },
    removeFromCart(id) {
      this.$store.commit('REMOVE_COUNT_CART', id);
    },
  },
  computed: {
    ...mapGetters([
      'cart',
      'cart_filter',
    ]),
    canBuy() {
      if (this.available === 0) {
        return true;
      }
      return false;
    },
    alreadyInCart() {
      for (let i = 0; i < this.cart_filter.length; i += 1) {
        if (this.id === this.cart_filter[i].id) {
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          return true;
        }
      }
      return false;
    },
    countInCart() {
      const itemChange = this.cart_filter.filter((item) => item.id === this.id);
      return itemChange[0].count || 0;
    },
  },
};
</script>

<style>
.card {
  margin: 2em;
  padding: 10px 20px 30px 20px;
}

.card__img {
  height: 260px;
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
.button_wrapper{
  display: flex;
  flex-direction: column;
}

.btn_add {
  margin-top: 40px;
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

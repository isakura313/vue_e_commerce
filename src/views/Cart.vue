<template>
  <div class="cart columns">
    <div class="column is-10 is-full-mobile">
      <CartItem v-for='item in cart'
                :newPrice='item.new_price'
                :key='item.id'
                :id='item.id'
                :image='item.image'
                :rating='item.rating'
                :title='item.title'
                :discount='item.discount'
                :count = 'item.count'
                :price='item.price'
                :available='item.available'
                v-on:deleteItem='deleteItemFromCart(item.id)'
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CartItem from '../components/CartItem.vue';

export default {
  name: 'Cart.vue',
  components: {
    CartItem,
  },
  data() {
    return {
      name: 'Базовая страница корзины>',
    };
  },
  computed: {
    ...mapGetters([
      'cart',
    ]),
  },
  methods: {
    deleteItemFromCart(id) {
      this.$store.commit('DELETE_ITEM', id);
    },
  },
};
</script>

<style scoped>

</style>

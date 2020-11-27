import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sort_by: 'new_price',
    cart: [],
    books: [],
    videocards: [],
  },
  getters: {
    cart: (state) => state.cart,
    books: (state) => state.books,
  },
  actions: {
    initBooks: ({ commit }, sortArg) => {
      axios.get('/json/full.json')
        .then((response) => {
          if (sortArg === 'asc') {
            commit('SET_BOOKS_ASC', response.data.books);
          }
          if (sortArg === 'desc') {
            commit('SET_BOOKS_DESC', response.data.books);
          }
        });
    },
  },
  mutations: {
    SET_BOOKS_ASC(state, books) {
      state.books = [...books].sort((a, b) => {
        if (a[state.sort_by] > b[state.sort_by]) {
          return 1;
        }
        if (a[state.sort_by] < b[state.sort_by]) {
          return -1;
        }
        return 0;
      });
    },
    SET_BOOKS_DESC(state, books) {
      state.books = [...books].sort((a, b) => {
        if (a[state.sort_by] < b[state.sort_by]) {
          return 1;
        }
        if (a[state.sort_by] > b[state.sort_by]) {
          return -1;
        }
        return 0;
      });
    },
    SET_CART(state, product) {
      state.cart.push(product);
    },
    DELETE_ITEM(state, id) {
      state.cart = state.cart.filter((item) => item.id !== id);
    },
  },
});

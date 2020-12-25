import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import moduleProducts from './modules/product';
import modulesCart from './modules/cart';
import modulesFavorites from './modules/favorites';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    modulesCart,
    moduleProducts,
    modulesFavorites,
  },
  plugins: [
    createPersistedState({
      paths: ['modulesCart.cart'],
    }),
  ],
});

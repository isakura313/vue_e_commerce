import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import moduleProducts from './modules/product';
import modulesCart from './modules/cart';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    modulesCart,
    moduleProducts,
  },
  plugins: [
    createPersistedState({
      paths: ['modulesCart.cart'],
    }),
  ],
});

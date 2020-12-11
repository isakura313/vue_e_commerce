import axios from 'axios';

const modulesProducts = {
  state: {
    sort_by: 'new_price',
    products: [],
  },
  getters: {
    products: (state) => state.products,
  },
  actions: {
    initProducts: ({ commit }, payload) => {
      axios.get(` http://localhost:3000/${payload.product}`)
        .then((response) => {
          if (payload.sort === 'asc') {
            commit('SET_PRODUCTS_ASC', response.data);
          }
          if (payload.sort === 'desc') {
            commit('SET_PRODUCTS_DESC', response.data);
          }
        });
    },
  },
  mutations: {
    SET_PRODUCTS_ASC(state, products) {
      state.products = [...products].sort((a, b) => {
        if (a[state.sort_by] > b[state.sort_by]) {
          return 1;
        }
        if (a[state.sort_by] < b[state.sort_by]) {
          return -1;
        }
        return 0;
      });
    },
    SET_PRODUCTS_DESC(state, products) {
      state.products = [...products].sort((a, b) => {
        if (a[state.sort_by] < b[state.sort_by]) {
          return 1;
        }
        if (a[state.sort_by] > b[state.sort_by]) {
          return -1;
        }
        return 0;
      });
    },
  },
};

export default modulesProducts;

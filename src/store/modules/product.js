
const modulesProducts = {
  state: {
    sort_by: 'new_price',
    products: [],
  },
  plugins: [createPersistedState()],
  getters: {
    cart: (state) => state.cart,
    products: (state) => state.products,
  },
  actions: {
    initProducts: ({ commit }, payload) => {
      axios.get('/json/full.json')
        .then((response) => {
          if (payload.sort === 'asc') {
            commit('SET_PRODUCTS_ASC', response.data[`${payload.product}`]);
          }
          if (payload.sort === 'desc') {
            commit('SET_PRODUCTS_DESC', response.data[`${payload.product}`]);
          }
        });
    },
  },
  mutations: {
    SET_PRODUCTS_ASC(state, products) {
      state.products = products;
      // state.products = [...products].sort((a, b) => {
      //   if (a[state.sort_by] > b[state.sort_by]) {
      //     return 1;
      //   }
      //   if (a[state.sort_by] < b[state.sort_by]) {
      //     return -1;
      //   }
      //   return 0;
      // });
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
    SET_CART(state, product) {
      state.cart.push(product);
    },
    DELETE_ITEM(state, id) {
      state.cart = state.cart.filter((item) => item.id !== id);
    },
  },
};

export default modulesProducts;

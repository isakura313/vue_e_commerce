const modulesCart = {
  state: () => ({
    cart: [],
  }),
  getters: {
    cart: (state) => {
      function check(item) {
        let counter = 0;
        for (let i = 0; i < state.cart.length; i += 1) {
          if (item.id === state.cart[i].id) {
            counter += 1;
            // eslint-disable-next-line no-param-reassign
            item.count = counter;
          }
        }
      }

      state.cart.map((obj) => check(obj));
      for (let i = 0; i < state.cart.length; i += 1) {
        if (state.cart[i].count > 1) {
          state.cart.splice(i, 1);
        }
      }
      return state.cart;
    },
  },
  mutations: {
    SET_CART(state, product) {
      state.cart.push(product);
    },
    DELETE_ITEM(state, id) {
      state.cart = state.cart.filter((item) => item.id !== id);
    },
  },
};

export default modulesCart;

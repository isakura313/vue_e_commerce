const modulesCart = {
  state: () => ({
    cart: [],
  }),
  getters: {
    cart: (state) => state.cart,
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

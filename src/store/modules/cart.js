const modulesCart = {
  state: () => ({
    cart: [],
  }),
  getters: {
    cart: (state) => state.cart,
    cart_filter: (state) => {
      const cartFilter = state.cart;

      function check(item) {
        for (let i = 0; i < cartFilter.length; i += 1) {
          if (item.id === cartFilter[i].id) {
            cartFilter[i].count = cartFilter.filter((j) => j.id === item.id).length;
          }
        }
      }

      cartFilter.map((obj) => check(obj));
      return Array.from(new Set(cartFilter.map((s) => s.id)))
        .map((id) => ({
          id,
          author: cartFilter.find((s) => s.id === id).author,
          count: cartFilter.find((s) => s.id === id).count,
          available: cartFilter.find((s) => s.id === id).available,
          description: cartFilter.find((s) => s.id === id).description,
          discount: cartFilter.find((s) => s.id === id).discount,
          image: cartFilter.find((s) => s.id === id).image,
          new_price: cartFilter.find((s) => s.id === id).new_price,
          price: cartFilter.find((s) => s.id === id).price,
          rating: cartFilter.find((s) => s.id === id).rating,
          title: cartFilter.find((s) => s.id === id).title,
        }));
    },
  },
  mutations: {
    SET_CART(state, product) {
      state.cart.push(product);
    },
    REMOVE_COUNT_CART(state, id) {
      for (let i = 0; i < state.cart.length; i += 1) {
        if (id === state.cart[i].id) {
          state.cart.splice(i, 1);
          return;
        }
      }
    },
    DELETE_ITEM(state, id) {
      state.cart = state.cart.filter((item) => item.id !== id);
    },
  },
};

export default modulesCart;

const modulesFavorites = {
  state: () => ({
    favorites: [],
  }),
  getters: {
    favorites: (state) => state.favorites,
  },
  mutations: {
    SET_FAVORITES(state, product) {
      state.favorites.push(product);
    },
    DELETE_ITEM(state, id) {
      state.favorites = state.favorites.filter((item) => item.id !== id);
    },
  },
};

export default modulesFavorites;

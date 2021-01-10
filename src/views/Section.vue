<template>
  <div class="wrapper">
    <div class="columns">
      <div class="column">
        <h1 class="title is-size-3 has-text-centered"> {{ this.$route.params.product_name }} </h1>
      </div>
    </div>
    <div class="columns">
      <div class="column is-offset-2">
        <b-field label="Сортировка товара">
          <b-select placeholder="От дешевого к дорогому"
                    v-model="sortBy"
                    @input="sortProducts">
            <option
              v-for="option in sortedData"
              :value="option.val"
              :key="option.id">
              {{ option.sorted }}
            </option>
          </b-select>
        </b-field>

      </div>
    </div>
    <div class="columns is-multiline main_wrap">
      <Card v-for='item in products'
            :newPrice='item.new_price'
            :key='item.id'
            :id='item.id'
            :image='item.image'
            :rating='item.rating'
            :title='item.title'
            :discount='item.discount'
            :price='item.price'
            :available='item.available'
            v-on:addToCart='addProduct(item)'
      />
    </div>
  </div>

</template>

<script>
import { mapGetters } from 'vuex';
import Card from '../components/Card.vue';

export default {
  name: 'Section',
  components: {
    Card,
  },
  data() {
    return {
      title: 'Отдел книг',
      sortBy: 'asc',
      sortedData: [
        {
          id: 1,
          val: 'asc',
          sorted: 'От дешевого к дорогому',
        },
        {
          id: 2,
          val: 'desc',
          sorted: 'От дорогих к дешевым',
        },
      ],
    };
  },
  methods: {
    addProduct(item) {
      this.$store.commit('SET_CART', item);
    },
    sortProducts() {
      return this.$store.dispatch('initProducts', {
        product: this.$route.params.product_name,
        sort: this.sortBy,
      });
    },
  },
  computed: {
    ...mapGetters([
      'products']),
  },
  beforeRouteUpdate(to, from, next) {
    this.$store.dispatch('initProducts', {
      product: to.params.product_name,
      sort: this.sortBy,
    });
    next();
  },
  async created() {
    return this.$store.dispatch('initProducts',
      {
        product: this.$route.params.product_name,
        sort: this.sortBy,
      });
  },
};
</script>

<style scoped>
.wrapper {
  min-height: 780px;
  margin-bottom: 300px;
}

.main_wrap {
  padding: 0 1rem 0 6rem;
}

@media all and (min-width: 700px) {
  .main_wrap {
    margin: 0 1em;
  }
}

</style>

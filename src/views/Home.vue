<template>
  <div class="home">
    <carousel
      :per-page="1"
      :mouse-drag="false"
    >
      <slide>
        <section class="hero is-link">
          <div class="hero-body">
            <div class="container">
              <h1 class="title"> {{ name }} </h1>
              <h2 class="subtitle">
                Огромные скидки на все
              </h2>
            </div>
          </div>
        </section>
      </slide>
      <slide>
        <section class="hero is-danger">
          <div class="hero-body">
            <div class="container">
              <h1 class="title"> {{ name }} </h1>
              <h2 class="subtitle">
                Получите огромную скидку, просто нажав на данный слайдер
              </h2>
            </div>
          </div>
        </section>
      </slide>
      <slide>
        <section class="hero is-warning">
          <div class="hero-body">
            <div class="container">
              <h1 class="title"> {{ name }} </h1>
              <h2 class="subtitle">
                Здесь могла быть ваша реклама
              </h2>
            </div>
          </div>
        </section>
      </slide>
    </carousel>
    <div class="columns is-centered">
      <PromoCard v-for="product in products"
                 v-bind:key="product.id"
                 :image="product.image"
                 :name="product.name"
                 :link="product.path"
      />
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import PromoCard from '../components/PromoCard.vue';

export default {
  name: 'Home.vue',
  components: {
    Carousel,
    Slide,
    PromoCard,
  },
  data() {
    return {
      name: 'E-commerce Project',
      products: [
        {
          id: 1,
          name: 'Книги',
          image: 'https://cdn1.ozone.ru/s3/multimedia-4/wc1200/6008736520.jpg',
          path: 'books',
        },
        {
          id: 2,
          name: 'Видеокарты',
          image: 'https://cdn1.ozone.ru/s3/multimedia-y/wc1200/6028177630.jpg',
          path: 'videocards',
        },
        {
          id: 3,
          name: 'Ноутбуки',
          image: 'https://cdn1.ozone.ru/s3/multimedia-2/c250/6029569286.jpg',
          path: 'notebooks',
        },
      ],
    };
  },
};
</script>

<style scoped>

</style>

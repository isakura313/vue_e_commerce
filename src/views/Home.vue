<template>
  <div class="home">
    <section class="home_section">
      <carousel
        :per-page="1"
        :mouse-drag="false"
      >
        <slide
          v-for="(slide, index)  in slides"
          :key="index"
        >
          <section :class="slide.classSlider">
            <div class="hero-body">
              <div class="container">
                <h1 class="title"> {{ slide.name }} </h1>
                <h2 class="subtitle">
                  {{ slide.info }}
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
    </section>
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
      slides: [
        {
          classSlider: 'hero is-link',
          name: 'E-commerce Project',
          info: 'Огромные скидки на все',
        },
        {
          classSlider: 'hero is-danger',
          name: 'E-commerce Project',
          info: 'Получите огромную скидку, просто нажав на данный слайдер',
        },
        {
          classSlider: 'hero is-warning',
          name: 'E-commerce Project',
          info: 'Здесь могла быть ваша реклама',
        },
      ],
    };
  },
};
</script>

<style scoped>
.home_section{
  min-height: 770px;
}
</style>

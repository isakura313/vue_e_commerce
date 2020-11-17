import Vue from 'vue';
import Router from 'vue-router';
import App from '@/App.vue';
// import Cart from '@/components/Cart.vue';
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/shop',
      name: 'shop',
      component: App,
      props: true,
    },
    // {
    //   path: '/product/:id',
    //   name: 'Id',
    //   component: Product,
    //   props: true,
    //   children: [
    //     {
    //       path: 'edit',
    //       name: 'Edit',
    //       component: EditProduct,
    //       props: true
    //     }
    //   ]
    // },
    // {
    //   path: '/form',
    //   name: 'Form',
    //   component: Form,
    //   props: true
    // },
    // {
    //   path: '*',
    //   redirect:"/"
    // }
  ],
});

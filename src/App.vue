<template>
  <div id="app">
    <Header />
      <Sidebar />
      <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Sidebar from './components/Sidebar.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Sidebar,
  },
};
</script>
<template>
  <div id="app">
    <NavBar/>
    <HeaderBanner />
    <router-view />
  </div>
</template>

<script>
import HeaderBanner from './components/HeaderBanner.vue';
import NavBar from './components/NavBar.vue';

export default {
  components: {
    HeaderBanner,
    NavBar
  },
};
</script>

<style>
.main-content {
  display: flex;
  gap: 20px;
  padding: 20px;
}
</style>

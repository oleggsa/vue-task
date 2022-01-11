<template>
  <div id="app">
    <div class="container">
      <h3>Котики</h3>
      <CatsList />
    </div>
  </div>
</template>

<script>
import CatsList from './components/CatsList.vue'

export default {
  name: 'App',
  components: {
    CatsList
  },
  created() {
    this.$store.dispatch('getItemsAPI')
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;1,400&family=Roboto:wght@300;400;700&display=swap');

  h3 {
    text-align: center;
    font-size: 35px;
  }
</style>
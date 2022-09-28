<template> 
  <div id="app">
    <v-table-vue
    :table_data="DATA"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import vTableVue from './components/v-table.vue';

export default {
  name: 'App',
  components: {
    vTableVue
  },

  computed: {
    ...mapGetters(['DATA'])
  },

  methods: {
    ...mapActions(['GET_DATA_FROM_API']),
  },

  mounted(){
    this.GET_DATA_FROM_API()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

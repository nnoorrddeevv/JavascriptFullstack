<template>
  <div>
    <Navigation />
    <router-view/>
  </div>
</template>


<script>
import Navigation from '@/components/Navigation.vue'
export default {
  
    name: 'Home',
    components: {
      Navigation
    },
  
  setup() {
    
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
  background-color: rgba(175, 215, 255, 0.1);
  margin: 0;
  padding: 0;
}

html, body {
  height: 100vh;
}

* {
  margin: 0;
  padding: 0;
}

</style>

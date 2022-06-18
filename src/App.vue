<template>
  <Header/>
  <Functionnalities/>
</template>

<script>
import Header from './components/Header.vue'
import Functionnalities from "./components/Functionnalities";

export default {
  name: 'App',
  components: {
    Header,
    Functionnalities
  }
}
</script>

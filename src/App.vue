<template>
  <Header/>
  <Functionnalities/>
  <Goals/>
  <Footer/>
</template>

<script>
import Header from './components/Header.vue'
import Functionnalities from "./components/Functionnalities";
import Footer from "@/components/Footer";
import Goals from "@/components/Goals";

export default {
  name: 'App',
  components: {
    Header,
    Functionnalities,
    Footer,
    Goals
  }
}
</script>

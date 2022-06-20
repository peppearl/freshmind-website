<template>
  <Header/>
  <Functionnalities/>
  <Goals/>
  <Newsletter/>
  <Footer/>
</template>

<script>
import Header from './components/Header.vue'
import Functionnalities from "./components/Functionnalities";
import Footer from "@/components/Footer";
import Goals from "@/components/Goals";
import Newsletter from "@/components/Newsletter";

export default {
  name: 'App',
  components: {
    Header,
    Functionnalities,
    Footer,
    Goals,
    Newsletter
  }
}
</script>

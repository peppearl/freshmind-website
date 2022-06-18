<template>
  <Header/>
  <Functionnalities/>
  <Footer/>
</template>

<script>
import Header from './components/Header.vue'
import Functionnalities from "./components/Functionnalities";
import Footer from "@/components/Footer";

export default {
  name: 'App',
  components: {
    Header,
    Functionnalities,
    Footer
  }
}
</script>

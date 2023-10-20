<template>
  <Navbar></Navbar>
  <div class="container">
    <Section1></Section1>
    <Section2></Section2>
    <Portfolio></Portfolio>
    <Blog></Blog>
  </div>
  <Footer></Footer>
</template>

<script>
import Navbar from '@/components/Layouts/Navbar.vue';
import Section1 from '@/components/Home/Section1.vue';
import Section2 from '@/components/Home/Section2.vue';
import Portfolio from '@/components/Home/Portfolio.vue';
import Blog from '@/components/Home/Blog.vue';
import Footer from '@/components/Layouts/Footer.vue';
export default {
  components: {
    Navbar,
    Section1,
    Section2,
    Portfolio,
    Blog,
    Footer
  }
}
</script>
<style scope></style>

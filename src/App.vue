<template>
  <Navbar></Navbar>
  <div class="container">
    <Section1></Section1>
    <Section2></Section2>
  </div>
</template>

<script>
import Navbar from '@/components/Home/Navbar.vue';
import Section1 from '@/components/Home/Section1.vue';
import Section2 from '@/components/Home/Section2.vue';
export default {
  components: {
    Navbar,
    Section1,
    Section2
  }
}
</script>
<style scope></style>

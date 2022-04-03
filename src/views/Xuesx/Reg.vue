<template>
  <div>
    <Header :title="title"></Header>
    <Register></Register>
  </div>
</template>

<script>
import Header from "./components/header.vue";
import Register from "./components/Register.vue";
export default {
  name: "Reg",
  components: {
    Header,
    Register,
  },
  data() {
    return {
      title: "注册",
    };
  },
};
</script>

<style scoped>
</style>
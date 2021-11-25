<template>
  <Map />
  <Content />
</template>

<script>
// @ is an alias to /src
import Map from "../components/Map.vue";
import Content from "../components/Content.vue";

export default {
  name: "Main",
  components: {
    Map,
    Content,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Spartan:wght@100;200;300&display=swap');

</style>

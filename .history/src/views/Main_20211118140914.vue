<template>
  <Start />
  <Map />
  <Content />
</template>

<script>
// @ is an alias to /src
import Start from "../components/Start.vue";
import Map from "../components/Map.vue";
import Content from "../components/Content.vue";

export default {
  name: "Main",
  components: {
    Start,
    Map,
    Content,
  },
};
</script>

<style scoped>

</style>

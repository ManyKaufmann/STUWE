<template>
  <Map />
  <Content />
</template>

<script>
// @ is an alias to /src
import Map from "../components/Map.vue";
import Content from "../components/Content.vue";
import Start from "../components/Start.vue";

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

<template>
  <Map />
  <Content />
</template>

<script>
// @ is an alias to /src
import Map from "../components/Map.vue";
import content from "../components/Content.vue";

export default {
  name: "Main",
  components: {
    Map,
    Content
  },
};
</script>

<style scoped>
</style>

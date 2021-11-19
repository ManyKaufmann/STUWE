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

<style scoped>
body {
  
}
</style>

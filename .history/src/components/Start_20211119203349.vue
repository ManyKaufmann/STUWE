<template>
  <div class="start-container">
    <h1>hello</h1>
  </div>
</template>

<script>
import contentful from "../modules/contentful.js";

export default {
  name: "Content",
  components: {
    Start,
    Departement,
  },
  data: function () {
    return {
      departement: [],
    };
  },

  created: async function () {
    this.departement = await contentful.getHsluFacts();
  },
};
</script>

<style scoped>
.start-container {
  top: 0%;
  height: 100vh;
  width: 100vw;
  background-color: rgba(205, 8, 231, 0.5);
  backdrop-filter: blur(7px);
  overflow-y: scroll;
}
</style>

<template>
  <Departement />
</template>

<script>
import Departement from "./Departement.vue";
import contentful from "../modules/contentful.js";

export default defineComponent({
  name: "Content",
  components: {
    Start,
    Departement,
  },
  props: {
    departementId: String,
  },
  mounted: {

      onScrolling() {
          if(departementId == "soziale-arbeit")
      }
  },
  

  created() {
    window.addEventListener("scroll", this.onScrolling);
  },
  unmounted() {
    window.removeEventListener("scroll", this.onScrolling);
  },
});
</script>

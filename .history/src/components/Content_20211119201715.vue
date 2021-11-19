<template>
  <div id="main-container">
    <Start />

    <div id="content-container">
      <h1>Here comes the content!</h1>
      <ul id="array-rendering">
        <ul v-for="d in departement" :key="d.hsluFacts" :class="d.fields.departementName">
          <Departement
            :departementName="d.fields.departementName"
            :infoDepartemente="d.fields.infoDepartemente"
            :studiengnge="d.fields.studiengnge"
            :gebude="d.fields.gebude"
          />
        </ul>
      </ul>
    </div>
  </div>
</template>

<script>
import Start from "./Start.vue";
import Departement from "./Departement.vue";
// import { createClient } from "contentful";
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
h1 {
  color: black;
}

.main-container {
  position: fixed;
  top: 0;
  /* height: 100vh; */
  /* width: 100vw; */
}

#content-container {
  width: 50%;
  margin-left: 50%;
  right: 0;
  top: 0;
  /* position: fixed; */
  height: 200vh;
  background-color: rgba(224, 205, 214, 0.5);
  overflow-y: scroll;
  backdrop-filter: blur(7px);
}
</style>

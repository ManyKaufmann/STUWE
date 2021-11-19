<template>
  <div id="main-container">
    <div class="start-container">
      <Start />
    <div id="content-container">
      <h1>Here comes the content!</h1>
      <ul id="array-rendering">
        <li v-for="d in departement" :key="d.hsluFacts">
          <Departement
            :departementName="d.fields.departementName"
            :infoDepartemente="d.fields.infoDepartemente"
            :studiengnge="d.fields.studiengnge"
            :gebude="d.fields.gebude"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Start from "./Start.vue";
import Departement from "./Departement.vue";
import { createClient } from "contentful";

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

  created: function () {
    let client = createClient({
      space: "ysi1w9hs8nqb",
      accessToken: "VMBxczFLhJpJq09naVF2q44ubmFJ91Gm3098TrfYfuk",
    });

    client
      .getEntries({
        content_type: "hsluFacts",
      })

      .then((entries) => {
        console.log(entries);
        this.departement = entries.items;
      });
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

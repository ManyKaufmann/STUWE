<template>
  <div id="main-container">
    <Start />
    <div id="content-container">
      <ul id="array-rendering">
        <ul v-for="d in departement" :key="d.hsluFacts">
          <Departement
            :departementName="d.fields.departementTitel"
            :departementId="d.fields.departementId"
            :infoDepartemente="d.fields.infoDepartemente"
            :studiengnge="d.fields.studiengnge"
            :studiengaenge="d.fields.studiengaenge"
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
}

#content-container {
  padding-top: 10px;
  width: 50%;
  margin-left: 50%;
  right: 0;
  top: 0;
  background-color: rgba(255, 226, 102, 0.7);
  backdrop-filter: blur(7px);
}
</style>

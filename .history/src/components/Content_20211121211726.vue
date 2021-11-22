<template>
  <div id="main-container">
    <Start />
    <div id="content-container">
      <h1>Here comes the content!</h1>
      <ul id="array-rendering">
        <ul v-for="d in departement" :key="d.hsluFacts">
          <Departement
            :departementName="d.fields.departementName"
            :departementId="d.fields.departementId"
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
    window.addEventListener("scroll", this.onScrolling);

  },
  methods: {
    //checks if element is on screen
    isElementOnScreen(id) {
      const element = document.getElementById(id);
      let bounds = element.getBoundingClientRect();
      return bounds.top < window.innerHeight && bounds.bottom > 0;
    },
    //set active chapter
    onScrolling() {
      for (const chapterName in this.chapters) {
        if (this.isElementOnScreen(chapterName)) {
          this.setActiveChapter(chapterName);
          break;
        }
      }
    },
  },
  // created() {
  //   window.addEventListener("scroll", this.onScrolling);
  // },
  unmounted() {
    window.removeEventListener("scroll", this.onScrolling);
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
  width: 50%;
  margin-left: 50%;
  right: 0;
  top: 0;
  height: 200vh;
  background-color: rgba(224, 205, 214, 0.5);
  overflow-y: scroll;
  backdrop-filter: blur(7px);
}
</style>

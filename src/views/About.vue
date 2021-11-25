<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>{{ spitzname }}</h1>
    <img class="about-img" :src="aboutFoto.fields.file.url" />
    <p>{{ aufgabe }}</p>

     <div id="about-container">
      <ul id="array-rendering">
      <ul v-for="a in about" :key="a.about">
          <About
          :spitzname="a.fields.spitzname"
          :aboutFoto="a.fields.aboutFoto"
          :aufgabe="a.fields.aufgabe"
          />
      </ul>
      </ul>
      </div>
      </div>
</template>

<script>
import contentful from "../modules/contentful.js";

export default {
  name: "About",
  props: {
    spitzname: String,
    aboutFunktion: String,
    aboutFoto: Object,
    aufgabe: String,
  },
  data: function () {
    return {
      about: [],
    };
  },

  created: async function () {
    this.about = await contentful.getAbout();
  },
};
</script>


<style scoped>
.about {
  padding-top: 10px;
  top: 0%;
  height: 100vh;
  width: 100vw;
  background-color: rgba(62, 190, 152, 0.5);
  backdrop-filter: blur(7px);
}

  .about-img {
  max-width: 50px;
  position: relative;
  padding: 25px 80px;
}

</style>



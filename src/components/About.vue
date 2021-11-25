<template>
  <section class="about">
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
  </section>
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
  

  created: async function () {
    this.about = await contentful.getAbout();
  },
};
</script>


<style scoped>
.about {
  font-family: "Spartan", sans-serif;
  padding-top: 10px;
  top: 0%;
  height: 100vh;
  width: 100vw;
  background-color: rgba(255, 226, 102, 0.7);
  backdrop-filter: blur(7px);
}

  .about-img {
  position: relative;
  padding: 50px 50px;
}

</style>



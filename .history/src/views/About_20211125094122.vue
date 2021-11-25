<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>{{ spitzname }}</h1>
    <img :class="about-img" :src="aboutFoto.fields.file.url" />
    <p>{{ aufgabe }}</p>
  </div>
</template>

<script>
export default {
  name: "About",
  props: {
    spitzname: String,
    aboutFunktion: String,
    aboutFoto: Object,
    aufgabe: String,
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
  width: 100px;
  position: relative;
  padding: 25px 80px;
}

</style>



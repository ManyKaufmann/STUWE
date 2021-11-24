<template>
  <section :id="departementId">
    <h1>{{ departementName }}</h1>
    <div>{{ infoDepartemente }}</div>
    <div>{{ studiengnge }}</div>
    <div>gebude.fields.title }}</div>
    <img class="gebaede-img" :src="gebude.fields.file.url" />
  </section>
</template>

<script>
export default {
  name: "Departement",
  props: {
    departementId: String,
    departementName: String,
    infoDepartemente: String,
    studiengnge: String,
    gebude: Object,
  },
};
</script>
<style scoped>
section {
  padding: 25px 80px;
  border-bottom: 0px solid #ddd;
  opacity: 0.25;
  font-size: 13px;
  font-family: "Raleway", sans-serif;
}

section.active {
  opacity: 1;
  font-size: 20px;
}

img#soziale-arbeit.gebaede-img {
  position: relative;
  padding: 25px 80px;
}
</style>
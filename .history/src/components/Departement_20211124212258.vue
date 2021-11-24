<template>
  <section :id="departementId">
    <img :src="departementTitel.fields.file.url" />

    <div>{{ infoDepartemente }}</div>
    <div>{{ studiengnge }}</div>
    <img :class="gebaede-mg" :src="gebude.fields.file.url" />
  </section>
</template>

<script>
export default {
  name: "Departement",
  props: {
    departementId: String,
    departementTitel: Object,
    infoDepartemente: String,
    studiengnge: String,
    studiengaenge: String,
    gebude: Object,
  },
};
</script>
<style scoped>
section {
  padding-top: 40%;
  border-bottom: 0px solid #ddd;
  opacity: 0.25;
  font-size: 13px;
  font-family: "Raleway", sans-serif;
}

section.active {
  opacity: 1;
  font-size: 20px;
}

.gebaede-img {
  position: relative;
  padding: 25px 80px;
}
</style>

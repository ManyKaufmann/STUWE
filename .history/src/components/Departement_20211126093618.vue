<template>
  <section :id="departementId">
    <img :class="dep - titel" :src="departementTitel.fields.file.url" />
    <div class="departement-info">{{ infoDepartemente }}</div>
    <div class="studienauswahl" v-html="studienauswahl"></div>
    <img :class="gebaede - mg" :src="gebude.fields.file.url" />
  </section>
</template>

<script>
export default {
  name: "Departement",
  props: {
    departementId: String,
    departementTitel: Object,
    infoDepartemente: String,
    studienauswahl: String,
    gebude: Object,
  },
};
</script>
<style scoped>
section {
  padding-top: 40%;
  border-bottom: 0px solid #ddd;
  opacity: 0.25;
  font-size: 18px;
  font-family: "Raleway", sans-serif;
}

section.active {
  opacity: 1;
  font-size: 20px;
}

.departement-info {
  font-family: "Spartan", sans-serif;
  text-align: left;
  padding: 5%

}

.studienauswahl {
  font-family: "Spartan", sans-serif;
  text-align: left;
  padding: 5%;
list-style-type: kannada;


}

.gebaede-img {
  position: relative;
  padding: 25px 80px;
}
</style>

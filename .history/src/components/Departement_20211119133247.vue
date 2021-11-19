<template>
  <div class="departement">
    <h1>{{ departement.fields.departementName }}</h1>
    <div>{{ departement.fields.infoDepartemente }}</div>
    <div>{{ departement.fields.studiengnge }}</div>
    <img  />
  </div>
</template>

<script>
export default {
  name: "Departement",
  props: {
    departement: Object,
    // departementName: String,
    // infoDepartemente: String,
    // Gebäude Illu
    // studiengnge: String,
    // fotoDep: 
  },
};
</script>

<template>
  <div class="departement">
    <h1>{{ departementName }}</h1>
    <div>{{ infoDepartemente }}</div>
    <div>{{ studiengnge }}</div>
    <div>{{ gebude.fields.title }}</div>
  </div>
</template>

<script>
export default {
  name: "Departement",
  props: {
    departementName: String,
    infoDepartemente: String,
    // Gebäude Illu
    studiengnge: String,
    gebude: Object,
  },
};
</script>

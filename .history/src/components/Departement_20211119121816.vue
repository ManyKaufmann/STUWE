<template>
  <div class="departement">
    <h1>{{ departementName }} hello</h1>
    <div>{{ infoDepartemente }}</div>
    <div>{{ studiengnge }}</div>
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
  },
};
</script>

<template>
  <div class="departement">
    <h1>{{ departementName }}</h1>
    <div>{{ infoDepartemente }}</div>
    <div>{{ studiengaenge }}</div>
  </div>
</template>

<script>
export default {
  name: "Departement",
  props: {
    departementName: String,
    infoDepartemente: String,
    // Gebäude Illu
    studiengaenge: String,
  },
};
</script>

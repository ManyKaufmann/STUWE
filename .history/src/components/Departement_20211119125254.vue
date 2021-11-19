<template>
  <div class="departement">
    <h2>yuhuhu</h2>

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
    infoDep: String,
    // Gebäude Illu
    studiengaenge: String,
  },
};
</script>

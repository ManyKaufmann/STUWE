<template>
  <div class="department">
    <h1>{{ departementName }}</h1>
    <div>{{ infoDepartemente }}</div>
    <div>{{studiengnge}}
  </div>
</template>

<script>
export default {
  name: "department",
  props: {
    departementName: String,
    infoDepartemente: String,
    // Gebäude Illu
    studiengnge: String,
  },
};
</script>

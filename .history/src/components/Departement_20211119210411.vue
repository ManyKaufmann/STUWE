<template>
  <div class="departement">
    <section :id="departementName">
    <h1>{{ departementName }}</h1>
    <div>{{ infoDepartemente }}</div>
    <div>{{ studiengnge }}</div>
    <div>{{ gebude.fields.title }}</div>
    <img :src="gebude.fields.file.url" >
    </section>

  </div>
</template>

<script>
export default {
  name: "Departement",
  props: {
    departementId: String,
    departementName: String,
    infoDepartemente: String,
    // Gebäude Illu
    studiengnge: String,
    gebude: Object,
  },
};
</script>

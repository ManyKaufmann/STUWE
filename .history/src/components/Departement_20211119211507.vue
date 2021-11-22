<template>
  <div class="departement">
    <section > 
    <h1>{{ departementName }}</h1>
    <div>{{ infoDepartemente }}</div>
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
    gebude: Object,
  },
};
</script>

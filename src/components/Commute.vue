<template>
  <div class="commute">
    <h1>{{ person }}'s commute</h1>
    <div>{{ person }} commutes from {{ start }} to {{ end }}</div>
  </div>
</template>

<script>
export default {
  name: "commute",
  props: {
    person: String,
    start: String,
    end: String,
  },
};
</script>

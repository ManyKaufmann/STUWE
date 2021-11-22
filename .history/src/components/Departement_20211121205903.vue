<template>
    <section :id="departementId" :class="active ? 'active' : ''">
      <h1>{{ departementName }}</h1>
      <div>{{ infoDepartemente }}</div>
      <div>{{ studiengnge }}</div>
      <div>{{ gebude.fields.title }}</div>
      <img :src="gebude.fields.file.url" />
    </section>
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
  },  methods: {
    //checks if element is on screen
    isElementOnScreen(id) {
      const element = document.getElementById(id);
      let bounds = element.getBoundingClientRect();
      return bounds.top < window.innerHeight && bounds.bottom > 0;
    },
    //set active chapter
    onScrolling() {
      for (const chapterName in this.chapters) {
        if (this.isElementOnScreen(chapterName)) {
          this.setActiveChapter(chapterName);
          break;
        }
      }
    },
  },
  // created() {
  //   window.addEventListener("scroll", this.onScrolling);
  // },
  unmounted() {
    window.removeEventListener("scroll", this.onScrolling);
  },
 
};
</script>
<style scoped>
section {
    padding: 25px 80px;
    border-bottom: 0px solid #ddd;
    opacity: 0.25;
    font-size: 13px;
    font-family: "Raleway", sans-serif;
}

section.active {
  opacity: 1;
}
</style>
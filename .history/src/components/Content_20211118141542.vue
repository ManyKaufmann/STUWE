<template>
<div id="main-container">
  <div class="start-container">
  </div>
  <div id="content-container">
    <h1>Here comes the content!</h1>
  </div>
</template>

// <script>
// import { defineComponent } from "@vue/composition-api";

// export default defineComponent({
//   setup() {},
// });
//
</script>

<style scoped>
h1 {
  color: black;
}

.container {
    position: fixed;
    width: 100vh;
}

#content-container {
  width: 50%;
  /* margin-left: 50%; */
  right: 0;
  top: 0;
  position: fixed;
  height: 200vh;
  background-color: rgba(224, 205, 214, 0.5);
  overflow-y: scroll;
  backdrop-filter: blur(7px);
}
</style>

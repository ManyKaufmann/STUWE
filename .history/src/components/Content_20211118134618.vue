<template>
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
  color: white;
}
#content-container {
  width: 50%;
  /* margin-left: 50%; */
  right: 0;

  background-color: rgba(161, 70, 113, 0.5);
  /* font-family: sans-serif; */
  overflow-y: scroll;
  backdrop-filter: blur(8px);
}
</style>

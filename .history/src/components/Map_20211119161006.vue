<template>
  <div>
    <div class="mapContainer">
      <div ref="container" id="map"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import mapboxgl from "mapbox-gl";
import contentful from "@/modules/contentful.js";

export default {
  name: "Map",

  data: function () {
    return {
      commutes: [],
    };
  },

  mounted: async function () {
    mapboxgl.accessToken =
      "pk.eyJ1IjoibWFueWsiLCJhIjoiY2t2dGlvd2drMnZvejJwa2xrOWtzeWs4aCJ9.CivNEj2VLiQNMt1bDIX1Og";
    new mapboxgl.Map({
      container: this.$refs.container, // container ID
      style:
        "mapbox://styles/manyk/ckw6cs81x8vi214mpmkqbs9wm", // style URL
      center: [8.38462829589844, 47.003202171774475], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  },
};
</script>

<style src="mapbox-gl/dist/mapbox-gl.css"></style>

<style scoped>
#map {
    position: fixed;
    top: 0;
    height: 100vh;
    width: 100vw;
}

/* .mapContainer {
  display: flex;
  justify-content: center;
  align-content: center;
} */
</style>

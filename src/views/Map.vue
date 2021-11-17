<template>
  <div>
    <h1>My Map</h1>
    <div ref="container" class="map"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import mapboxgl from "mapbox-gl";

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
      style: "mapbox://styles/mapbox/streets-v11", // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  },
};
</script>

<style src="mapbox-gl/dist/mapbox-gl.css"></style>

<style scoped>
.map {
  height: 50vh;
  width: 50vw;
}
</style>

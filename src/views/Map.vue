<template>
  <div>
    <h1>We are the best</h1>
    <div class="mapContainer">
      <div ref="container" class="map"></div>
    </div>
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
      "pk.eyJ1IjoiZGlnaXRhbGlkZWF0aW9uaWFhYmRlcmgiLCJhIjoiY2t2dGlsdGhqMHMzcjJ1bHlkY2V6eHY4bCJ9.v0uobe5Oyv26gnP5b6m2EA";
    new mapboxgl.Map({
      container: this.$refs.container, // container ID
      style:
        "mapbox://styles/digitalideationiaabderh/ckw3d2uis68ss14nxz4o1x4ah", // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  },
};
</script>

<style src="mapbox-gl/dist/mapbox-gl.css"></style>

<style scoped>
.map {
  height: 75vh;
  width: 75vw;
}
.mapContainer {
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>

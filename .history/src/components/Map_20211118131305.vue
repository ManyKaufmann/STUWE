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
#map {
    position: fixed;
    top: 0;
    height: 100vh;
    width: 100vw;
    z-index: -1;
}

.mapContainer {
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>

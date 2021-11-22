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
// import contentful from "@/modules/contentful.js";

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
    let map = new mapboxgl.Map({
      container: this.$refs.container, // container ID
      style:
        "mapbox://styles/manyk/ckw6cs81x8vi214mpmkqbs9wm", // style URL
      center: [8.384674512423006, 47.00304458301781], // starting position [lng, lat]
      zoom: 16, // starting zoom
      bearing: 120,
pitch: 0
    });
    console.log(map)
 // Displaying a GPX track
    // map.on("load", async function() {
    //   let coordinates = await getCoordinatesFromGpxFile(
    //     await contentful.getFirstGPXFileUrl()
    //   );
    //   map.addSource("route", {
    //     type: "geojson",
    //     data: {
    //       type: "Feature",
    //       geometry: {
    //         type: "LineString",
    //         coordinates: coordinates
    //       }
    //     }
    //   });
    //   map.addLayer({
    //     id: "route",
    //     type: "line",
    //     source: "route",
    //     layout: {
    //       "line-join": "round",
    //       "line-cap": "round"
    //     },
    //     paint: {
    //       "line-color": "#888",
    //       "line-width": 8
    //     }
    //   });
    // });
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

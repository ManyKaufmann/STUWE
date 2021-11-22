<template>
  <div>
    <div class="mapContainer">
      <div ref="container" id="map"></div>
      <Departement />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import mapboxgl from "mapbox-gl";
// import contentful from "@/modules/contentful.js";

export default {
  name: "Map",
  components: {
  },
  data: function () {
    return {
      chapters: {
        "soziale-arbeit": {
          bearing: -179,
          center: [47.04858941722488, 8.317526056355966],
          zoom: 15,
          speed: 0.2,
          pitch: 0,
          active: true,
        },
        "wirtschaft": {
          bearing: 0,
          center: [8.311214 + 0.035, 47.012611],
          zoom: 13,
          speed: 0.2,
          pitch: 0,
          active: false,
        },
      },
    };
  },
  methods: {
    setActiveChapter(chapterName) {
      if (chapterName === this.activeChapterName) return;
      this.map.flyTo(this.chapters[chapterName]);
      this.chapters[chapterName].active = true;
      this.chapters[this.activeChapterName].active = false;
      this.activeChapterName = chapterName;
    },

  },

  mounted: async function () {
    mapboxgl.accessToken =
      "pk.eyJ1IjoibWFueWsiLCJhIjoiY2t2dGlvd2drMnZvejJwa2xrOWtzeWs4aCJ9.CivNEj2VLiQNMt1bDIX1Og";
    let map = new mapboxgl.Map({
      container: this.$refs.container, // container ID
      style: "mapbox://styles/manyk/ckw6cs81x8vi214mpmkqbs9wm", // style URL
      center: [8.384674512423006, 47.00304458301781], // starting position [lng, lat]
      zoom: 17, // starting zoom
      bearing: 0,
      pitch: 0,
    });
    console.log(map);
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

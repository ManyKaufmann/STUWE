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
import contentful from "../modules/contentful";

export default {
  name: "Map",
  components: {},
  data: function () {
    return {
      map: "",
      // activeChapterName: "mein-haus",
      departements: [],
      chapters: {
        "mein-haus": {
          bearing: 0,
          center: [8.384674512423006 + 0.001, 47.00304458301781 + 0.0005],
          zoom: 13,
          speed: 1,
          pitch: 0,
        },
        "soziale-arbeit": {
          bearing: 0,
          center: [8.317526056355966, 47.04858941722488],
          zoom: 13,
          speed: 1,
          pitch: 0,
        },
        "wirtschafts-haus": {
          bearing: 0,
          center: [8.309652, 47.04907],
          zoom: 13,
          speed: 1,
          pitch: 0,
        },
        "musik-haus": {
          bearing: 0,
          center: [8.299038, 47.03812],
          zoom: 13,
          speed: 1,
          pitch: 0,
        },
        "technik-und-architektur": {
          bearing: 0,
          center: [8.305318, 47.01422],
          zoom: 13,
          speed: 1,
          pitch: 0,
        }, 
        "design-und-kunst": {
          bearing: 0,
          center: [8.277606, 47.07159],
          zoom: 20,
          speed: 1,
          pitch: 0,
        },
      },
    };
  },

  created() {
    window.addEventListener("scroll", this.onScrolling);
  },
  unmounted() {
    window.removeEventListener("scroll", this.onScrolling);
  },

  mounted: async function () {
    mapboxgl.accessToken =
      "pk.eyJ1IjoibWFueWsiLCJhIjoiY2t2dGlvd2drMnZvejJwa2xrOWtzeWs4aCJ9.CivNEj2VLiQNMt1bDIX1Og";
    this.map = new mapboxgl.Map({
      container: this.$refs.container, // container ID
      style: "mapbox://styles/manyk/ckw6cs81x8vi214mpmkqbs9wm", // style URL
      center: [8.384674512423006 + 0.001, 47.00304458301781 + 0.0005], // starting position [lng, lat]
      zoom: 17, // starting zoom
      bearing: 0,
      pitch: 0,
    });
    // console.log(map);
  },

  methods: {
    setActiveChapter(chapterName) {
      if (chapterName === this.activeChapterName) return;
      this.map.flyTo(this.chapters[chapterName]);

      document.getElementById(chapterName).classList.add("active");
      if (this.activeChapterName) {
        document
          .getElementById(this.activeChapterName)
          .classList.remove("active");
      }

      this.activeChapterName = chapterName;
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
    //checks if element is on screen
    isElementOnScreen(id) {
      const element = document.getElementById(id);
      if (!element) {
        return false;
      }
      const bounds = element.getBoundingClientRect();
      return bounds.top < window.innerHeight  && bounds.bottom > 0;
    },

    async getContentful() {
      let result = await contentful.getEntries({
        content_type: "hsluFacts",
      });
      console.log(result.items[0].fields.departementName);
      this.departements = result.items[0].fields.departementName;
    },
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

#features {
  width: 50%;
  margin-left: 50%;
  font-family: sans-serif;
  overflow-y: scroll;
  background-color: #fafafa;
}
</style>

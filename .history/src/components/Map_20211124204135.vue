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
  components: {},
  data: function () {
    return {
      map: "",
      departements: [],
      chapters: {
        "mein-haus": {
          bearing: 0,
          center: [8.384674512423006 + 0.005, 47.00304458301781 - 0.001],
          zoom: 16,
          speed: 1,
          pitch: 0,
        },
        "soziale-arbeit": {
          bearing: 0,
          center: [8.314879094092817 + 0.005, 47.04821555100333 - 0.001],
          zoom: 16,
          speed: 0.2,
          pitch: 0,
        },
        "wirtschafts-haus": {
          bearing: 0,
          center: [8.309652 + 0.005, 47.04907 - 0.001],
          zoom: 16,
          speed: 0.2,
          pitch: 0,
        },
        "musik-haus": {
          bearing: 0,
          center: [8.299038 + 0.005, 47.03812 - 0.001],
          zoom: 16,
          speed: 0.5,
          pitch: 0,
        },
        "technik-und-architektur": {
          bearing: 0,
          center: [8.305318 + 0.005, 47.01422 - 0.001],
          zoom: 16,
          speed: 0.8,
          pitch: 0,
        },
        "design-und-kunst": {
          bearing: 0,
          center: [8.277606 + 0.005, 47.07159 - 0.001],
          zoom: 16,
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
      center: [8.384674512423006 + 0.005, 47.00304458301781 - 0.001], // starting position [lng, lat]
      zoom: 16, // starting zoom
      bearing: 0,
      pitch: 0,
    });

    let geojson = {
      type: "FeatureCollection",

      features: [
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [8.384674512423006, 47.00304458301781],
          },
          properties: {
            title: "mein-haus",
          },
        },
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [8.314879094092817, 47.04821555100333],
          },
          properties: {
            title: "soziale-arbeit",
          },
        },
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [8.309652, 47.04907],
          },
          properties: {
            title: "wirtschaft",
          },
        },
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [8.299038, 47.03812],
          },
          properties: {
            title: "musik",
          },
        },
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [8.305318, 47.01422],
          },
          properties: {
            title: "technik-und-architektur",
          },
        },
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [8.277606, 47.07159],
          },
          properties: {
            title: "design-und-kunst",
          },
        },
      ],
    };

    //add markers to map
    geojson.features.forEach((marker) => {
      let el = "";
      switch (marker.properties.title) {
        case "mein-haus":
          el = document.createElement("div");
          el.className = "marker-mein-haus";
          break;
        case "soziale-arbeit":
          el = document.createElement("div");
          el.className = "marker-soziale-arbeit";
          break;
        case "wirtschaft":
          el = document.createElement("div");
          el.className = "marker-wirtschaft";
          break;
        case "musik":
          el = document.createElement("div");
          el.className = "marker-musik";
          break;
        case "technik-und-architektur":
          el = document.createElement("div");
          el.className = "marker-technik";
          break;

        case "design-und-kunst":
          el = document.createElement("div");
          el.className = "marker-design";
          break;
      }
      new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(this.map);
    });
  },

  methods: {
    setActiveChapter(chapterName) {
      if (chapterName === this.activeChapterName) return;
      this.map.flyTo(this.chapters[chapterName]);
      this.addCharacter(chapterName);

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
      return bounds.top < window.innerHeight && bounds.bottom > 0;
    },

    addCharacter(id) {
      let el ="";
      if (id == "soziale-arbeit") {
        el = document.createElement("div");
        el.className = "avatar-soziale-arbeit";
      }
    },
  },
};
</script>

<style src="mapbox-gl/dist/mapbox-gl.css"></style>

<style>
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

.marker-mein-haus {
  background-image: url("../assets/Zuhause.svg");
  width: 150px;
  height: 75px;
}

.avater-soziale-arbeit {
  background-image: url("../assets/Hauptcharacter_KunstDesign.svg");
  width: 800px;
  height: 600px;
}

.marker-soziale-arbeit {
  background-image: url("../assets/SozialeArbeit_Herz.svg");
  width: 150px;
  height: 75px;
}

.marker-wirtschaft {
  background-image: url("../assets/Wirtschaft_Dollar.svg");
  width: 150px;
  height: 75px;
}

.marker-musik {
  background-image: url("../assets/Musik_Gitarre.svg");
  width: 150px;
  height: 75px;
}

.marker-technik {
  background-image: url("../assets/TechnikArchitektur_Geodreieck.svg");
  width: 150px;
  height: 75px;
}

.marker-design {
  background-image: url("../assets/KunstDesign_Farbpalette.svg");
  width: 150px;
  height: 75px;
}
</style>

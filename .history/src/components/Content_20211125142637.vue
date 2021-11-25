<template>
  <div id="main-container">
    <Start />
    <div id="content-container">
      <ul id="array-rendering">
        <ul v-for="d in departement" :key="d.hsluFacts">
          <Departement
            :departementTitel="d.fields.departementTitel"
            :departementId="d.fields.departementId"
            :infoDepartemente="d.fields.infoDepartemente"
            :studiengnge="d.fields.studiengnge"
            :studienauswahl="d.fields.studienauswahl?.html"
            :gebude="d.fields.gebude"
          />
        </ul>
      </ul>
    </div>
    <div id="about-container">
      <ul id="array-rendering">
        <ul v-for="a in about" :key="a.about">
          <About
            :spitzname="a.fields.spitzname"
            :aboutFoto="a.fields.aboutFoto"
            :aufgabe="a.fields.aufgabe"
          />
        </ul>
      </ul>
    </div>
    <div id="avatar"></div>
  </div>
</template>

<script>
import Start from "./Start.vue";
import Departement from "./Departement.vue";
import contentful from "../modules/contentful.js";

export default {
  name: "Content",
  components: {
    Start,
    Departement,
  },
  data: function () {
    return {
      departement: [],
    };
  },

  created: async function () {
    this.departement = await contentful.getHsluFacts();
    
    //this.departement = await contentful.getStudiengaenge();
    this.about = await contentful.getAbout();
    window.addEventListener("scroll", this.addCharacter);
  },
  methods: {
    addCharacter() {
      let sections = [];
      // let avatar = document.getElementsByClassName("avatar")[0];
      let avatar = document.getElementById("avatar");
      sections = document.querySelectorAll("section");
      sections.forEach((element) => {
        if (element.classList.contains("active")) {
          switch (element.id) {
            case "soziale-arbeit":
              avatar.style.backgroundImage = `url(${require("../assets/Avatar/Hauptcharacter_SozialeArbeit.svg")})`;
              break;
            case "wirtschafts-haus":
              avatar.style.backgroundImage = `url(${require("../assets/Avatar/Hauptcharacter_Wirtschaft.svg")})`;
              break;
            case "musik-haus":
              avatar.style.backgroundImage = `url(${require("../assets/Avatar/Hauptcharacter_Musik.svg")})`;
              break;
            case "technik-und-architektur":
              avatar.style.backgroundImage = `url(${require("../assets/Avatar/Hauptcharacter_TechnikArchitektur.svg")})`;
              break;
            case "design-und-kunst":
              avatar.style.backgroundImage = `url(${require("../assets/Avatar/Hauptcharacter_KunstDesign.svg")})`;
              break;
            default:
              avatar.style.backgroundImage = `none`;

              console.log("id doesn't exists");
          }
        }
      });
    },
  },

  unmounted() {
    window.removeEventListener("scroll", this.addCharacter);
  },


};
</script>

<style>
h1 {
  color: black;
}

.main-container {
  position: fixed;
  top: 0;
}

#content-container {
  padding-top: 10px;
  padding-bottom: 10px;
  width: 50%;
  margin-left: 50%;
  right: 0;
  top: 0;
  background-color: rgba(255, 226, 102, 0.7);
  backdrop-filter: blur(7px);
}

#avatar {
  z-index: 3;
  display: block;
  /* background-image: url("../assets/CharacterText3.svg"); */
  background-image: none;
  width: 800px;
  height: 600px;
  position: sticky;
  bottom: 0;
  animation: 1s fadeIn;
  animation-fill-mode: forwards;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    visibility: visible;
    opacity: 1;
  }
}
</style>

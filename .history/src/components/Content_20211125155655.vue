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
    <img
      src="../assets/Avatar/SozialeArbeit.svg"
      class="avatar"
      id="ava-soziale-arbeit"
    />
    <img
      src="../assets/Avatar/Wirtschaft.svg"
      class="avatar"
      id="ava-wirtschaft"
    /> 
    <img
      src="../assets/Avatar/Musik.svg"
      class="avatar"
      id="ava-musik"
    /> 
    <img
      src="../assets/Avatar/TechnikArchitektur.svg"
      class="avatar"
      id="ava-technik-und-architektur"
    /> 
     <img
      src="../assets/Avatar/KunstDesign.svg"
      class="avatar"
      id="ava-design-und-kunst"
      /> 
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
      sections = document.querySelectorAll("section");
      sections.forEach((element) => {
        if (element.classList.contains("active")) {
          switch (element.id) {
            case "soziale-arbeit":
              document.getElementById("ava-soziale-arbeit").style.opacity = "1";
              document.getElementById("ava-wirtschaft").style.opacity = "0";
              break;
            case "wirtschafts-haus":
              document.getElementById("ava-soziale-arbeit").style.opacity = "0";
              document.getElementById("ava-wirtschaft").style.opacity = "1";
              break;
            case "musik-haus":
              document.getElementById("ava-soziale-arbeit").style.opacity = "0";
              document.getElementById("ava-musik").style.opacity = "1";
              break;
            case "technik-und-architektur":
              document.getElementById("ava-soziale-arbeit").style.opacity = "0";
              document.getElementById("ava-technik-und-architektur").style.opacity = "1";
              break;
            case "design-und-kunst":
              document.getElementById("ava-technik-und-architektur").style.opacity = "0";
              document.getElementById("ava-design-und-kunst").style.opacity = "1";
              break;
            default:
              document.getElementById("ava-soziale-arbeit").style.opacity = "0";
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
  font-family: "Spartan", sans-serif;
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

.avatar {
  z-index: 3;
  display: block;
  background-image: none;
  width: 1000px;
  height: 450px;
  position: fixed;
  bottom: 0;
  opacity: 0;
    transition: visibility 5s, opacity 1s linear;

}
</style>

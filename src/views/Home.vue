<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <ul id="array-rendering">
      <li v-for="c in commutes" :key="c.person">
        <Commute
          :person="c.fields.name"
          :start="c.fields.start"
          :end="c.fields.end"
        />
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import Commute from "@/components/Commute.vue";
import { createClient } from "contentful";

export default {
  name: "Home",
  components: {
    Commute,
  },
  data: function () {
    return {
      commutes: [],
    };
  },

  created: function () {
    let client = createClient({
      space: "ysi1w9hs8nqb",
      accessToken: "VMBxczFLhJpJq09naVF2q44ubmFJ91Gm3098TrfYfuk",
    });

    client
      .getEntries({
        content_type: "person",
      })

      .then((entries) => {
        console.log(entries);
        this.commutes = entries.items;
      });
  },
};
</script>

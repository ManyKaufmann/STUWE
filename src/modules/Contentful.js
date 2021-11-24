import { createClient } from "contentful";

class Contentful {
  constructor() {
    this.client = createClient({
      space: "ysi1w9hs8nqb",
      accessToken: "VMBxczFLhJpJq09naVF2q44ubmFJ91Gm3098TrfYfuk",
    });
  }

  async getHsluFacts() {
    let result = await this.client.getEntries({
      content_type: "hsluFacts",
    });
    const hsluDepartements = result.items.sort(
      (teamA, teamB) => teamA.fields.reihenfolge - teamB.fields.reihenfolge
    );
    console.log(hsluDepartements);
    return hsluDepartements;
  }

  async getStart() {
    let result = await this.client.getEntries({
      content_type: "start",
    });
    console.log(result.items);
    return result.items;
  }
}

export default new Contentful();

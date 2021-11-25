import { createClient } from "contentful";
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

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
      (a, b) => a.fields.reihenfolge - b.fields.reihenfolge
    );

    this.hsluDepartements.forEach(async department => {
      const rawRichTextField = department.fields.studienauswahl;
      this.department.fields.studienauswahl.html = await documentToHtmlString(rawRichTextField);

    })
    return hsluDepartements;
  }

  async getStart() {
    let result = await this.client.getEntries({
      content_type: "start",
    });
    console.log(result.items);
    return result.items;
  }
  async getAbout() {
    let result = await this.client.getEntries({
      content_type: "about",
    });
    console.log(result.items);
    return result.items;
  }
}


export default new Contentful();

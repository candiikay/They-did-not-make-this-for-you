/**
 * Key sources that back each entry. Links to Recommended Reading for full citations.
 */
export type EntrySource = {
  title: string;
  author: string;
  year: string;
  note?: string;
};

export const ENTRY_SOURCES: Record<string, EntrySource[]> = {
  "ch1-entry01-body-as-dataset": [
    { title: "Gender Shades", author: "Joy Buolamwini", year: "2018", note: "facial recognition audit" },
    { title: "Atlas of AI", author: "Kate Crawford", year: "2021", note: "classification, default user" },
    { title: "Seeing Like a State", author: "James C. Scott", year: "1998", note: "legibility, measurement" },
  ],
  "ch1-entry02-mind-as-dataset": [
    { title: "The Design of Everyday Things", author: "Don Norman", year: "1988/2013", note: "affordances, feedback" },
    { title: "The Cybernetic Hypothesis", author: "Tiqqun", year: "2001", note: "feedback loops, control" },
  ],
  "ch1-entry03-behavior-as-dataset": [
    { title: "Seeing Like a State", author: "James C. Scott", year: "1998", note: "scientific management" },
    { title: "The Design of Everyday Things", author: "Don Norman", year: "1988/2013", note: "design shapes behavior" },
    { title: "Weapons of Math Destruction", author: "Cathy O'Neil", year: "2016", note: "algorithmic management" },
  ],
  "ch1-entry04-identity-as-dataset": [
    { title: "Machine Bias", author: "Julia Angwin et al. (ProPublica)", year: "2016", note: "COMPAS recidivism" },
    { title: "Weapons of Math Destruction", author: "Cathy O'Neil", year: "2016", note: "scoring systems" },
    { title: "Algorithms of Oppression", author: "Safiya Umoja Noble", year: "2018", note: "search, bias" },
  ],
  "ch2-entry04-location-tracking": [
    { title: "The Cybernetic Hypothesis", author: "Tiqqun", year: "2001", note: "data flows, control" },
    { title: "I Gave a Bounty Hunter $300", author: "Joseph Cox (Motherboard)", year: "2020", note: "location brokers" },
    { title: "One Nation, Tracked", author: "New York Times", year: "2019", note: "location data scale" },
  ],
  "ch1-reader-as-artifact": [
    { title: "Atlas of AI", author: "Kate Crawford", year: "2021", note: "constructed datasets" },
    { title: "The Whole Earth Catalog", author: "Stewart Brand", year: "1968–1972", note: "catalog format" },
  ],
};

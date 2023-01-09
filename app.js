console.log("Any string");

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

for (pro of pronoun) {
  for (ad of adj) {
    for (no of noun) {
      console.log(pro + ad + no+ ".com");
    }
  }
}

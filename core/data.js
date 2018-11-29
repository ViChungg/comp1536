let rock = "<ul><li>Geodude</li><li>Onix</li></ul>";
let fire = "<ul><li>Charmander</li><li>Ponyta</li></ul>";
let ground = "<ul><li>Diglett</li><li>Cubone</li></ul>";
let bug = "<ul><li>Beedrill</li><li>Butterfree</li></ul>";
let flying = "<ul><li>Articuno</li><li>Zapdos</li></ul>";

let grass = ["Bulbasaur", "Oddish"];
let ghost = ["Gastly", "Gengar"];
let electric = ["Pikachu", "Voltorb"];
let psychic = ["Alakazam", "Mewtwo"];
let water = ["Squirtle", "Starmie"];

module.exports = {
  getRock: function () {
      console.log("called: getRock");
      return rock;
  },

  getFire: function () {
      console.log("called: getFire");
      return fire;
  },

  getGround: function () {
      console.log("called: getGround");
      return ground;
  },

  getBug: function () {
      console.log("called: getPoison");
      return bug;
  },

  getFlying: function () {
      console.log("called: getFlying");
      return flying;
  },

  getGrass: function () {                       // Note: this could be from a DB, for now it's just hard-coded
      console.log("called: getGrass (JSON)");
      return grass;
  },
  getGhost: function () {                       // Note: this could be from a DB, for now it's just hard-coded
      console.log("called: getGhost (JSON)");
      return ghost;
  },
  getElectric: function () {                       // Note: this could be from a DB, for now it's just hard-coded
      console.log("called: getElectric (JSON)");
      return electric;
  },
  getPsychic: function () {                       // Note: this could be from a DB, for now it's just hard-coded
      console.log("called: getPsychic (JSON)");
      return psychic;
  },
  getWater: function () {                       // Note: this could be from a DB, for now it's just hard-coded
      console.log("called: getWater (JSON)");
      return water;
  }
};

var someOtherFunction = function () {
    console.log("Can't touch this!");
};
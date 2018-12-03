let rock = "<ul><li><button id='Geodude' class='html'>Geodude</button></li>" 
+ "<li><button id='Onix' class='html'>Onix</button></li></ul>";
let fire = "<ul><li><button id='Charmander' class='html'>Charmander</button></li>"
+ "<li><button id='Ponyta' class='html'>Ponyta</button></li></ul>";
let ground = "<ul><li><button id='Diglett' class='html'>Diglett</button></li>" 
+ "<li><button id='Cubone' class='html'>Cubone</button></li></ul>";
let bug = "<ul><li><button id='Beedrill' class='html'>Beedrill</button></li>" 
+ "<li><button id='Butterfree' class='html'>Butterfree</button></li></ul>";
let flying = "<ul><li><button id='Articuno' class='html'>Articuno</button></li>" 
+ "<li><button id='Zapdos' class='html'>Zapdos</button></li></ul>";
let data = {
  "Bulbasaur": {
    "type": "grass",
    "img": "img/bulbasaur.png",
    "number": "1"
  },
  "Oddish": {
    "type": "grass",
    "img": "img/oddish.png",
    "number": "43"
  },
  "Gastly": {
    "type": "ghost",
    "img": "img/gastly.png",
    "number": "92"
  },
  "Gengar": {
    "type": "ghost",
    "img": "img/gengar.png",
    "number": "94"
  },
  "Pikachu": {
    "type": "electric",
    "img": "img/pikachu.png",
    "number": "25"
  },
  "Voltorb": {
    "type": "electric",
    "img": "img/voltorb.png",
    "number": "100"
  },
  "Alakazam": {
    "type": "psychic",
    "img": "img/alakazam.png",
    "number": "65"
  },
  "Mewtwo": {
    "type": "psychic",
    "img": "img/mewtwo.png",
    "number": "151"
  },
  "Squirtle": {
    "type": "water",
    "img": "img/squirtle.png",
    "number": "7"
  },
  "Starmie": {
    "type": "water",
    "img": "img/starmie.png",
    "number": "121"
  }
};

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

  getJSON: function () {
      console.log("called: getJSON");
      // Note: this could be from a DB, for now it's just hard-coded
      return data;
  }
};

var someOtherFunction = function () {
    console.log("Can't touch this!");
}
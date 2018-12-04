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
    "img": "img/bulbasaur.gif",
    "number": "1",
    "des": "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger."
  },
  "Oddish": {
    "type": "grass",
    "img": "img/oddish.gif",
    "number": "43",
    "des": "During the daytime, Oddish buries itself in soil to absorb nutrients from the ground using its entire body. The more fertile the soil, the glossier its leaves become."
  },
  "Gastly": {
    "type": "ghost",
    "img": "img/gastly.gif",
    "number": "92",
    "des": "Gastly is largely composed of gaseous matter. When exposed to a strong wind, the gaseous body quickly dwindles away. Groups of this Pokémon cluster under the eaves of houses to escape the ravages of wind."
  },
  "Gengar": {
    "type": "ghost",
    "img": "img/gengar.gif",
    "number": "94",
    "des": "Sometimes, on a dark night, your shadow thrown by a streetlight will suddenly and startlingly overtake you. It is actually a Gengar running past you, pretending to be your shadow."
  },
  "Pikachu": {
    "type": "electric",
    "img": "img/pikachu.gif",
    "number": "25",
    "des": "Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon mistook the intensity of its charge."
  },
  "Voltorb": {
    "type": "electric",
    "img": "img/voltorb.gif",
    "number": "100",
    "des": "Voltorb was first sighted at a company that manufactures Poké Balls. The link between that sighting and the fact that this Pokémon looks very similar to a Poké Ball remains a mystery."
  },
  "Alakazam": {
    "type": "psychic",
    "img": "img/alakazam.gif",
    "number": "65",
    "des": "Alakazam's brain continually grows, making its head far too heavy to support with its neck. This Pokémon holds its head up using its psychokinetic power instead."
  },
  "Mewtwo": {
    "type": "psychic",
    "img": "img/mewtwo.gif",
    "number": "150",
    "des": "Mewtwo is a Pokémon that was created by genetic manipulation. However, even though the scientific power of humans created this Pokémon's body, they failed to endow Mewtwo with a compassionate heart."
  },
  "Squirtle": {
    "type": "water",
    "img": "img/squirtle.gif",
    "number": "7",
    "des": "Squirtle's shell is not merely used for protection. The shell's rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds."
  },
  "Starmie": {
    "type": "water",
    "img": "img/starmie.gif",
    "number": "121",
    "des": "Starmie's center section—the core—glows brightly in seven colors. Because of its luminous nature, this Pokémon has been given the nickname “the gem of the sea."
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
};
let rock = "<ul><li>Geodude</li><li>Onix</li></ul>";
let fire = "<ul><li>Charmander</li><li>Ponyta</li></ul>";
let ground = "<ul><li>Diglet</li><li>Cubone</li></ul>";
let bug = "<ul><li>Beedrill</li><li>Butterfree</li></ul>";
let flying = "<ul><li>Articuno</li><li>Zapdos</li></ul>";

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
      return ghost;
  }
};

var someOtherFunction = function () {
    console.log("Can't touch this!");
}
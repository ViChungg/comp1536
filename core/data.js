let grass = "<ul><li>Bulbasaur</li><li>Oddish</li></ul>";

let ghost = ["Gastly", "Gengar"];

module.exports = {
  getGrass: function () {
      console.log("called: getHTML");
      // Note: this could be from a DB, for now it's just hard-coded
      return grass;
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
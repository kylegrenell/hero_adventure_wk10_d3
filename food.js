var Food = function(name, value){
  this.name = name;
  this.value = value;
  this.poisoned = false;
  this.decaffed = false;
};

module.exports = Food;
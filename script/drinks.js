var DRINKS_LIST = DRINKS;

var ingredientsList = {};
DRINKS_LIST.forEach(function(drink) {
  var ingredientName;
  drink.ingredients.forEach(function(ingredient) {
    ingredientName = ingredient.ingredient;
    if (ingredientsList[ingredientName]) {
      ingredientsList[ingredientName] += 1;
    } else {
      ingredientsList[ingredientName] = 1;
    }
  });
});

function generateDrink() {
  var drinks = DRINKS_LIST;
  var includeInList;
  var ingredients;
  var ingredientRules = [];
  var requireOrExclude;
  $(".ingredients").each(function(index, ingredient) {
    var exclude = $(".requireOrExclude")[index].value === "exclude";
    drinks = drinks.filter(function(drink) {
      ingredients = drink.ingredients.map(function(ingredientSpecs) {
        return ingredientSpecs.ingredient;
      });
      if ((ingredients.indexOf(ingredient.value) === -1 && exclude) || (ingredients.indexOf(ingredient.value) > -1 && !exclude)) {
        return true;
      } else {
        return false;
      }
    });
  });
  var drink = drinks[Math.floor(Math.random()*drinks.length)];
  $("#response").html("");
  $("#response").append("<div id='drinkName'>" + drink.name + "<div>");
  if (drink.ingredients.length > 0) {
    drink.ingredients.forEach(function(ingredient) {
      if (ingredient.ingredient) {
        $("#response").append("<div>" + ingredient.ingredient + "<div>");
      } else if (ingredient.special) {
        $("#response").append("<div>" + ingredient.special + "<div>");
      }
    });
  }
}

function selectLowCarb() {
  var drinks = [];
  DRINKS_LIST.forEach(function(drink) {
    if (drink.low_carb) {
      drinks.push(drink);
    }
  });

  return drinks;
}

$(document).ready(function() {
  $('#generateDrink').on('click touchstart', generateDrink);
});

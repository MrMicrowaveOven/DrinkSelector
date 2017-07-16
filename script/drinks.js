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
// console.log(Object.keys(ingredientsList).length);
// Object.keys(ingredientsList).sort().forEach(function(ingredient) {
//   console.log(ingredient);
// });

function generateDrink() {
  var drinks;
  drinks = DRINKS_LIST;
  var drink = drinks[Math.floor(Math.random()*drinks.length)];
  $("#response").html("");
  $("#response").append("<div id='drinkName'>" + drink.name + "<div>");
  if (drink.ingredients.length > 0) {
    // $("#response").append("<div>" + "Ingredients:" + "<div>");
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

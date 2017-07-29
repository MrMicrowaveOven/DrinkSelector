var DRINKLIST = DRINKS;
var categories = {};
var glasses = {};
var units = {};
var amounts = {};
var ingredients = {};
var garnishes = {};
var preparations = {};

function getDrinkData() {
  DRINKLIST.forEach(function(drink) {

    if (categories[drink.category]) {
      categories[drink.category] += 1;
    } else {
      categories[drink.category] = 1;
    }

    if (glasses[drink.glass]) {
      glasses[drink.glass] += 1;
    } else {
      glasses[drink.glass] = 1;
    }

    if (garnishes[drink.garnish]) {
      garnishes[drink.garnish] += 1;
    } else {
      garnishes[drink.garnish] = 1;
    }

    if (preparations[drink.preparation]) {
      preparations[drink.preparation] += 1;
    } else {
      preparations[drink.preparation] = 1;
    }

    drink.ingredients.forEach(function(ingredientSpecs) {
      if (units[ingredientSpecs.unit]) {
        units[ingredientSpecs.unit] += 1;
      } else {
        units[ingredientSpecs.unit] = 1;
      }

      if (amounts[ingredientSpecs.amount]) {
        amounts[ingredientSpecs.amount] += 1;
      } else {
        amounts[ingredientSpecs.amount] = 1;
      }

      if (ingredients[ingredientSpecs.ingredient]) {
        ingredients[ingredientSpecs.ingredient] += 1;
      } else {
        ingredients[ingredientSpecs.ingredient] = 1;
      }
    });
  });
}
getDrinkData();
// console.log(glasses);
// console.log(categories);
// console.log(garnishes);
// console.log(units);
// console.log(amounts);
// console.log(ingredients);

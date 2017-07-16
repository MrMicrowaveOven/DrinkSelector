var DRINKS_LIST = DRINKS;

function generateDrink() {
  var drinks;
  drinks = $("#low-carb")[0].checked ? selectLowCarb() : DRINKS_LIST;
  var drink = drinks[Math.floor(Math.random()*drinks.length)];
  $("#response").html(drink.name);
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

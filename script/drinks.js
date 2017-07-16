var DRINKS;

function generateDrink() {
  var drinks;
  drinks = $("#low-carb")[0].checked ? selectLowCarb() : DRINKS;
  var drink = drinks[Math.floor(Math.random()*drinks.length)];
  $("#response").html(drink.name);
}

function selectLowCarb() {
  var drinks = [];
  DRINKS.forEach(function(drink) {
    if (drink.low_carb) {
      drinks.push(drink);
    }
  });

  return drinks;
}


function generateDrink() {
  var drinks;
  drinks = $("#low-carb")[0].checked ? selectLowCarb() : DRINKS
  var drink = drinks[Math.floor(Math.random()*drinks.length)];
  $("#response").html(drink.name)
}

function selectLowCarb() {
  var drinks = [];
  DRINKS.forEach(function(drink) {
    if (drink.low_carb) {
      drinks.push(drink);
    }
  })

  return drinks;
}

const DRINKS = [
  {
    name: "Margarita",
    low_carb: false,
  },
  {
    name: "Manhattan",
    low_carb: true,
  },
  {
    name: "Moscow Mule",
    low_carb: false,
  },
  {
    name: "Scotch Neat",
    low_carb: true,
  },
  {
    name: "Gin and Tonic",
    low_carb: false,
  },
  {
    name: "Gin and Soda",
    low_carb: true,
  },
  {
    name: "Beer",
    low_carb: false,
  },
  {
    name: "Wine",
    low_carb: false,
  },
  {
    name: "Champagne",
    low_carb: false,
  },
];

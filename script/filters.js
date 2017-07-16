function addOption() {
  var ingredientsList = INGREDIENTS
  $("#addOption").html("Add another option");
  $(".options").append(
    "<select class='dropdown'>"
      + "<option value='exclude'>Exclude</option>"
      + "<option value='require'>Require</option>"
    + "</select> : "
    + "<select class='dropdown ingredients'>"
    + "</select><br>"
  );
  ingredientsList.forEach(function(ingredient) {
    $(".ingredients").append(
      "<option value=" + ingredient + ">" + ingredient + "</option>"
    );
  });
}

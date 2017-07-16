function addOption() {
  var ingredientsList = INGREDIENTS;
  $("#addOption").html("Add another option");
  $(".options").append(
    "<div>"
    + "<select class='dropdown requireOrExclude'>"
      + "<option value='exclude'>Exclude</option>"
      + "<option value='require'>Require</option>"
    + "</select> : "
    + "<select class='dropdown ingredients'>"
    + "</select><br>"
    + "<div>"
  );
  ingredientsList.forEach(function(ingredient) {
    $(".ingredients").append(
      "<option value='" + ingredient + "'>" + ingredient + "</option>"
    );
  });
}

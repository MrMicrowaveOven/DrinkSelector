function addIngredientField() {
  var ingredientToAppend = $(".ingredientDropdown").length;
  var ingredientId = ingredientToAppend + 1;
  var idName = "ingredientDropdown" + ingredientId;
  var ingredients = INGREDIENTS;
  var ingredientsSelectString = "";
  ingredients.forEach(function(ingredient) {
    ingredientsSelectString += '<option value="' + ingredient + '">' + ingredient + '</option>';
  });
  $("#ingredientDropdown" + ingredientToAppend).after(
    '<div class="vex-custom-field-wrapper ingredientDropdown" id="' + idName + '"">' +
      '<div class="vex-custom-input-wrapper">' +
        '<img class="xButton xButtonRemoveField"  id="xButtonRemoveField' + ingredientId + '" src="xButton.png" onclick="removeIngredientField(' + ingredientId + ')">' +
        '<select name="ingredient' + ingredientId + '">' +
          '<option>Add ingredient</option>' +
          ingredientsSelectString +
        '</select>' +
      '</div>' +
    '</div>'
  );
}

function removeIngredientField(ingredientId) {
  $("#ingredientDropdown" + ingredientId).remove();

  $(".ingredientDropdown").each(function(index, element) {
    var newDropdownId = index + 1;
    var jqElement = $(element);
    jqElement.attr("id", "ingredientDropdown" + newDropdownId);
  });

  $(".xButtonRemoveField").each(function(index, element) {
    var newButtonId = index + 2;
    var jqElement = $(element);
    jqElement.attr("onclick", "removeIngredientField(" + newButtonId + ")");
  });
}

function openDrinkForm() {
  var ingredients = INGREDIENTS;
  var ingredientsSelectString = "";
  ingredients.forEach(function(ingredient) {
    ingredientsSelectString += '<option value="' + ingredient + '">' + ingredient + '</option>';
  });
  vex.dialog.open({
      message: 'Add a Drink!',
      input: [
          '<style>',
              '.vex-custom-field-wrapper {',
                  'margin: 1em 0;',
              '}',
              '.vex-custom-field-wrapper > label {',
                  'display: inline-block;',
                  'margin-bottom: .2em;',
              '}',
          '</style>',
          '<div class="vex-custom-field-wrapper">',
              '<label>Name of Drink',
                '<div class="vex-custom-input-wrapper">',
                    '<input name="drinkName" type="text" required/>',
                '</div>',
              '</label>',
          '</div>',
          '<div class="vex-custom-field-wrapper ingredientDropdown" id="ingredientDropdown1">' +
              '<label>Ingredients',
                '<div class="vex-custom-input-wrapper">',
                  '<select name="ingredient1" required>',
                    '<option>Add ingredient</option>',
                    ingredientsSelectString,
                  '</select>',
                '</div>',
              '</label>',
          '</div>',
          '<a id="addAnotherIngredientLink" style="color: blue; text-decoration: underline;" onclick="addIngredientField()">Add another ingredient</a>',
          // '<div class="vex-custom-field-wrapper">',
          //     '<label>Glass',
          //       '<div class="vex-custom-input-wrapper">',
          //         '<select>',
          //           '<option value="champagne-tulip">Champagne Tulip</option>',
          //           '<option value="collins">Collins</option>',
          //           '<option value="highball">Highball</option>',
          //           '<option value="hot-drink">Hot Drink</option>',
          //           '<option value="hurricane">Hurricane</option>',
          //           '<option value="margarita">Margarita</option>',
          //           '<option value="martini">Martini</option>',
          //           '<option value="old-fashioned">Old Fashioned</option>',
          //           '<option value="shot">Shot</option>',
          //           '<option value="white-wine">White Wine</option>',
          //         '</select>',
          //       '</div>',
          //     '</label>',
          // '</div>',
          // '<div class="vex-custom-field-wrapper">',
          //     '<label>Category',
          //       '<div class="vex-custom-input-wrapper">',
          //         '<select>',
          //           '<option value="After Dinner Cocktail">After Dinner Cocktail</option>',
          //           '<option value="All Day Cocktail">All Day Cocktail</option>',
          //           '<option value="Before Dinner Cocktail">Before Dinner Cocktail</option>',
          //           '<option value="Hot Drink">Hot Drink</option>',
          //           '<option value="Longdrink">Longdrink</option>',
          //           '<option value="Sparkling Cocktail">Sparkling Cocktail</option>',
          //         '</select>',
          //       '</div>',
          //     '</label>',
          // '</div>',
      ].join(''),
      callback: function (data) {
        if (!data) {
          return console.log('Cancelled');
        }
        else {
          console.log(data);
        }
      }
  });
}

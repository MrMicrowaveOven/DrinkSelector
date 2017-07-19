function addIngredientField() {
  // console.log("hello");
  // console.log($(".ingredientDropdown").length);
  var ingredientToAppend = $(".ingredientDropdown").length;
  var ingredientId = ingredientToAppend + 1;
  var idName = "ingredientDropdown" + ingredientId;
  var ingredients = INGREDIENTS;
  var ingredientsSelectString = "";
  ingredients.forEach(function(ingredient) {
    ingredientsSelectString += '<option value="' + ingredient + '">' + ingredient + '</option>';
  });
  $("#ingredientDropdown" + ingredientToAppend).after(
    '<div class="vex-custom-field-wrapper class="ingredientDropdown" id="' + idName + '"">' +
        '<div class="vex-custom-input-wrapper">' +
          '<img class="xButton" src="xButton.png" onclick="removeIngredientField(' + ingredientId + ')">' +
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
                    '<input name="drinkName" type="text"/>',
                '</div>',
              '</label>',
          '</div>',
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
          '<div class="vex-custom-field-wrapper">' +
              '<label>Ingredients',
                '<div class="vex-custom-input-wrapper">',
                  '<select name="ingredient1" class="ingredientDropdown" id="ingredientDropdown1">',
                    '<option>Add ingredient</option>',
                    ingredientsSelectString,
                  '</select>',
                '</div>',
              '</label>',
              '<br><a id="addAnotherIngredientLink" style="color: blue; text-decoration: underline;" onclick="addIngredientField()">Add another ingredient</a>',
          '</div>',
          // '<button>Add Another Ingredient</button>'
      ].join(''),
      callback: function (data) {
          if (!data) {
              return console.log('Cancelled');
          }
          else {
            console.log(data);
          }
          // $('.demo-result-custom-vex-dialog').show().html([
          //     '<h4>Result</h4>',
          //     '<p>',
          //         'Date: <b>' + data.date + '</b><br/>',
          //         'Color: <input type="color" value="' + data.color + '" readonly />',
          //     '</p>'
          // ].join(''))
      }
  });
}

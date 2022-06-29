const favRecipe = {
    title: "Tea",
    servings: 2,
    ingredients: ["Sugar", "Tea", "Water", "Milk"],
    recipe: function () {
      console.log(
        `${this.title}\nServes:${this.servings}\nIngredients:\n${this.ingredients}`
      );
    },
  };
  
  favRecipe.recipe();
  alert("The Data Can Be Seen in the Console");
  
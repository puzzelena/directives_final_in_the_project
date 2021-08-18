import { Recipe } from "./recipe.model";

export class RecipeService {
    // recipeService is working on mnaging parts of the recipe
    // therefore we go to recipe-list.component.ts and take the current recipes defined there
   private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
        new Recipe('Another Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
      ];

      // we added private to not allow to get it from the outside

      // method that return this array

      getRecipes() {
          return this.recipes.slice() 
          // slice method is to return a new array which is an exact copy on this service file
          //we cant access the recipes from the outside
          // we can get a copy

          // after all we will provide our recipe service component in the recipes.component.ts
      }
}
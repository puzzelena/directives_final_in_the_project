import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()

export class RecipeService {
    // recipeService is working on mnaging parts of the recipe
    // therefore we go to recipe-list.component.ts and take the current recipes defined there
   private recipes: Recipe[] = [
        new Recipe('Chocolate Cake', 
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tortor tellus, finibus eu suscipit vitae, semper non elit. Sed cursus quis enim et varius. Donec sem nibh, venenatis nec semper quis, vestibulum ac velit. Morbi fringilla orci quis posuere hendrerit. Ut non purus non sapien rutrum accumsan eget sed quam. ', 
        'https://cdn.pixabay.com/photo/2016/11/22/18/52/cake-1850011_960_720.jpg', 
        [
            new Ingredient('chocolate', 300),
            new Ingredient('flour', 500)
        ]),
        // we can add some ingredients for this recipe
        // here we pass an array of ingredients in the recipe
        new Recipe('Summer Ice Cream', 
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tortor tellus, finibus eu suscipit vitae, semper non elit. Sed cursus quis enim et varius. Donec sem nibh, venenatis nec semper quis, vestibulum ac velit. Morbi fringilla orci quis posuere hendrerit. Ut non purus non sapien rutrum accumsan eget sed quam. ', 
        'https://cdn.pixabay.com/photo/2019/07/28/04/15/sweets-4367900_960_720.jpg', 
        [
            new Ingredient('milk', 0.5),
            new Ingredient('sugar', 100)
        ])
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

      recipeSelected = new EventEmitter<Recipe>();
      // it will hold Recipe data

      constructor(private slService: ShoppingListService){}

      // we need to add a method into recipe service
      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients)
      }
}
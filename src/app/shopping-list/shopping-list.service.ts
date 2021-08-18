import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    // first we copy all the ingredients from shopping-list.component.ts
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];
      // we made it private because we get data here in this array

      getIngredients() {
          return this.ingredients.slice();
          // slice method doesnt get an acces to an original store of this array    
      }

      addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient)
      }

      
}
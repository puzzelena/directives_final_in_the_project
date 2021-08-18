import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>()
    // first we copy all the ingredients from shopping-list.component.ts
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];
      // we made it private because we get data here in this array

      getIngredients() {
          // the solving of the problem with the output on the screen is
          // that we simply remove slice()
          // otherwise we can put anther method
          return this.ingredients.slice();
          // slice method doesnt get an acces to an original store of this array    
      }

      addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient)
        this.ingredientsChanged.emit(this.ingredients.slice())
        // we call ingredientsChanged and emit a new event with the passed value inside
        // our original ingredients array that is working with a copy of it 
      }


}
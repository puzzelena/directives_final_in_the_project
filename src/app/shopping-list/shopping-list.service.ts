import { EventEmitter } from "@angular/core";
import { Subject } from 'rxjs'

import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    // ingredientsChanged = new EventEmitter<Ingredient[]>()
    ingredientsChanged = new Subject<Ingredient[]>()
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
       // this.ingredientsChanged.emit(this.ingredients.slice())
       this.ingredientsChanged.next(this.ingredients.slice())
        // we call ingredientsChanged and emit a new event with the passed value inside
        // our original ingredients array that is working with a copy of it 
      }

      addIngredients(ingredients: Ingredient[]) {
       // for(let ingredient of ingredients){
       //     this.addIngredient(ingredient);
       // }
       this.ingredients.push(...ingredients)
       // we access the ingredients and call push method
       // we use spread operator which allows to turn an array of elements
       // to a list of elements
       // push cant handle an array

       // this.ingredientsChanged.emit(this.ingredients.slice())
       this.ingredientsChanged.next(this.ingredients.slice())
       // we need to emit these ingredients and here we pass a copy of it
       

      }


}
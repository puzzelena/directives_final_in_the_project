import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[]

  // we set here uninitialized array
  // and we inject our shopping-list
  constructor(private slService: ShoppingListService) {

   }

  ngOnInit() {
    // as good practice all the initializations we make in ngOnInit
    this.ingredients = this.slService.getIngredients();
    this.slService.ingredientsChanged
    .subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients
        // this.ingredients equals to the ingredients passed in the function
      }
    )
  }
}

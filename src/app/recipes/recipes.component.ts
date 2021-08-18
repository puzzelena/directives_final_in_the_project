import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected
    .subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe;
        // it is equal to the recipe that we got as an event
      }
      // recipe: Recipe is the argument list for the function
    );
    // we will configure the event emmiter
    // we subscribe to it to get informed about changes
    // here we will receive data of Recipe type
  }

}
// in the recipes component we need to listen an event in recipes.service.ts
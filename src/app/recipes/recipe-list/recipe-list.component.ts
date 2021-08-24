import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute) { }
  //now in the ngOnInit we use service where we stored an array with recipes

  ngOnInit() {
    // in ngOnInit we need to listen this event of recipesChanged
    // we will subscribe to this event
    // here we will recive a new array of recipes
    // and the data is created using a callback
    this.recipeService.recipesChanged
    .subscribe(
      (recipes: Recipe[]) => {
        // here recipes are equal to the recipes we have passed there
        this.recipes = recipes;
      }
    )
    this.recipes = this.recipeService.getRecipes();

  }

  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route})
  }

}

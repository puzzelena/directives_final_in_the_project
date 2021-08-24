import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscription: Subscription

  constructor(private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute) { }
  //now in the ngOnInit we use service where we stored an array with recipes

  ngOnInit() {
    // in ngOnInit we need to listen this event of recipesChanged
    // we will subscribe to this event
    // here we will recive a new array of recipes
    // and the data is created using a callback
    this.subscription = this.recipeService.recipesChanged
    // here the subscription is assigned
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

  ngOnDestroy() {
    // in onDestroy we can unsubscribe
    this.subscription.unsubscribe();
    // this is done to evit memory leaks here
  }

}

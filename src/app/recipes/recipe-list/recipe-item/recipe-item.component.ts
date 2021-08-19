import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../../recipe.model';
// import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

/*
  constructor(private recipeService: RecipeService) { 
    // we injected the recipe service
  }
*/
  ngOnInit() {
  }

  /*onSelected() {
    // we use the recipeservice event emmmiter
    // where we will emmit the recipe of this recipe item component
    // because this one we want to select and the data we want to pass
    // after this approach we go to recipe-list.componet.html
    // and remove listener for this functionality
   this.recipeService.recipeSelected.emit(this.recipe)
  }
*/
}

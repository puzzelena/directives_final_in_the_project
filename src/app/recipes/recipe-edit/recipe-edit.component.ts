import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
// import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})

export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService,
              private router: Router) { }
              // here we injected router by type Router

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        // this is the check in which mode we are
        //console.log(this.editMode)
        this.initForm();
      }
    )
  }

  onSubmit() {
   /* const newRecipe = new Recipe(
      this.recipeForm.value['name'],
      this.recipeForm.value['description'],
      this.recipeForm.value['imagePath'],
      this.recipeForm.value['ingredients']
      );
      */
     // all this newRecipe is equivalent to this.recipeForm.value
     // and instead of second argument of newRecipe we can pass this.recipeForm.value

      // these all values will be shown once it is submitted
    // we must point out the value 'name' in square brackets
    // console.log(this.recipeForm)
    if(this.editMode){
      //this.recipeService.updateRecipe(this.id, newRecipe)
      this.recipeService.updateRecipe(this.id, this.recipeForm.value)
      // we passed the second argument as newRecipe to update the current newRecipe
      // we call this method to update
    } else {
      this.recipeService.addRecipe(this.recipeForm.value)
    }

    this.onCancel();
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        // here we set the default value of null
        'amount': new FormControl(null, [
          Validators.required, 
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    )
  }

  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if(this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if(recipe['ingredients']){
        for(let ingredient of recipe.ingredients){
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required), // here is default value of ingredient.name
              'amount': new FormControl(ingredient.amount, [
                Validators.required, 
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
            // here we push FormGroup because we have two controls(name and amount)
            // these will be grouped in the formgroup {}
          )
        }
      }
      // here we check if the recipe has ingredients
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      // here we passed a recipeName as default value
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredients': recipeIngredients
    });

  }
// in onCancel we need to navigate a way
// for that we need to create a router in the constructor using service

  onCancel() {
    // after we injeted a router
    // we can simply access the router and navigate
    this.router.navigate(['../'], {relativeTo: this.route});
    // here we go up one level
    // this will take us back to the detail page if we click on the new button it will take us back to the new recipe page
    // so to make it work we need to tell Angular what is the current route and declare it in the constructor
  }

  onDeleteIngredient(index: number){
    // here we wrapped it in the () because we declared that it is FormArray and removeAt is one of the methods that arrays can execute
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index)
    // here removeAt takes as the parameter the index that is passed in the declarede function
  }

}
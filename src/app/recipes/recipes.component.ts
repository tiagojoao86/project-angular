import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipeSelected:Recipe;

  constructor() { }

  ngOnInit() {
  }

  selectRecipe(recipe:Recipe){
    this.recipeSelected = recipe;
  }

}

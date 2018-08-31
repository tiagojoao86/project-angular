import { Component, OnInit, Input} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

 // @Input() recipeDetail:Recipe;
  recipeDetail:Recipe;
  paramsSubscription: Subscription;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { 
    
  }

  ngOnInit() {
    //this.recipeDetail = this.recipeService.getRecipe(this.route.snapshot.params['i']);
    this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.recipeDetail = this.recipeService.getRecipe(+params['id']);
      }
    );
  }

  onAddToShoppingList(){
    this.recipeService.
      addIngredientsToShoppingList(this.recipeDetail.ingredients);
  }
}

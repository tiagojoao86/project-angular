import { Component, OnInit, Input} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
  index: number;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute,
              private router: Router) { 
    
  }

  ngOnInit() {
    //this.recipeDetail = this.recipeService.getRecipe(this.route.snapshot.params['i']);
    this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.index = +params['id'];
        this.recipeDetail = this.recipeService.getRecipe(this.index);
      }
    );
  }

  onAddToShoppingList(){
    this.recipeService.
      addIngredientsToShoppingList(this.recipeDetail.ingredients);
  }

  onEditRecipe(){
    this.router.navigate(['edit'],{relativeTo: this.route});
    // this.router.navigate(['../', this.index, 'edit'], 
    //                       {relativeTo: this.route});
  }

  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.index);
    this.router.navigate(['']);
  }
}

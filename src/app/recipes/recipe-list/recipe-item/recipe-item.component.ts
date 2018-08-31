import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model'
import { RecipeService } from '../../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  @Input() index: number;
  

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit() {
    
  }

  onSelected(){
    //this.recipeService.recipeSelected.emit(this.recipe);    
  }

  

}

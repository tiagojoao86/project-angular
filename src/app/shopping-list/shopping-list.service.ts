import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";

export class ShoppingListService{
    //ingridientsChanged = new EventEmitter<Ingredient[]>();
    ingridientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples',5),
        new Ingredient('Tomatos',10)
    ];

    getIngredients(){
        return this.ingredients.slice();
    }

    getIngredient(index: number){
        return this.ingredients[index];
    }

    addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        //this.ingridientsChanged.emit(this.ingredients.slice());
        this.ingridientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]){
        // for (let ingredient of ingredients){
        //     this.addIngredient(ingredient);
        // }
        this.ingredients.push(...ingredients);
       // this.ingridientsChanged.emit(this.ingredients.slice());
       this.ingridientsChanged.next(this.ingredients.slice());
    }

    updateIngredient(index: number, newIngredient:Ingredient){
        this.ingredients[index] = newIngredient;
        this.ingridientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number){
        this.ingredients.splice(index,1);
        this.ingridientsChanged.next(this.ingredients.slice());
    }

}
import { Subject } from "rxjs";
import { Ingredient } from "../shared/Ingredient.model";
import { EventEmitter, Inject, Injectable, OnInit } from "@angular/core";

@Injectable()
export class ShoppingListService {

  // onIngredientsAddedToShoppingList = new EventEmitter<Ingredient[]>();
  onItemAddedToShoppingList = new EventEmitter<Ingredient[]>();

 constructor() {

  // this.onIngredientsAddedToShoppingList.subscribe((data2:Ingredient[]) =>
  // {
  //   console.log(2, data2, this.Ingredients);

  //   this.Ingredients = this.Ingredients.concat(data2);
  //   this.onItemAddedToShoppingList.emit(this.Ingredients);

  // })

 }


  private Ingredients : Ingredient[] = [new Ingredient("spagettie", 20)];

  getIngredients(){
    return this.Ingredients;
  }

  getIngredientsAddedToShoppingList(data1:Ingredient[]){
   this.Ingredients =  this.Ingredients.concat(data1);
   this.onItemAddedToShoppingList.emit(this.Ingredients);
  }
}

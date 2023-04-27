import { Component } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  Ingredients : Ingredient[] = 
  
  [ new Ingredient("Maggiee", 10),
    new Ingredient("spagettie", 20) ];

    addButtonFunctionality(shoppingList:{name:string , amount:number}){
     this.Ingredients .push(shoppingList);
    //  [new Ingredient(shoppingList.name , shoppingList.amount)];
    }

    deletButtonFunctionality(shoppingList:any){
      

    }
    
    clearButtonFunctionality(shoppingList:any){

    }


}

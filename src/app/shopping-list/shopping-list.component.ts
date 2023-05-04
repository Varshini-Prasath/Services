import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';
import { ShoppingListService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers:[]
})
export class ShoppingListComponent implements OnInit{

    constructor(private shoppingServices : ShoppingListService){}

    ingredients? : Ingredient[]  ;

    ngOnInit(){
     this.ingredients = this.shoppingServices.getIngredients();
      this.shoppingServices.onItemAddedToShoppingList.subscribe(
        (data:Ingredient[])=>{
          this.ingredients=data;
        }
      )

    }






}

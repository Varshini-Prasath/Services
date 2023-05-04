import { Component , Input} from '@angular/core';
import {receipe} from '../receipe-model'
import { ShoppingListService } from '../../shopping-list/shopping.service'
@Component({
  selector: 'app-receipedetail',
  templateUrl: './receipedetail.component.html',
  styleUrls: ['./receipedetail.component.css']
})
export class ReceipedetailComponent {

  @Input() Receipe : receipe = {name : '', description: '' , image : '', ingredients:[]};

  constructor(private shoppingList :ShoppingListService){}

  itemToShoppingList(){
    this.shoppingList.getIngredientsAddedToShoppingList(this.Receipe.ingredients);
    // this.shoppingList.onIngredientsAddedToShoppingList.emit(this.Receipe.ingredients);

  }
}

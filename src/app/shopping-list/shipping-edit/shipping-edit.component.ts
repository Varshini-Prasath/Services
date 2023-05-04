import { Component, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/Ingredient.model';
import { ShoppingListService } from '../shopping.service';

@Component({
  selector: 'app-shipping-edit',
  templateUrl: './shipping-edit.component.html',
  styleUrls: ['./shipping-edit.component.css']
})
export class ShippingEditComponent {

  constructor(private shoppingService: ShoppingListService){}
  shoppingListName: string = '';
  shoppingListAmount: number = 0;


  addButtonFunctionality(){
    console.log(1);

    this.shoppingService.getIngredientsAddedToShoppingList(
      [
        {name:this.shoppingListName,
          amount: this.shoppingListAmount
    }])

    // this.shoppingService.onIngredientsAddedToShoppingList.emit([{
    //   name : this.shoppingListName,
    //   amount: this.shoppingListAmount
    // }]);

  }

  // deletButtonFunctionality(event:Event){
  //   this.shoppingList.emit({
  //     name : this.shoppingListName,
  //     amount: this.shoppingListAmount
  //   });
  // }

  // clearButtonFunctionality(event:Event){
  //   this.shoppingList.emit({
  //     name : this.shoppingListName,
  //     amount: this.shoppingListAmount
  //   });
  // }
  // getName(event :Even){
  //   this.shoppingListName = (<HTMLInputElement>event.target).value;
  //   console.log(this.shoppingListName);
  // }
}

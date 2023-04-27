import { Component, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/Ingredient.model';

@Component({
  selector: 'app-shipping-edit',
  templateUrl: './shipping-edit.component.html',
  styleUrls: ['./shipping-edit.component.css']
})
export class ShippingEditComponent {

  shoppingListName: string = '';
  shoppingListAmount: number = 0;

  @Output() shoppingList = new EventEmitter<{name:string , amount:number}>();

  // @Output() listName = new EventEmitter<string>();
  // @Output() listAmount = new EventEmitter<number>();

  addButtonFunctionality(event: Event){
    this.shoppingList.emit({
      name : this.shoppingListName,
      amount: this.shoppingListAmount
    });
    
  }

  deletButtonFunctionality(event:Event){
    this.shoppingList.emit({
      name : this.shoppingListName,
      amount: this.shoppingListAmount
    });
  }

  clearButtonFunctionality(event:Event){
    this.shoppingList.emit({
      name : this.shoppingListName,
      amount: this.shoppingListAmount
    });
  }
  // getName(event :Even){
  //   this.shoppingListName = (<HTMLInputElement>event.target).value;
  //   console.log(this.shoppingListName);
  // }
}

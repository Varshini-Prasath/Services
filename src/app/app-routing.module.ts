import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReceipeBookComponent } from './receipe-book/receipe-book.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShippingEditComponent } from './shopping-list/shipping-edit/shipping-edit.component';
import { ReceipeListComponent } from './receipe-book/receipe-list/receipe-list.component';
import { ReceipeItemComponent } from './receipe-book/receipe-list/receipe-item/receipe-item.component';
import { ReceipedetailComponent } from './receipe-book/receipedetail/receipedetail.component';
import { ReceipeStartComponent } from './receipe-book/receipe-start/receipe-start.component';

const routes: Routes = [
  { path : '' , redirectTo: 'receipeList', pathMatch : 'full'},
  { path : 'receipeList' ,  component :  ReceipeBookComponent ,
    children : [
          {path: '' , component : ReceipeStartComponent },//children: [
          {path : ':id' , component :ReceipedetailComponent}],
  //     { path : '/receipeDetail' , component : ReceipedetailComponent}]
   },
  { path : 'shoppingList' , component : ShoppingListComponent
  //  , children :[
  //     { path: '/shoppingEdit' , component : ShippingEditComponent } ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

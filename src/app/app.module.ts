import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReceipeBookComponent } from './receipe-book/receipe-book.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ReceipeItemComponent } from './receipe-book/receipe-list/receipe-item/receipe-item.component';
import { ReceipedetailComponent } from './receipe-book/receipedetail/receipedetail.component';
import { ShippingEditComponent } from './shopping-list/shipping-edit/shipping-edit.component';
import { HeaderComponent } from './header/header.component';
import { ReceipeListComponent } from './receipe-book/receipe-list/receipe-list.component';
import { FormsModule } from '@angular/forms';
import { DropDownDirective } from './shared/dropDown.directive';

@NgModule({
  declarations: [
    ReceipeListComponent,
    AppComponent,
    ReceipeItemComponent,
    ReceipedetailComponent,
    ShippingEditComponent,
    HeaderComponent,
    ReceipeBookComponent,
    ShoppingListComponent,
    DropDownDirective
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

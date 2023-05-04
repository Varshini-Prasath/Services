import { EventEmitter } from "@angular/core";
import { receipe } from "./receipe-model";
import { Ingredient } from "../shared/Ingredient.model";

export class ReceipeService{


  receipeSelected = new EventEmitter<receipe>();
    private receipes : receipe[] =
  [
    new receipe("Idly" ,
     " Pack of 2 hot indly made of rice batter" ,
      "https://img.freepik.com/premium-photo/idly-idli-south-indian-main-breakfast-item-which-is-beautifully-arranged-black-plate-white-background_527904-2893.jpg",
     [  new Ingredient( "Hot Idly",2) ,
        new Ingredient ("Sambar" , 1)
    ]
      ) ,
    new receipe("Poori" ,
     " Pack of 2 poori made ofwheat flore with potato curry " ,
     "https://www.shutterstock.com/image-photo/indian-food-dining-north-cuisine-260nw-1489785119.jpg",
     [ new Ingredient("Poori" , 2),
        new Ingredient("masal" , 1)]

    )

  ];


  getReceipes(){
    return this.receipes;
  }
}

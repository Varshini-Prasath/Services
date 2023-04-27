import { receipe } from "./receipe-model";

export class ReceipeService{

    private receipes : receipe[] = 
  [
    new receipe("Maggie" , " Long grain noodle" , "https://upload.wikimedia.org/wikipedia/commons/8/83/Maggi_logo.svg") , 
    new receipe("Nodole" , " Noodle " , "https://upload.wikimedia.org/wikipedia/commons/8/83/Maggi_logo.svg")

  ];

  getReceipes(){
    return this.receipes;
  }
}
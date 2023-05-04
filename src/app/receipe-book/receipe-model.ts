import { Ingredient } from "../shared/Ingredient.model";

export class receipe{
    public id : number;
    public name: String = "";
    public description: String = "";
    public image: String = "";
    public ingredients : Ingredient[];

    constructor( id:number, name: string , desc: string, image: string , ingredients : Ingredient[]){
       this.id = id,
       this.name = name,
       this.description = desc,
       this.image = image,
       this.ingredients = ingredients
    }

}



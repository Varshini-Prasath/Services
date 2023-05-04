import { Component, EventEmitter, Output } from '@angular/core';
import { receipe } from '../receipe-model';
import { ReceipeService } from '../receipeBook.service';


@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent {

  constructor(private receipeservice : ReceipeService){};

  receipes = this.receipeservice.getReceipes();

  receipeView : receipe = {name : '', description: '' , image : '' , ingredients: []};

  @Output() receipeEmitter = new EventEmitter<receipe>();
  // numbers :number[] = [1,2,3,3,4];
  // strings :string[] = ['ss','ss','aa','qq'];

  // receipes2 : receipe[] =
  // [
  //   { name : "idly", description : "set", image : "sss" },
  //   { name : "dosai", description : "sew222", image : "s111" },
  //   new receipe("curd rice", "dfs", "")
  // ];



  ngOnInit(){}




}

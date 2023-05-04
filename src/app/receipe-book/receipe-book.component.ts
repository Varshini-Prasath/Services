import { Component, OnInit } from '@angular/core';
import { receipe } from './receipe-model';
import { ReceipeService } from './receipeBook.service';

@Component({
  selector: 'app-receipe-book',
  templateUrl: './receipe-book.component.html',
  styleUrls: ['./receipe-book.component.css'],
  providers : [ReceipeService]
})
export class ReceipeBookComponent implements OnInit {

  constructor(private receipeservice : ReceipeService){};

  Receipe : receipe = {id:0, name : '', description: '' , image : '' , ingredients :[]};

ngOnInit(){
  this.receipeservice.receipeSelected.subscribe((receipe:receipe)=>(this.Receipe=receipe));

}
}

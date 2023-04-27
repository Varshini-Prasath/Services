import { Component } from '@angular/core';
import { receipe } from './receipe-model';
import { ReceipeService } from './receipeBook.service';

@Component({
  selector: 'app-receipe-book',
  templateUrl: './receipe-book.component.html',
  styleUrls: ['./receipe-book.component.css'],
  providers : [ReceipeService]
})
export class ReceipeBookComponent {

  constructor(private receipeservice : ReceipeService){};

  Receipe : receipe = {name : '', description: '' , image : ''};
 
isClick(receipeEmitter : receipe)
{
      this.Receipe = receipeEmitter;
      console.log(this.Receipe);
}
}

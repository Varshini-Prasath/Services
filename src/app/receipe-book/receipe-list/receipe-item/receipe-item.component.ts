import { Component , EventEmitter, Input, Output } from '@angular/core';
import { receipe } from '../../receipe-model'
import { ReceipeService } from '../../receipeBook.service';

@Component({
  selector: 'app-receipe-item',
  templateUrl: './receipe-item.component.html',
  styleUrls: ['./receipe-item.component.css']
})

export class ReceipeItemComponent {


  @Input() Receipe : receipe = {name : '', description: '' , image : '' , ingredients:[]};

  constructor(private receipeService : ReceipeService){}

  isClick(){
    this.receipeService.receipeSelected.emit(this.Receipe);
  }
}

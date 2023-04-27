import { Component , EventEmitter, Input, Output } from '@angular/core';
import { receipe } from '../../receipe-model'

@Component({
  selector: 'app-receipe-item',
  templateUrl: './receipe-item.component.html',
  styleUrls: ['./receipe-item.component.css']
})

export class ReceipeItemComponent {
 
  
  @Input() Receipe : receipe = {name : '', description: '' , image : ''};
 
  @Output() clickReceipe = new EventEmitter<receipe>();

  isClick(event: Event){
    this.clickReceipe.emit(this.Receipe);
  }
}
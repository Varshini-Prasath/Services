import { Component , Input} from '@angular/core';
import {receipe} from '../receipe-model'
@Component({
  selector: 'app-receipedetail',
  templateUrl: './receipedetail.component.html',
  styleUrls: ['./receipedetail.component.css']
})
export class ReceipedetailComponent {

  @Input() Receipe : receipe = {name : '', description: '' , image : ''};
   
}

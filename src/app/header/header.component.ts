import { Component , EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 
  clickAction: String = '';

  @Output() selectPage = new EventEmitter<string>();


 onClick(event: string){
      this.selectPage.emit(event);

 }
}

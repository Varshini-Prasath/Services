import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ShoppingApplication';

  selectedPage: string = 'Receipe';
  clickReceipe:boolean = false ;
  clickShpping:boolean = false ;

 onClick(selectPage: string){
  this.selectedPage = selectPage;
 } 
}

import { style } from "@angular/animations";
import { Directive, HostBinding, HostListener,Input } from "@angular/core";

@Directive({
    selector : '[appDropDown]'
})

export class DropDownDirective{

    
@HostBinding('class.open') isOpen = false;
   

    @HostListener('click') mouseclick(eventData:Event){
        this.isOpen = !this.isOpen;
       
    }
   

}
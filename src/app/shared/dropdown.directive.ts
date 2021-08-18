import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  // this directive will add css class
  // we create isOpen directive
  // to automatically attach or diattache the property
  // hostbinging allows us to bind properties where the directive is placed on
 // here we bind class, class is array of the classes and personally open class, it is the css class that we need to attach dinamically
 // or detach
  @HostBinding('class.open') isOpen = false;

   // we need to establish it toggling when clicking on it
  // to listen to a click we need to add HostListener
  // here we listen to a click event then we need to execute toggleOpen() method, 
  // because we need to know it should be openeed or not
  @HostListener('click') toggleOpen() {
    // here the current state is true, so it is not opened toggle
    this.isOpen = !this.isOpen;
  }
}

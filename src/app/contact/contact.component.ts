import { Component } from '@angular/core';
 
@Component({
  selector: 'app-contact',
  templateUrl: 'contact.component.html'
})
 
export class ContactComponent {
  model: any = {};
 
  onSubmit() {
    console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
  }
}
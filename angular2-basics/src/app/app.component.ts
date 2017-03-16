import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <user></user>
  `
})
export class AppComponent  {
  name = 'Teejay';
  email = 'teejay@teejaymew.com',
  address = {
    street: 'Guijo Street',
    city: 'Pasig City',
    state: 'Metro Manila'
  }
}

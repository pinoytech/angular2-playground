import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `
      <h1>Hello {{name}}</h1>
      <p><strong>Email: {{email}}</strong></p>
      <p><strong>Address: </strong>{{address.street}} {{address.city}} {{address.state}}</p>
      `
})
export class UserComponent  {
  name = 'Teejay';
  email = 'teejay@teejaymew.com',
  address = {
    street: 'Guijo Street',
    city: 'Pasig City',
    state: 'Metro Manila'
  }
}
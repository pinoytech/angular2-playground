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

  name : string;
  email : string;
  address : address;

  constructor() {
    console.log("constructor ran");
    this.name = 'Teejay';
    this.email = 'teejay@teejaymew.com',
    this.address = {
      street: 'Guijo Street',
      city: 'Pasig City',
      state: 'Metro Manila'
    }
  }
}

interface address {
  street: string;
  city: string;
  state: string;
}
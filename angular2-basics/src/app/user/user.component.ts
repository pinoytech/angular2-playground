import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `
      <h1>Hello {{name}}</h1>
      <p><strong>Email: {{email}}</strong></p>
      <p><strong>Address: </strong>{{address.street}} {{address.city}} {{address.state}}</p>
      <div *ngIf="showHobbies">
      <h3>Hobbies</h3>
      <ul>
        <li *ngFor="let hobby of hobbies">{{hobby}}</li>
      </ul>
      </div>
      `
})
export class UserComponent  {

  name : string;
  email : string;
  address : address;
  hobbies: string[];
  showHobbies: boolean;

  constructor() {
    console.log("constructor ran");
    this.name = 'Teejay';
    this.email = 'teejay@teejaymew.com',
    this.address = {
      street: 'Guijo Street',
      city: 'Pasig City',
      state: 'Metro Manila'
    }
    this.hobbies = ['Music', 'Movies', 'Games'];
    this.showHobbies = false;
  }
}

interface address {
  street: string;
  city: string;
  state: string;
}
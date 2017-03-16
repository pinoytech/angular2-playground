import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'user',
  template: `
      <h1>{{name}}</h1>
      <p><strong>Email: {{email}}</strong></p>
      <p><strong>Address: </strong>{{address.street}} {{address.city}} {{address.state}}</p>
      <button (click)="toggleHobbies()">{{showHobbies ? "Hide Hobbies" : "Show Hobbies"}}</button>
      <div *ngIf="showHobbies">
      <h3>Hobbies</h3>
        <ul>
          <li *ngFor="let hobby of hobbies; let i = index">
            {{hobby}} <button (click)="deleteHobby(i)">x</button>
          </li>
        </ul>
      </div>
      <form (submit)="addHobby(hobby.value)">
        <label>Add Hobby: </label><br />
        <input type="text" #hobby /><br />
      </form>
      <hr />
      <h3>Edit User</h3>
      <form>
        <label>Name: </label><br />
        <input type="text" name="name" [(ngModel)]="name" /><br />
        <label>Email: </label><br />
        <input type="text" name="email" [(ngModel)]="email" /><br />
        <label>Street: </label><br />
        <input type="text" name="name" [(ngModel)]="address.street" /><br />
        <label>City: </label><br />
        <input type="text" name="city" [(ngModel)]="address.city" /><br />
        <label>State: </label><br />
        <input type="text" name="state" [(ngModel)]="address.state" /><br />
      </form>
      <hr />
      <h3>Posts</h3>
      <div *ngFor="let post of posts">
        <h3>{{post.title}}</h3>
        <p>{{post.body}}</p>
      </div>
      `,
      providers: [PostsService]
})
export class UserComponent {

  name: string;
  email: string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;
  posts: Post[];

  constructor(private postsService: PostsService) {
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
    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
    });

  }

  toggleHobbies(): void {
    if (this.showHobbies == true) {
      this.showHobbies = false;
    } else {
      this.showHobbies = true;
    }
  }

  addHobby(hobby: string): void {
    this.hobbies.push(hobby);
  }

  deleteHobby(index: number): void {
    this.hobbies.splice(index, 1);
  }
}

interface address {
  street: string;
  city: string;
  state: string;
}

interface Post {
  id: number;
  title: string;
  body: string;
}
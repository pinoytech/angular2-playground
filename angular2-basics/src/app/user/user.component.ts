import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: 'user.component.html',
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
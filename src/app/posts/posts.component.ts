import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[];

  constructor(private service: PostService) {

  }

  ngOnInit() {
    this.service.getPosts()
      .subscribe(response => {
        this.posts = response.json();
      }, error => {
        alert("unexpected error accured!!")
      });
  }

  creatPost(input: HTMLInputElement) {
    let post = {
      title: input.value
    }

    input.value = "";
    this.service.createPosts(post)
      .subscribe(response => {
        post['id'] = response.json().id;
        this.posts.splice(0, 0, post);
        console.log(response)
      }, error => {
        alert("unexpected error accured!!")
      });
  }

  updatePost(post) {
    this.service.updatePost(post)
      .subscribe(response => {
        console.log(response);
      }, error => {
        alert("unexpected error accured!!")
      });
  }

}

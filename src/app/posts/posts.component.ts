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
    this.service.getAll()
      .subscribe(response => {
        this.posts = response.json();
      });
  }

  creatPost(input: HTMLInputElement) {
    let post = {
      title: input.value
    }

    input.value = "";
    this.service.create(post)
      .subscribe(response => {
        post['id'] = response.json().id;
        this.posts.splice(0, 0, post);
        console.log(response)
      }, (error: Response) => {
        if (error.status === 400) {
          // this.form.setErrors(error.json());
        } else throw error;

      });
  }

  updatePost(post) {
    this.service.update(post)
      .subscribe(response => {
        console.log(response);
      });
  }

}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  public url = 'http://abcjsonplaceholder.typicode.com/posts';

  constructor(private http: Http) {

  }

  createPosts(post) {
    return this.http.post(this.url, JSON.stringify(post))
  }

  updatePost(post) {
    return this.http.
      patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }))
  }

  getPosts() {
    return this.http.get(this.url);
  }
}

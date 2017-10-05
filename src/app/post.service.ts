import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Post } from './post';  

@Injectable()
export class PostService {
private postsUrl = '../assets/posts.json';  // URL to web api

constructor(private http: Http) { }

getPosts(): Promise<Post[]> {
  return this.http.get(this.postsUrl)
             .toPromise()
             .then(response => response.json().data as Post[])
             .catch(this.handleError);
}

getPost(id: string): Promise<Post> {
  return this.getPosts()
             .then(posts => posts.find(post => post.id === id));
}

private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
}
}
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PostService } from './post.service';

import { Post } from './post';


@Component({
  selector: 'blog',
  templateUrl: './blog.component.html'
})


export class BlogComponent implements OnInit {
  posts: Post[];
  selectedPost: Post;
  title= 'Blog';
  lead= 'Proin iaculis purus consequat sem cure';

  constructor(
    private router: Router,
    private postService: PostService) { }

  getPosts(): void {
    this.postService.getPosts().then(posts => this.posts = posts);
  }

  ngOnInit(): void {
    this.getPosts();
  }

  onSelect(post: Post): void {
    this.selectedPost = post;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedPost.id]);
  }
}

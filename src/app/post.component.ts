import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Post } from './post';
import { PostService } from './post.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'post',
    templateUrl: './post.component.html'
})
export class PostComponent implements OnInit {
  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
  this.route.paramMap
    .switchMap((params: ParamMap) => this.postService.getPost(params.get('id')))
    .subscribe(post => this.post = post);
}


goBack(): void {
  this.location.back();
}

  @Input() post: Post;
}
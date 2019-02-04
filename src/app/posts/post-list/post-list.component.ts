import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  posts = [];
  answers = [];
  private postsSub: Subscription;
  private answersSub: Subscription;

  getAnswers(id) {
    this.postsService.getAnswers(id);
  }
  constructor(public postsService: PostsService) { }

  ngOnInit() {
    this.postsSub = this.postsService.getPostUpdateListener()
    .subscribe((posts) => {
      this.posts = posts;
    });
    this.answersSub = this.postsService.getAnswersUpdated()
    .subscribe((ans) => {
      this.answers = ans;
    });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }

}

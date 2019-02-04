import { Post } from './post.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { stringify } from '@angular/core/src/util';
import { environment } from '../../environments/environment';
import 'rxjs';

@Injectable({providedIn: 'root'})

export class PostsService {
  private posts: Post[] = [];
  private answersRes = [];
  private postsUpdated = new Subject<any>();
  private AnswerUpdated = new Subject<any>();

  constructor(private http: HttpClient) {}

  getAnswers(id) {
    this.http.get<any>(environment.STACK_API_ANS_URL + id + environment.STACK_API_ANS_URL2)
    .subscribe((results) => {
     this.answersRes = results.items;
     this.AnswerUpdated.next([...this.answersRes]);
    });
  }

  getPosts(title: string) {
    this.http.get<any>(environment.STACK_API_URL + title)
    .subscribe((postData) => {
      this.posts = postData.items;
      this.postsUpdated.next([...this.posts]);
    });
  }
  getAnswersUpdated() {
    return this.AnswerUpdated.asObservable();
  }
  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }
}

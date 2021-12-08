import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getPost } from './actions/posts.action';
import { Post } from './models/post.model';
import { DataService } from './services/data/data.service';
import { AppState } from './state/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  posts$: Observable<Post[]>

  constructor(private store: Store<AppState>, private dataService: DataService) {
    this.posts$ = this.store.select("posts");
  }

  ngOnInit()
  {
    this.store.dispatch(getPost({ postId: "6STsjF5Ncm2DbL2lpiTL"}));
    this.store.dispatch(getPost({ postId: "wPCSLFjugYwCcjLC5u6D"}));
  }
}

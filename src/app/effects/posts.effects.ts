import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { Observable, of, map, mergeMap, catchError, delay } from 'rxjs';
import { PostsActions, getPost, getPostSuccess } from '../actions/posts.action';
import { DataService } from '../services/data/data.service';

@Injectable()
export class PostsEffects {
  getPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPost),
      mergeMap(({ postId }) =>
        this.dataService.getPost(postId).pipe(
          map((post) => getPostSuccess({ post })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions, private dataService: DataService) {}
}

import { createAction, props } from "@ngrx/store";
import { Post } from "../models/post.model";


export enum PostsActions {
    GET_POST = '[POST] GET',
    GET_POST_SUCCESS = '[POST] GET SUCCESS',
    VOTE_UPDATE = '[VOTE] UPDATE',
    VOTE_SUCCESS = '[VOTE] SUCCESS',
    VOTE_FAIL = '[VOTE] FAIL'
};

export const getPost = createAction(
    PostsActions.GET_POST,
    props<{ postId: string }>()
);

export const getPostSuccess = createAction(
    PostsActions.GET_POST_SUCCESS,
    props<{ post: Post}>()
);

export const voteUpdate = createAction(
    PostsActions.VOTE_UPDATE,
    props<{ payload?: any }>()
);

export const voteSuccess = createAction(
    PostsActions.VOTE_SUCCESS,
    props<{ payload?: any }>()
);

export const voteFail = createAction(
    PostsActions.VOTE_FAIL,
    props<{ payload?: any }>()
)
import { createReducer, on } from "@ngrx/store";
import { getPost, getPostSuccess, voteFail, voteSuccess, voteUpdate } from "../actions/posts.action";
import { Post } from "../models/post.model";

const defaultPosts: Post[] = [];

const defaultPost: Post = {
    id: "",
    loading: true,
    text: "",
    votes: 0
}

const getPostsExceptId = (state: Post[], id: string) => state.filter(post => post.id !== id);

export const postsReducer = createReducer(
    defaultPosts,
    on(getPost, (state, action) => { 
        return [...state, { ...defaultPost, id: action.postId }];
    }),
    on(getPostSuccess, (state, action) => { 
        return [...getPostsExceptId(state, action.post.id), { ...action.post, loading: false }];
    }),
    on(voteUpdate, (state, action) => {
        return {...state, ...action.payload, loading: true }
    }),
    on(voteSuccess, (state, action) => {
        return {...state, ...action.payload, loading: false }
    }),
    on(voteFail, (state, action) => {
        return {...state, ...action.payload, loading: false }
    })
)

import { INITIAL_STATE } from "../../constant";
import { createPosts, getPosts, getType, updatedPosts, deletePosts } from "../actions";

export default function postReducers(state = INITIAL_STATE.posts, action) {
    switch (action.type) {
        case getType(getPosts.getPostsRequest): //=> case: 'getPostsRequest':
            return {
                ...state,
                isLoading: true,
            }
        case getType(getPosts.getPostSuccess):
            return {
                ...state,
                isLoading: false,
                data: action.payload,
            }
        case getType(getPosts.getPostFailure):
            return {
                ...state,
                isLoading: false,
            }
        case getType(createPosts.createPostsRequest):
            return {
                ...state,
                data: [
                    ...state.data, action.payload
                ]
            }
        case getType(updatedPosts.updatedPostsRequest):
            return {
                ...state,
                data: state.data.map((post) =>
                    post._id === action.payload._id ? action.payload : post
                )
            }
        case getType(deletePosts.deletePostsRequest):
            return {
                ...state,
                data: state.data.map((post) => post.id)
            }
        default:
            return state
    }
}
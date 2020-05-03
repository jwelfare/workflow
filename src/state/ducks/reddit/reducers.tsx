import { combineReducers } from "redux"
import * as types from "./types"
  
const selectedSubreddit = (state = 'reactjs', action:any) => {
    switch(action.type) {
        case types.SELECT_SUBREDDIT:
            return action.subreddit
        default: 
            return state
    }
}

const postsInitialState = {
    isFetching: false,
    didInvalidate: false,
    items: []
}

const createPostsShape = (state = postsInitialState, action:any) => {
    switch (action.type) {
    case types.INVALIDATE_SUBREDDIT:
        return {
            ...state,
            didInvalidate: true
        }
    case types.REQUEST_POSTS:
        return {
            ...state,
            isFetching: true,
            didInvalidate: false
        }
    case types.RECEIVE_POSTS:
        return {
            ...state,
            isFetching: false,
            didInvalidate: false,
            items: action.posts,
            lastUpdated: action.receivedAt
        }
    default:
        return state
    }
}

const postsBySubreddit = (state:any = {}, action:any) => {
    switch(action.type) {
        case types.REQUEST_POSTS:
            return {
                ...state,
                [action.subreddit]: createPostsShape(state[action.subreddit], action)
            }
        default:
            return state
    }
}

export default combineReducers({
    selectedSubreddit,
    postsBySubreddit
})
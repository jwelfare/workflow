import * as types from './types'

export const invalidateSubreddit = (subreddit:string) => ({
    type: types.INVALIDATE_SUBREDDIT,
    payload: {
        subreddit
    }
});

export const requestPosts = (subreddit:string) => ({
    type: types.REQUEST_POSTS,
    payload: {
        subreddit
    }
})

export const receivePosts = (subreddit:string, json:any) => ({
    type: types.RECEIVE_POSTS,
    payload: {
        subreddit,
        posts: json.data.children.map((child:any) => child.data),
        receivedAt: Date.now()
    }
})
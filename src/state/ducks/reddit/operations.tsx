import * as actions from './actions'

export const invalidateSubreddit = (subreddit:string) => actions.invalidateSubreddit(subreddit)

export const fetchPostsIfNeeded = (subreddit:string) => (dispatch:any, getState:any) => {
    if (shouldFetchPosts(getState(), subreddit)) {
        return dispatch(fetchPosts(subreddit))
    }
}

const fetchPosts = (subreddit:string) => (dispatch:any) => {
    dispatch(actions.requestPosts(subreddit))
    return fetch(`https://www.reddit.com/r/${subreddit}.json`)
        .then(response => response.json())
        .then(json => dispatch(actions.receivePosts(subreddit, json)))
}

const shouldFetchPosts = (state:any, subreddit:string) => {
    const posts = state.postsBySubreddit[subreddit]
    if (!posts) return true
    else if (posts.isFetching) return false
    else return posts.didInvalidate
}
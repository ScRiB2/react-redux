import { IPost } from '../../interfaces/post'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { sleep } from '../../utils/utils'

export interface PostsState {
  syncPosts: IPost[]
  fetchedPosts: IPost[]
}

const initialState: PostsState = {
  syncPosts: [],
  fetchedPosts: [],
}

export const fetchPostsAsync = createAsyncThunk('posts/fetchPosts', async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
  await sleep(1000)
  return res.json()
})

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    createPost: (state, action: PayloadAction<IPost>) => {
      state.syncPosts = state.syncPosts.concat([action.payload])
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPostsAsync.fulfilled, (state, action) => {
      state.fetchedPosts = action.payload
    })
  },
})

export const { createPost } = postsSlice.actions
export const selectSyncPosts = (state: RootState) => state.posts.syncPosts
export const selectFetchedPosts = (state: RootState) => state.posts.fetchedPosts

export default postsSlice.reducer

import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { fetchPostsAsync } from './postsReducer'

export interface AppState {
  loading: boolean
}

const initialState: AppState = {
  loading: false,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    showLoader: (state) => {
      state.loading = true
    },
    hideLoader: (state) => {
      state.loading = false
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostsAsync.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchPostsAsync.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(fetchPostsAsync.rejected, (state) => {
        state.loading = false
      })
  },
})

export const { showLoader, hideLoader } = appSlice.actions
export const selectLoading = (state: RootState) => state.app.loading

export default appSlice.reducer

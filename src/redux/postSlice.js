import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPost = createAsyncThunk(
    'posts/getPosts',
    async () => {
        const response  = await fetch('https://jsonplaceholder.typicode.com/posts')
        return response.json()
    }
)

const postSlice = createSlice({
    name: 'posts',
    initialState: {
        list: [],
        isLoading: false,
        hasError: false
    },
    extraReducers: {

      [getPost.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [getPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.hasError = false;
    },
    [getPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    }

    }
})

export default postSlice.reducer;
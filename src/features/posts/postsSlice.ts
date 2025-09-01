import { createSlice } from "@reduxjs/toolkit";
import { fetchObject, type FetchType } from "../../app/types";
import { fetchPosts } from "./fetchPosts";

interface PostsType {
    fetchOptions: FetchType;
    currentPostsArrayName: string | undefined;
    currentPostsArray: Array<object>;
};

const initialPostsState: PostsType = {
    fetchOptions: fetchObject,
    currentPostsArrayName: '',
    currentPostsArray: [],
};

const postsSlice = createSlice({
    name: 'posts',
    initialState: initialPostsState,
    reducers: {

    },
    extraReducers(builder) {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.fetchOptions.loading = 'pending';
                state.fetchOptions.error = null;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.fetchOptions.loading = 'failed';
                state.fetchOptions.error = action.payload as string;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.fetchOptions.loading = 'succeeded';
                state.fetchOptions.error = null;
                state.currentPostsArray = action.payload?.returnArray;
                state.currentPostsArrayName = action.payload?.arrayName;
            })
    },
});

export default postsSlice.reducer;
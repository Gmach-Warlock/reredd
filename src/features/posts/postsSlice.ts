import { createSlice } from "@reduxjs/toolkit";
import { fetchObject, type FetchType } from "../../app/types";
import { fetchPosts } from "./fetchPosts";
import { fetchComments } from "./fetchComments";

interface PostsType {
    fetchOptions: FetchType;
    currentPostsArrayName: string | undefined;
    currentPostsArray: Array<any>;
    menuIsVisible: boolean;
    commentsAreVisible: boolean;
};

const initialPostsState: PostsType = {
    fetchOptions: fetchObject,
    currentPostsArrayName: '',
    currentPostsArray: [],
    menuIsVisible: false,
    commentsAreVisible: false,
};

const postsSlice = createSlice({
    name: 'posts',
    initialState: initialPostsState,
    reducers: {
        togglePostsMenu: (state) => {
            state.menuIsVisible
                ?
                    state.menuIsVisible = false
                :
                    state.menuIsVisible = true;
        },
        toggleCommentsContainer: (state, action) => {

            const index = state.currentPostsArray.findIndex((post: any) => post.id === action.payload.id);

            if (index !== -1) {
                state.currentPostsArray[index].commentsAreVisible
                    ?
                        state.currentPostsArray[index].commentsAreVisible = false
                    :
                    state.currentPostsArray[index].commentsAreVisible = true;
            }

        }
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
            .addCase(fetchComments.pending, (state) => {
                state.fetchOptions.loading = 'pending';
                state.fetchOptions.error = null;
            })
            .addCase(fetchComments.rejected, (state, action) => {
                state.fetchOptions.loading = 'failed';
                state.fetchOptions.error = action.payload as string;
            })
            .addCase(fetchComments.fulfilled, (state, action) => {
                state.fetchOptions.loading = 'succeeded';
                state.fetchOptions.error = null;

                const index = state.currentPostsArray.findIndex((post: any) => post.subreddit === action.payload?.arrayName);

                console.log(index);
                if (index !== -1) {
                    state.currentPostsArray[index].commentsArray = action.payload?.returnArray;
                    console.log(state.currentPostsArray[index].commentsArray)
                }
                
            })
    },
});

export const { togglePostsMenu, toggleCommentsContainer } = postsSlice.actions;
export default postsSlice.reducer;
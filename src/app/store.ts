import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/theme/themeSlice";
import postsReducer from "../features/posts/postsSlice";
import subredditsReducer from "../features/subreddits/subredditsSlice";

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        posts: postsReducer,
        subreddits: subredditsReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
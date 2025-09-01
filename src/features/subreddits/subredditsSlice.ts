import { createSlice } from "@reduxjs/toolkit";
import { fetchObject, type FetchType } from "../../app/types";
import { fetchSubreddits } from "./fetchSubreddits";

export interface SubredditsType {
    fetchOptions: FetchType;
    currentArrayName: string;
    currentArray: Array<object>;
    subredditsMenuIsVisible: boolean;
};

const initialSubredditsState: SubredditsType = {
    fetchOptions: fetchObject,
    currentArrayName: '',
    currentArray: [],
    subredditsMenuIsVisible: false,
};

const subredditsSlice = createSlice({
    name: 'subreddits',
    initialState: initialSubredditsState,
    reducers: {
        toggleSubredditsMenu: (state) => {
            state.subredditsMenuIsVisible
                ?
                    state.subredditsMenuIsVisible = false
                :
                    state.subredditsMenuIsVisible = true
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchSubreddits.pending, (state) => {
                state.fetchOptions.loading = 'pending';
                state.fetchOptions.error = null;
            })
            .addCase(fetchSubreddits.rejected, (state, action) => {
                state.fetchOptions.loading = 'failed';
                state.fetchOptions.error = action.payload as string;
            })
            .addCase(fetchSubreddits.fulfilled, (state, action) => {
                state.fetchOptions.loading = 'succeeded';
                state.fetchOptions.error = null;
                state.currentArray = action.payload?.returnArray;
                state.currentArrayName = action.payload?.newName;
            })
    },
});

export const { toggleSubredditsMenu } = subredditsSlice.actions;
export default subredditsSlice.reducer;




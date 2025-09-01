import { createSlice } from "@reduxjs/toolkit";
import { fetchObject, type FetchType } from "../../app/types";
import { fetchSubreddits } from "./fetchSubreddits";

export interface SubredditsType {
    fetchOptions: FetchType;
    newName: string;
    currentArray: Array<object>;
};

const initialSubredditsState: SubredditsType = {
    fetchOptions: fetchObject,
    newName: '',
    currentArray: [],
};

const subredditsSlice = createSlice({
    name: 'subreddits',
    initialState: initialSubredditsState,
    reducers: {

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
                state.newName = action.payload?.newName;
            })
    },
});

export default subredditsSlice.reducer;




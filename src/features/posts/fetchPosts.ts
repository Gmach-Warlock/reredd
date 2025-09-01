import { createAsyncThunk } from "@reduxjs/toolkit";

export interface FetchArgsType {
    fetchUrl: string;
    newName: string;
}

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async (args: FetchArgsType, thunkAPI) => {

        const { fetchUrl, newName } = args;

        try {

            const response = await fetch(fetchUrl, {
                method: "GET"
            });

            if (!response) {
                thunkAPI.rejectWithValue(`failed to fetch from ${fetchUrl}`)
            }

            const data = await response.json();

            const preformattedItems = data.data.children.map((item: any) => {
                return {
                    ...item
                }
            });

            const formattedItems = preformattedItems.map((item: any) => {
                return {
                    ...item.data
                }
            });

            console.log(formattedItems);
            return {
                returnArray: formattedItems,
                arrayName: newName,
            };

        } catch (error) {
            console.error(error);
        }
    }
)
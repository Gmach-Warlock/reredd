import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSubreddits = createAsyncThunk(
    'subreddits/fetchSubreddits',
    async (args: any, thunkAPI) => {

        const { fetchUrl, newName } = args;

        try {

            const response = await fetch(fetchUrl, {
                method: "GET"
            });

            if (!response) {
                thunkAPI.rejectWithValue(`failed to fetch from ${fetchUrl}.`)
            }

            const data = await response.json();

            const preformatted = data.data.children.map((item: any) => {
                return {
                    ...item
                }
            })

            const formattedItems = preformatted.map((item: any) => {
                return {
                    ...item.data
                }
            });

            console.log(formattedItems);
            return {
                returnArray: formattedItems,
                newName: newName,
            };

        } catch (error) {
            console.error(error)
        }
    }
)
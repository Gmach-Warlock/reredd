import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchComments = createAsyncThunk(
    'posts/fetchComments',
    async (args: any, thunkAPI) => {
        const { fetchUrl, newName } = args;

        try {

            const response = await fetch(fetchUrl, {
                method: "GET"
            });

            if (!response) {
                thunkAPI.rejectWithValue(`failed to fetch at ${fetchUrl}.`)
            };

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
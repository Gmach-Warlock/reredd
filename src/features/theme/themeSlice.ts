import { createSlice } from "@reduxjs/toolkit";

interface ThemeType {
    theme: 'light' | 'dark';
};

const initialThemeState: ThemeType = {
    theme: 'dark',
}

const themeSlice = createSlice({
    name: 'theme',
    initialState: initialThemeState,
    reducers: {
        toggleTheme: (state) => {
            state.theme === 'dark'
                ?
                    state.theme = 'light'
                :
                    state.theme = 'dark'
        }
    }
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
import { colors, ColorScheme } from '@/constants/colors';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface ThemeState {
  isDark: boolean;
  theme: ColorScheme;
}

const initialState: ThemeState = {
  isDark: false,
  theme: colors.light,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<boolean>) => {
      state.isDark = action.payload;
      state.theme = action.payload ? colors.dark : colors.light;
    },
    toggleTheme: state => {
      state.isDark = !state.isDark;
      state.theme = state.isDark ? colors.dark : colors.light;
    },
  },
});

export const { setTheme, toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;

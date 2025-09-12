import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '@/types/models';

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  user: IUser | null;
  isAuthenticated: boolean;
}
const initialState: AuthState = {
  accessToken: null,
  refreshToken: null,
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{
        accessToken: string;
        refreshToken: string;
        user: IUser;
      }>,
    ) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.user = action.payload.user;
      state.isAuthenticated = true;
    },
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    setRefreshToken: (state, action: PayloadAction<string>) => {
      state.refreshToken = action.payload;
    },
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
    logout: state => {
      state.accessToken = null;
      state.isAuthenticated = false;
      state.refreshToken = null;
      state.user = null;
    },
  },
});

export const { login, setAccessToken, setRefreshToken, setUser, logout } =
  authSlice.actions;
export default authSlice.reducer;

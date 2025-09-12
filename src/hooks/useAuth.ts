import { useAppDispatch, useAppSelector } from "@/redux";
import { logout } from "@/redux/slices/authSlice";

export const useAuth = () => {
  const { accessToken, refreshToken, user } = useAppSelector(
    (state) => state.auth
  );
  const dispatch = useAppDispatch();
  const handelLogout = () => {
    dispatch(logout());
  };
  return {
    handelLogout,
    accessToken,
    refreshToken,
    user,
  };
};
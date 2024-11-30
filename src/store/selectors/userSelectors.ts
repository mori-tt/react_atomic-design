import { RootState } from "../store";

export const selectIsAdmin = (state: RootState) =>
  state.user.userInfo?.isAdmin ?? false;

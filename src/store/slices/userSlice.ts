import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = {
  userInfo: { isAdmin: boolean } | null;
};

const initialState: UserState = {
  userInfo: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<{ isAdmin: boolean }>) => {
      state.userInfo = action.payload;
    },
  },
});

export const { setUserInfo } = userSlice.actions;
export default userSlice.reducer;

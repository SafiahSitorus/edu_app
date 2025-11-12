import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUserProfile } from "./userThunks";

interface UserProfile {
  id: string;
  name: string;
  email: string;
}

interface UserState {
  profile: UserProfile | null;
  loading: boolean;
  error: string | null;
}


const initialState: UserState = {
  profile: null,
  loading: false,
  error: null,
};


const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.profile = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action: PayloadAction<UserProfile>) => {
        state.loading = false;
        state.profile = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});


export const { logoutUser } = userSlice.actions;
export default userSlice.reducer;

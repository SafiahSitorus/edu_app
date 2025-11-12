import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "@/services/api";
import type { AxiosError } from "axios";

export const fetchUserProfile = createAsyncThunk(
  "user/fetchProfile",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get("/user/profile");
      return res.data;
    } catch (error) {
      const err = error as AxiosError<{ message?: string }>;
      return rejectWithValue(err.response?.data?.message || "Failed to fetch user profile");
    }
  }
);
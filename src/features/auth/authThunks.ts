import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "@/services/api";
import type { AxiosError } from "axios";


export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const res = await api.post("/auth/login", credentials);
      return res.data.token;
    } catch (error) {
      const err = error as AxiosError<{ message?: string }>;
      return rejectWithValue(err.response?.data?.message || "Login failed");
    }
  }
);

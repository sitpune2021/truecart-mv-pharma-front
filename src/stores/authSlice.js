import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { verifyOtpAPI } from "../api/auth.api";
import { setToken, clearToken } from "../utils/tokenManager";

/**
 * ASYNC ACTION
 * Handles OTP verification + login
 */
export const verifyOtp = createAsyncThunk(
  "auth/verifyOtp",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await verifyOtpAPI(payload);
      setToken(res.data.token);   // 🔐 Save JWT securely
      return res.data.user;       // ✅ Return user to reducer
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

/**
 * AUTH SLICE
 */
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
    error: null
  },

  reducers: {
    logout: (state) => {
      state.user = null;
      clearToken();
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(verifyOtp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyOtp.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUser, login } from "../services/supabase/auth";

export const fetchLogin = createAsyncThunk(
  "auth/login",
  async function (credentials) {
    const request = await login(credentials);
    return request;
  }
);

export const fetchSession = createAsyncThunk("auth/session", async function () {
  const session = await getUser();
  return session;
});

const initialState = {
  authenticated: null,
  status: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetAuthState(state) {
      state.authenticated = null;
      state.error = null;
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLogin.fulfilled, (state) => {
        state.authenticated = true;
        state.status = "finished";
      })
      .addCase(fetchLogin.rejected, (state) => {
        state.status = "idle";
        state.error = true;
      })
      .addCase(fetchSession.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSession.fulfilled, (state) => {
        state.authenticated = true;
        state.status = "finished";
      })
      .addCase(fetchSession.rejected, (state) => {
        state.status = "idle";
        state.error = true;
      });
  },
});

export default authSlice.reducer;
export const { resetAuthState } = authSlice.actions;

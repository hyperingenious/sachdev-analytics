import { createSlice } from "@reduxjs/toolkit";
import { last300Squares } from "../../services/dashboard/filterSquareGraph";

const initialState = {
  three100Squares: last300Squares,
};

const filterSquareGraphSlice = createSlice({
  name: "filterSquareGraphSlice",
  initialState,
  reducers: {},
});

export default filterSquareGraphSlice.reducer;
export const { three100Squares } = filterSquareGraphSlice.actions;

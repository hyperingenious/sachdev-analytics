import { createSlice } from "@reduxjs/toolkit";
import { getLast5Month } from "../../helpers/helper";
import { growthDataHorizontalBarGraph5Months } from "../../services/dashboard/filterDataForBarGraph";

const initialState = {
  last5Months: getLast5Month(),
  selectedMonthIndex: 0,
  selectedMonthData: growthDataHorizontalBarGraph5Months[0], // default last Month
};

const horizontalBarGraphFilterSlice = createSlice({
  name: "horizontalBarGraphFilterSlice",
  initialState,
  reducers: {
    changeHorizontalBarGraphMonth(state, action) {
      state.selectedMonthIndex = action.payload;
      state.selectedMonthData =
        growthDataHorizontalBarGraph5Months[action.payload];
    },
  },
});

export default horizontalBarGraphFilterSlice.reducer;
export const { changeHorizontalBarGraphMonth } =
  horizontalBarGraphFilterSlice.actions;

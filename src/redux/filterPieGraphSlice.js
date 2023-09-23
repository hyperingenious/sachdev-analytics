import { createSlice } from "@reduxjs/toolkit";
import {
  last30DaysPieData,
  last7DaysPieData,
} from "../services/filterDataForPieGraph";

const initialState = {
  dataAsPerTime: last7DaysPieData,
  timeFilter: "7-day-time",
};

const pieGraphFilterSlice = createSlice({
  name: "pieGraphFilterSlice",
  initialState,
  reducers: {
    changePieDataAsPerTime(state, action) {
      if (action.payload === "7-day-time") {
        state.timeFilter = action.payload;
        state.dataAsPerTime = last7DaysPieData;
      }
      if (action.payload === "30-day-time") {
        state.timeFilter = action.payload;
        state.dataAsPerTime = last30DaysPieData;
      }
      //   if(action.payload === 'all-time'){
      //     state.timeFilter = action.payload;
      //     state._____
      //   }
    },
  },
});

export default pieGraphFilterSlice.reducer;
export const { changePieDataAsPerTime } = pieGraphFilterSlice.actions;

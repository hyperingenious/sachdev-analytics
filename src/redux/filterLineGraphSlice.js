import { createSlice } from "@reduxjs/toolkit";
import { growthDataAllTime, growthDataLast7Days, growthDataLastMonth } from "../services/filterData";

const initialState = {
  dataAsPerTime: growthDataAllTime,
  timeFilter: "all-time",
  combinationFilter: [1, 2, 3, 4, 5], //(default is false) 26 combinations total of 1,2,3,4,5
  individualStarFilter: false, //(default is false) 1 | 2 | 3 | 4 | 5
};

const lineGraphFilterSlice = createSlice({
  name: "lineGraphFilterSlice",
  initialState,
  reducers: {
    changeDataAsPerTime(state, action) {
      if (action.payload === "all-time") {
        state.timeFilter = action.payload;
        state.dataAsPerTime = growthDataAllTime;
      }
      if (action.payload === "7-day-time") {
        state.timeFilter = action.payload;
        state.dataAsPerTime = growthDataLast7Days;
      }
      if (action.payload === "30-day-time") {
        state.timeFilter = action.payload;
        state.dataAsPerTime = growthDataLastMonth;
      }
    },
    changeCombinationFilter(state, action) {
      state.individualStarFilter = false;
      state.combinationFilter = action.payload
        .split(",")
        .map((combo) => Number(combo));
    },
    changeIndividualStarFilter(state, action) {
      state.combinationFilter = false;
      state.individualStarFilter = action.payload;
    },
  },
});

export default lineGraphFilterSlice.reducer;
export const {
  changeDataAsPerTime,
  changeCombinationFilter,
  changeIndividualStarFilter,
} = lineGraphFilterSlice.actions;

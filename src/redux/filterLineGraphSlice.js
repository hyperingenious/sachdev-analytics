import { createSlice } from "@reduxjs/toolkit";
import { growthDataAllTime } from "../../data/remote";

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
      state.dataAsPerTime = action.payload.dataAsPerTime;
      state.timeFilter = action.payload.timeFilter;
    },
    changeCombinationFilter(state, action) {
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

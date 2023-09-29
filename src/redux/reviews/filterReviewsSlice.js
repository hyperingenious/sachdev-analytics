import { createSlice } from "@reduxjs/toolkit";
import { rawFromServer } from "../../config/app-data";
import {
  filterAllTimeData,
  filterLast30DayData,
  filterLast7DayData,
} from "../../services/reviews/filterReviewTime";
import { filterReviewRating } from "../../services/reviews/filterReviewRating";

const initialState = {
  reviewData: rawFromServer,
  timeFilter: "all-time", // all-time | 30-day-time | 7-day-time
  ratingFilter: 15, // 15 | 1 | 2 | 3 | 4 | 5
};

const filterReviewSlice = createSlice({
  name: "reviewFilterSlice",
  initialState,
  reducers: {
    changeReviewDataWithTime(state, action) {
      if (action.payload === "all-time") {
        state.timeFilter = "all-time";
        state.reviewData = filterAllTimeData(rawFromServer, state.ratingFilter);
      }

      if (action.payload === "30-day-time") {
        state.timeFilter = "30-day-time";
        state.reviewData = filterLast30DayData(
          rawFromServer,
          state.ratingFilter
        );
      }

      if (action.payload === "7-day-time") {
        state.timeFilter = "7-day-time";
        state.reviewData = filterLast7DayData(
          rawFromServer,
          state.ratingFilter
        );
      }
    },
    changeReviewDataWithRating(state, action) {
      state.timeFilter = action.payload;
      state.reviewData = filterReviewRating(
        rawFromServer,
        action.payload,
        state.timeFilter
      );
    },
  },
});

export default filterReviewSlice.reducer;
export const { changeReviewDataWithTime, changeReviewDataWithRating } =
  filterReviewSlice.actions;

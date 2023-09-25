import { configureStore } from "@reduxjs/toolkit";
import filterLineGraphSlice from "./filterLineGraphSlice";
import filterPieGraphSlice from "./filterPieGraphSlice";
import filterHorizontalBarGraphSlice from "./filterHorizontalBarGraphSlice";

const store = configureStore({
  reducer: {
    lineGraphFilter: filterLineGraphSlice,
    pieGraphFilter: filterPieGraphSlice,
    horizontalBarGraphFilter: filterHorizontalBarGraphSlice,
  },
});

export default store;

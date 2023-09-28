import { configureStore } from "@reduxjs/toolkit";
import filterLineGraphSlice from "./dashboard/filterLineGraphSlice";
import filterPieGraphSlice from "./dashboard/filterPieGraphSlice";
import filterHorizontalBarGraphSlice from "./dashboard/filterHorizontalBarGraphSlice";

const store = configureStore({
  reducer: {
    lineGraphFilter: filterLineGraphSlice,
    pieGraphFilter: filterPieGraphSlice,
    horizontalBarGraphFilter: filterHorizontalBarGraphSlice,
  },
});

export default store;

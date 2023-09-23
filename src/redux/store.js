import { configureStore } from "@reduxjs/toolkit";
import filterLineGraphSlice from "./filterLineGraphSlice";
import filterPieGraphSlice from "./filterPieGraphSlice";

const store = configureStore({
  reducer: {
    lineGraphFilter: filterLineGraphSlice,
    pieGraphFilter: filterPieGraphSlice,
  },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import filterLineGraphSlice from "./filterLineGraphSlice";

const store = configureStore({
  reducer: { lineGraphFilter: filterLineGraphSlice },
});

export default store;

import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppShell from "./pages/AppShell";
import Dashboard from "./pages/Dashbord";
import Reviews from "./pages/Reviews";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchReviewData } from "./redux/fetchReviewDataSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(
    function () {
      dispatch(fetchReviewData());
    },
    [dispatch]
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppShell />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

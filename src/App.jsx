import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchReviewData } from "./redux/fetchReviewDataSlice";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppShell from "./pages/AppShell";
import Dashboard from "./pages/Dashbord";
import Reviews from "./pages/Reviews";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ui/ProtectedRoute";

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
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <AppShell />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

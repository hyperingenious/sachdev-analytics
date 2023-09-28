import { useEffect } from "react";
import { starGrowthBarLast5Months } from "./services/dashboard/filterDataForBarGraph";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppShell from "./pages/AppShell";
import Dashboard from "./pages/Dashbord";
import Reviews from "./pages/Reviews";

function App() {
  useEffect(function () {
    starGrowthBarLast5Months();
  }, []);
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

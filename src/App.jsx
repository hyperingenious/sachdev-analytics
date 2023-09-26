import { useEffect } from "react";
import { starGrowthBarLast5Months } from "./services/filterDataForBarGraph";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppShell from "./pages/AppShell";
import Dashboard from "./pages/Dashbord";

function App() {
  useEffect(function () {
    starGrowthBarLast5Months();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppShell />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

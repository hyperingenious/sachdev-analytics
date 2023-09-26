import { useEffect } from "react";
import { starGrowthBarLast5Months } from "./services/filterDataForBarGraph";
import AppShell from "./pages/AppShell";

function App() {
  useEffect(function () {
    starGrowthBarLast5Months();
  }, []);
  return (
    // <div className="m-4">
    //   <LineGraph />
    //   <PieGraph />
    //   <HorizontalBarGraph />
    // </div>
    <AppShell/>
  );
}

export default App;

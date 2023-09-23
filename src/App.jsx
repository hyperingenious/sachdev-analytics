import { useEffect } from "react";
import HorizontalBarGraph from "./components/HorizontalBarGraph";
import LineGraph from "./components/LineGraph";
import PieGraph from "./components/PieGraph";
import { starGrowthBarLast5Months } from "./services/filterDataForBarGraph";

function App() {
  useEffect(function () {
    starGrowthBarLast5Months();
  }, []);
  return (
    <div className="m-4">
      <LineGraph />
      <PieGraph />
      <HorizontalBarGraph />
    </div>
  );
}

export default App;

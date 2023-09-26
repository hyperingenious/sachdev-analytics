import HorizontalBarGraph from "../components/dashboard/HorizontalBarGraph";
import LineGraph from "../components/dashboard/LineGraph";
import PieGraph from "../components/dashboard/PieGraph";
import StatsGrid from "../components/dashboard/StatsGrid";

function Dashbord() {
  return (
    <div>
      <StatsGrid/>
      <LineGraph />
      <HorizontalBarGraph />
      <PieGraph />
    </div>
  );
}

export default Dashbord;

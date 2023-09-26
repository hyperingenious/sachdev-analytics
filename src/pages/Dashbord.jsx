import HorizontalBarGraph from "../components/HorizontalBarGraph";
import LineGraph from "../components/LineGraph";
import PieGraph from "../components/PieGraph";

function Dashbord() {
  return (
    <div>
      <LineGraph />
      <HorizontalBarGraph />
      <PieGraph />
    </div>
  );
}

export default Dashbord;

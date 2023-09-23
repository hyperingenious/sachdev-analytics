import HorizontalBarGraph from "./components/HorizontalBarGraph";
import LineGraph from "./components/LineGraph";
import PieGraph from "./components/PieGraph";

function App() {
  return (
    <div className="m-4">
      <LineGraph />
      <PieGraph />
      <HorizontalBarGraph />
    </div>
  );
}

export default App;

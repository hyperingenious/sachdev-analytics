import { starGrowthLineLast7Days } from "./services/filterData";
import LineGraph from "./components/LineGraph";

function App() {
  starGrowthLineLast7Days();
  return <LineGraph />;
}

export default App;

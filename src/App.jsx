import { starGrowthLineLast7Days } from "../data/remote";
import LineGraph from "./components/LineGraph";

function App() {
  starGrowthLineLast7Days()
  return <LineGraph />;
}

export default App;

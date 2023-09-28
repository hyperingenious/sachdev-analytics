import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { colorArray, filterCombinations } from "../../config/app-data";
import { useDispatch, useSelector } from "react-redux";
import {
  changeCombinationFilter,
  changeDataAsPerTime,
  changeIndividualStarFilter,
} from "../../redux/filterLineGraphSlice";
import { Dropdown } from "../Dropdown";
import SegmentedButton from "../SegmentedButton";

function LineGraph() {
  const dispatch = useDispatch();
  const { combinationFilter, dataAsPerTime, individualStarFilter } =
    useSelector((store) => store.lineGraphFilter);

  return (
    <div style={{ marginTop: "var(--mantine-spacing-xl)" }}>
      <LineGraphFilterBar dispatch={dispatch} />
      <ResponsiveContainer height={200} width={"100%"}>
        <AreaChart data={dataAsPerTime}>
          <XAxis dataKey={"label"} />
          <YAxis unit={"%"} />
          <CartesianGrid strokeDasharray={4} />
          <Tooltip />
          {combinationFilter &&
            combinationFilter.map((combi) => (
              <Area
                key={combi}
                name={`${combi} Star`}
                dataKey={`avg_${combi}`}
                type={"monotone"}
                strokeWidth={2}
                fill={colorArray[combi - 1]}
                stroke={colorArray[combi - 1]}
                unit={"%"}
              />
            ))}
          {individualStarFilter && (
            <Area
              name={`${individualStarFilter} Star`}
              dataKey={`avg_${individualStarFilter}`}
              type={"monotone"}
              strokeWidth={2}
              fill={colorArray[individualStarFilter]}
              stroke={colorArray[individualStarFilter]}
              unit={"%"}
            />
          )}
          <Legend iconType="circle" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

function LineGraphFilterBar({ dispatch }) {
  return (
    <div
      style={{
        marginBottom: "var(--mantine-spacing-xs)",
        display: "flex",
        gap: "var(--mantine-spacing-xs)",
      }}
    >
      <Dropdown
        name={"Mix"}
        dropdownOptions={filterCombinations}
        argOptions={filterCombinations}
        onClick={(arg) => dispatch(changeCombinationFilter(arg))}
      />
      <Dropdown
        name={"Star"}
        dropdownOptions={[1, 2, 3, 4, 5]}
        argOptions={[1, 2, 3, 4, 5]}
        onClick={(arg) => dispatch(changeIndividualStarFilter(arg))}
      />
      <SegmentedButton onChange={(arg) => dispatch(changeDataAsPerTime(arg))} />
    </div>
  );
}

export default LineGraph;

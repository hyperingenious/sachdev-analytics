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
import { useState } from "react";
import { colorArray, filterCombinations } from "../../config/app-data";
import { useDispatch, useSelector } from "react-redux";
import {
  changeCombinationFilter,
  changeDataAsPerTime,
  changeIndividualStarFilter,
} from "../../redux/filterLineGraphSlice";
import { Dropdown } from "../Dropdown";
import { SegmentedControl } from "@mantine/core";

function LineGraph() {
  const dispatch = useDispatch();
  const { combinationFilter, dataAsPerTime, individualStarFilter } =
    useSelector((store) => store.lineGraphFilter);

  return (
    <>
      <LineGraphFilterBar dispatch={dispatch} />
      <ResponsiveContainer height={300} width={"100%"}>
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
    </>
  );
}

function LineGraphFilterBar({ dispatch }) {
  return (
    <>
      <Dropdown
        name={"Combinations"}
        dropdownOptions={filterCombinations}
        onClick={(arg) => dispatch(changeCombinationFilter(arg))}
      />
      <Dropdown
        name={"Star"}
        dropdownOptions={[1, 2, 3, 4, 5]}
        onClick={(arg) => dispatch(changeIndividualStarFilter(arg))}
      />

      <SegmentedControl
        fullWidth
        radius="md"
        data={["7D", "1M", "All time"]}
      />

      <button
        type="button"
        className="btn btn-danger"
        onClick={() => dispatch(changeDataAsPerTime("7-day-time"))}
      >
        7d
      </button>

      <button
        type="button"
        className="btn btn-danger"
        onClick={() => dispatch(changeDataAsPerTime("30-day-time"))}
      >
        1M
      </button>

      <button
        type="button"
        className="btn btn-danger"
        onClick={() => dispatch(changeDataAsPerTime("all-time"))}
      >
        All time
      </button>
    </>
  );
}

export default LineGraph;

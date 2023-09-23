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
import { useEffect, useState } from "react";
import { colorArray, filterCombinations } from "../config/app-data";
import { useDispatch, useSelector } from "react-redux";
import {
  changeCombinationFilter,
  changeDataAsPerTime,
  changeIndividualStarFilter,
} from "../redux/filterLineGraphSlice";
import { starDataForLast7Days } from "../services/filterDataForPieGraph";

function LineGraph() {
  const dispatch = useDispatch();
  const { combinationFilter, dataAsPerTime, individualStarFilter } =
    useSelector((store) => store.lineGraphFilter);

  useEffect(function () {
    starDataForLast7Days();
  }, []);

  return (
    <>
      <LineGraphFilterBar dispatch={dispatch} />
      <ResponsiveContainer  height={300} width={"100%"}>
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
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  return (
    <>
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => setToggle((toggle) => !toggle)}
        >
          Combinations
        </button>
        <button
          onClick={() => setToggle((toggle) => !toggle)}
          type="button"
          className="btn btn-danger dropdown-toggle dropdown-toggle-split"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span className="visually-hidden">Toggle Dropdown</span>
        </button>{" "}
        <ul
          className={`dropdown-menu ${toggle && "d-block"} position-absolute`}
          style={{ top: "1rem", maxHeight: "6rem", overflowY: "scroll" }}
        >
          {filterCombinations.map((filter) => (
            <li
              key={filter}
              onClick={() => dispatch(changeCombinationFilter(filter))}
            >
              <a className="dropdown-item" href="#">
                {filter}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => setToggle2((toggle) => !toggle)}
        >
          Star
        </button>
        <button
          onClick={() => setToggle2((toggle) => !toggle)}
          type="button"
          className="btn btn-danger dropdown-toggle dropdown-toggle-split"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span className="visually-hidden">Toggle Dropdown</span>
        </button>{" "}
        <ul
          className={`dropdown-menu ${toggle2 && "d-block"} position-absolute`}
          style={{ top: "1rem", maxHeight: "6rem", overflowY: "scroll" }}
        >
          <li onClick={() => dispatch(changeIndividualStarFilter(1))}>
            <a className="dropdown-item" href="#">
              1
            </a>
          </li>
          <li onClick={() => dispatch(changeIndividualStarFilter(2))}>
            <a className="dropdown-item" href="#">
              2
            </a>
          </li>
          <li onClick={() => dispatch(changeIndividualStarFilter(3))}>
            <a className="dropdown-item" href="#">
              3
            </a>
          </li>
          <li onClick={() => dispatch(changeIndividualStarFilter(4))}>
            <a className="dropdown-item" href="#">
              4
            </a>
          </li>
          <li onClick={() => dispatch(changeIndividualStarFilter(5))}>
            <a className="dropdown-item" href="#">
              5
            </a>
          </li>
        </ul>
      </div>

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

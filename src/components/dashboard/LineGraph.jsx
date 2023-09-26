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
import {  useState } from "react";
import { colorArray, filterCombinations } from "../../config/app-data";
import { useDispatch, useSelector } from "react-redux";
import {
  changeCombinationFilter,
  changeDataAsPerTime,
  changeIndividualStarFilter,
} from "../../redux/filterLineGraphSlice";

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
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  return (
    <>
      <div className="dropdown">
        <button
          onClick={() => setToggle((toggle) => !toggle)}
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Combinations
        </button>
        <ul
          className={`dropdown-menu ${toggle && "d-block"}`}
          style={{ maxHeight: "6rem", overflowY: "scroll" }}
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
      <div className="dropdown d-inline">
        <button
          onClick={() => setToggle2((toggle) => !toggle)}
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Star{" "}
        </button>
        <ul className={`dropdown-menu ${toggle2 && "d-block"}`}>
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

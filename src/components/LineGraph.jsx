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
import { colorArray, filterCombinations } from "../config/customData";
import { useDispatch, useSelector } from "react-redux";
import {
  changeCombinationFilter,
  changeIndividualStarFilter,
} from "../redux/filterLineGraphSlice";

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
          <YAxis  unit={"%"} />
          <CartesianGrid strokeDasharray={4} />
          <Tooltip />
          {combinationFilter &&
            combinationFilter.map((combi) => (
              <>
                <Area
                  name={`${combi} Star`}
                  dataKey={`avg_${combi}`}
                  type={"monotone"}
                  strokeWidth={2}
                  fill={colorArray[combi-1]}
                  stroke={colorArray[combi-1]}
                  unit={"%"}
                />
              </>
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
          {/* <Area
            stroke="black"
            name="2 Star"
            dataKey="avg_2"
            type={"monotone"}
            strokeWidth={2}
            fill="black"
            unit={"%"}
          />
          <Area
            stroke="violet"
            name="2 Star"
            dataKey="avg_3"
            type={"monotone"}
            strokeWidth={2}
            fill="violet"
            unit={"%"}
          />
          <Area
            stroke="orange"
            name="4 Star"
            dataKey="avg_4"
            type={"monotone"}
            strokeWidth={2}
            fill="orange"
            unit={"%"}
          />
          <Area
            stroke="blue"
            name="5 Star"
            dataKey="avg_5"
            type={"monotone"}
            strokeWidth={2}
            fill="blue"
            unit={"%"}
          /> */}
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
            <>
              <li onClick={() => dispatch(changeCombinationFilter(filter))}>
                <a className="dropdown-item" href="#">
                  {filter}
                </a>
              </li>
            </>
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

      <button type="button" className="btn btn-danger">
        7d
      </button>

      <button type="button" className="btn btn-danger">
        1M
      </button>

      <button type="button" className="btn btn-danger">
        All time
      </button>
    </>
  );
}

export default LineGraph;

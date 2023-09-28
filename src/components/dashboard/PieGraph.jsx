import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PieChart, Pie, Legend, Tooltip, Cell } from "recharts";
import { changePieDataAsPerTime } from "../../redux/filterPieGraphSlice";
import { Dropdown } from "../Dropdown";
import { changeDataAsPerTime } from "../../redux/filterLineGraphSlice";

function PieGraph() {
  const [toggle, setToggle] = useState(false);
  const { dataAsPerTime, timeFilter } = useSelector(
    (store) => store.pieGraphFilter
  );
  const dispatch = useDispatch();

  // Define an array of colors for sections
  const sectionColors = ["#6d28d9", "#be123c", "#0088FE", "#059669", "#eab308"];

  return (
    <>
      <Dropdown
        name={"Data"}
        dropdownOptions={["7 Days", "Last Month", "All time"]}
        argOptions={["7-day-time", "30-day-time", "all-time"]}
        onClick={(arg) => dispatch(changePieDataAsPerTime(arg))}
      />
      {/* <div className="dropdown">
        <button
          onClick={() => setToggle((toggle) => !toggle)}
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Data: {timeFilter}
        </button>
        <ul className={`dropdown-menu ${toggle ? "d-block" : ""}`}>
          <li onClick={() => dispatch(changePieDataAsPerTime("7-day-time"))}>
            <a className="dropdown-item" href="#">
              7 Days
            </a>
          </li>
          <li onClick={() => dispatch(changePieDataAsPerTime("30-day-time"))}>
            <a className="dropdown-item" href="#">
              Last Month
            </a>
          </li>
          <li onClick={() => dispatch(changePieDataAsPerTime("all-time"))}>
            <a className="dropdown-item" href="#">
              All time
            </a>
          </li>
        </ul>
      </div> */}
      <PieChart width={730} height={300}>
        {/* First Pie Chart */}
        <Pie
          data={dataAsPerTime}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={120}
          innerRadius={70}
        >
          {dataAsPerTime.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={sectionColors[index % sectionColors.length]}
            />
          ))}
        </Pie>
        <Tooltip />
        <Legend iconType="circle" />
      </PieChart>
    </>
  );
}

export default PieGraph;

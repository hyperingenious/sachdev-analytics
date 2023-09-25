import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Bar, BarChart, Tooltip, Legend, XAxis, YAxis } from "recharts";
import { changeHorizontalBarGraphMonth } from "../redux/filterHorizontalBarGraphSlice";

function HorizontalBarGraph() {
  const [toggle, setToggle] = useState(false);
  const { selectedMonthData, selectedMonthIndex, last5Months } = useSelector(
    (store) => store.horizontalBarGraphFilter
  );
  const dispatch = useDispatch();
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
          Month: {last5Months[selectedMonthIndex]}
        </button>
        <ul className={`dropdown-menu ${toggle && "d-block"}`}>
          {last5Months.map((month, index) => (
            <>
              <li className="cursor-pointer" onClick={() => dispatch(changeHorizontalBarGraphMonth(index))}>
                <a className="dropdown-item cursor-pointer" href="##">
                  {month}
                </a>
              </li>
            </>
          ))}
        </ul>
      </div>
      <BarChart
        width={730}
        height={250}
        data={selectedMonthData}
        layout="vertical"
      >
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" />
        <Tooltip />
        <Legend />
        <Bar dataKey="rating" fill="#8884d8" />
      </BarChart>
    </>
  );
}

export default HorizontalBarGraph;

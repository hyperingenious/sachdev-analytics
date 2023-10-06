import { useDispatch, useSelector } from "react-redux";
import {
  PieChart,
  Pie,
  Legend,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from "recharts";
import { changePieDataAsPerTime } from "../../redux/dashboard/filterPieGraphSlice";
import { Dropdown } from "../Dropdown";
import { Group, Text, Title } from "@mantine/core";

function PieGraph() {
  const { dataAsPerTime } = useSelector((store) => store.pieGraphFilter);
  const dispatch = useDispatch();

  // Define an array of colors for sections
  const sectionColors = ["#6d28d9", "#be123c", "#0088FE", "#059669", "#eab308"];

  return (
    <div>
      <Group justify="space-between" w={'100%'}>
        <Text c={"dimmed"}>PieChart</Text>

        <Dropdown
          name={"Data"}
          dropdownOptions={["7 Days", "Last Month", "All time"]}
          argOptions={["7-day-time", "30-day-time", "all-time"]}
          onClick={(arg) => dispatch(changePieDataAsPerTime(arg))}
        />
      </Group>
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
      <ResponsiveContainer width={230} height={200}>
        <PieChart>
          {/* First Pie Chart */}
          <Pie margin={{ right: 20 }}
            data={dataAsPerTime}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={70}
            innerRadius={45}
          >
            {dataAsPerTime.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={sectionColors[index % sectionColors.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            iconType="circle"
            layout="vertical"
            align="right"
            verticalAlign="middle"
            iconSize={7}
            wrapperStyle={{ fontSize: "12px" , marginLeft: '1rem'}}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PieGraph;

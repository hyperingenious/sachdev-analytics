import { useDispatch, useSelector } from "react-redux";
import {
  Bar,
  BarChart,
  Tooltip,
  Legend,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import { changeHorizontalBarGraphMonth } from "../../redux/dashboard/filterHorizontalBarGraphSlice";
import { Dropdown } from "../Dropdown";

function HorizontalBarGraph() {
  const { selectedMonthData, last5Months } = useSelector(
    (store) => store.horizontalBarGraphFilter
  );
  const dispatch = useDispatch();
  return (
    <div style={{ marginTop: "var(--mantine-spacing-md)" }}>
      <Dropdown
        name={"Month"}
        dropdownOptions={last5Months}
        argOptions={[0, 1, 2, 3, 4]}
        onClick={(arg) => dispatch(changeHorizontalBarGraphMonth(arg))}
      />
      <ResponsiveContainer minWidth={270} width={"90%"} height={270}>
        <BarChart data={selectedMonthData} layout="vertical">
          <XAxis
            tick={{ fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            type="number"
          />
          <YAxis
            tick={{ fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            dataKey="name"
            type="category"
          />
          <Tooltip />
          <Legend />
          <Bar dataKey="rating" fill="#8884d8" barSize={20} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default HorizontalBarGraph;

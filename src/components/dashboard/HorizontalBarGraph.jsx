import { useDispatch, useSelector } from "react-redux";
import {
  Bar,
  BarChart,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import { changeHorizontalBarGraphMonth } from "../../redux/dashboard/filterHorizontalBarGraphSlice";
import { Dropdown } from "../Dropdown";
import { Group, Text } from "@mantine/core";


function HorizontalBarGraph() {
  const { selectedMonthData, last5Months } = useSelector(
    (store) => store.horizontalBarGraphFilter
  );
  const dispatch = useDispatch();
  return (
    <div>
      <Group justify="space-between" w={"100%"}>
        <Text c={"dimmed"}>BarGraph</Text>
        <Dropdown
          name={"Month"}
          dropdownOptions={last5Months}
          argOptions={[0, 1, 2, 3, 4]}
          onClick={(arg) => dispatch(changeHorizontalBarGraphMonth(arg))}
        />
      </Group>

      <ResponsiveContainer width={230} height={180}>
        <BarChart
          data={selectedMonthData}
          layout="vertical"
          barCategoryGap={2}
          margin={{ top: 25, right: 20, bottom: 5, left: -16 }}
        >
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
          {/* <Legend /> */}
          <Bar
            dataKey="rating"
            fill="#00b385"
            barSize={13}
            barGap={2}
            radius={15}
            
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default HorizontalBarGraph;

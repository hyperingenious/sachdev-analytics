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
import { useEffect, useState } from "react";

function HorizontalBarGraph() {
  const { selectedMonthData, last5Months } = useSelector(
    (store) => store.horizontalBarGraphFilter
  );
  const dispatch = useDispatch();

  const [hBarDimensions, setHBarDimensions] = useState({
    width: 230,
    height: 180,
  });

  useEffect(
    function () {
      window.innerWidth > 600
        ? setHBarDimensions({ width: 290, height: 200 })
        : setHBarDimensions({ width: 230, height: 180 });
    },
    [setHBarDimensions]
  );

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

      <ResponsiveContainer
        width={hBarDimensions.width}
        height={hBarDimensions.height}
      >
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
            barGap={3}
            radius={15}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default HorizontalBarGraph;

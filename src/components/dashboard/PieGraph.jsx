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
import { Group, Text } from "@mantine/core";
import { useEffect, useState } from "react";

function PieGraph() {
  // Define an array of colors for sections
  const sectionColors = ["#6d28d9", "#be123c", "#0088FE", "#059669", "#eab308"];

  const dispatch = useDispatch();
  const { dataAsPerTime } = useSelector((store) => store.pieGraphFilter);

  const [pieRadius, setPieRadius] = useState({
    innerRadius: 0,
    outerRadius: 0,
  });
  console.log(pieRadius);

  useEffect(
    function () {
      if (window.innerWidth < 600) {
        setPieRadius({ innerRadius: 55, outerRadius: 85 });
      } else {
        setPieRadius({ innerRadius: 45, outerRadius: 70 });
      }
    },
    [setPieRadius]
  );

  return (
    <div>
      <Group justify="space-between" w={"100%"}>
        <Text c={"dimmed"}>PieChart</Text>
        <Dropdown
          name={"Data"}
          dropdownOptions={["7 Days", "Last Month", "All time"]}
          argOptions={["7-day-time", "30-day-time", "all-time"]}
          onClick={(arg) => dispatch(changePieDataAsPerTime(arg))}
        />
      </Group>

      <ResponsiveContainer width={"100%"} height={180}>
        <PieChart>
          {/* First Pie Chart */}
          <Pie
            margin={{ right: 20 }}
            data={dataAsPerTime}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={pieRadius.innerRadius}
            outerRadius={pieRadius.outerRadius}
            // outerRadius={85}
            // innerRadius={55}
            stroke="none"
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
            wrapperStyle={{ fontSize: "12px", marginLeft: "1rem" }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PieGraph;

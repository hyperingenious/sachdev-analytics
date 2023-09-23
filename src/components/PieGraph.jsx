import { useSelector } from "react-redux";
import { PieChart, Pie, Legend, Tooltip, Cell } from "recharts";

function PieGraph() {
    const {dataAsPerTime}= useSelector(store=> store.pieGraphFilter)

  // Define an array of colors for sections
  const sectionColors = [

    "#6d28d9",
    "#be123c",
    "#0088FE",
    "#059669",
    "#eab308",
  ];

  return (
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
  );
}

export default PieGraph;

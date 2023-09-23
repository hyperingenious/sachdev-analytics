import { PieChart, Pie, Legend, Tooltip, Cell } from "recharts";

function PieGraph() {
  const data01 = [
    {
      name: "Group A",
      value: 400,
    },
    {
      name: "Group B",
      value: 300,
    },
    {
      name: "Group C",
      value: 300,
    },
    {
      name: "Group D",
      value: 200,
    },
  ];

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
        data={data01}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={120}
        innerRadius={70}
      >
        {data01.map((entry, index) => (
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

import {
  Bar,
  BarChart,
  Tooltip,
  CartesianGrid,
  Legend,
  XAxis,
  YAxis,
} from "recharts";

function HorizontalBarGraph() {
  const data = [
    {
      name: "1 Star",
      pv: 9800,
    },
    {
      name: "2 Star",
      pv: 3908,
    },
    {
      name: "3 Star",
      pv: 1890,
    },
    {
      name: "4 Star",
      pv: 3800,
    },
    {
      name: "5 Star",
      pv: 3490,
    },
  ];

  return (
    <BarChart width={730} height={250} data={data} layout="vertical">
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis type="number" />
      <YAxis dataKey="name" type="category" />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" fill="#8884d8" />
    </BarChart>
  );
}

export default HorizontalBarGraph;

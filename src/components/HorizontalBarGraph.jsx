import {
  Bar,
  BarChart,
  Tooltip,
  Legend,
  XAxis,
  YAxis,
} from "recharts";

function HorizontalBarGraph() {
  const data = [
    {
      name: "1 Star",
      rating: 9800,
    },
    {
      name: "2 Star",
      rating: 3908,
    },
    {
      name: "3 Star",
      rating: 1890,
    },
    {
      name: "4 Star",
      rating: 3800,
    },
    {
      name: "5 Star",
      rating: 3490,
    },
  ];

  return (
    <BarChart width={730} height={250} data={data} layout="vertical">
      <XAxis type="number" />
      <YAxis dataKey="name" type="category" />
      <Tooltip />
      <Legend />
      <Bar dataKey="rating" fill="#8884d8"  />
    </BarChart>
  );
}

export default HorizontalBarGraph;

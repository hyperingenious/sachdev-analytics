import { rawFromServer } from "../config/app-data";

export function starPieDataForLast7Days() {
  const date7DaysAgo = new Date(new Date().setDate(new Date().getDate() - 7));

  const fd = rawFromServer.filter(
    (data) => new Date(data.created_at) >= date7DaysAgo
  );

  const finalPieData7Days = [
    { name: "1 Star", value: 0 },
    { name: "2 Star", value: 0 },
    { name: "3 Star", value: 0 },
    { name: "4 Star", value: 0 },
    { name: "5 Star", value: 0 },
  ];

  fd.reduce((acc, current) => {
    acc[current.rating - 1].value += current.rating;
    return acc;
  }, finalPieData7Days);

  return finalPieData7Days;
}

export const last7DaysPieData = starPieDataForLast7Days();

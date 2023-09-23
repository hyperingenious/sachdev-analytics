import { rawFromServer } from "../config/app-data";

export function starPieDataForLast7Days() {
  const date7DaysAgo = new Date(new Date().setDate(new Date().getDate() - 7));

  const fd = rawFromServer.filter(
    (data) => new Date(data.created_at) >= date7DaysAgo
  );

  const finalPieData7Days = [
    { name: "Star 1", value: 0 },
    { name: "Star 2", value: 0 },
    { name: "Star 3", value: 0 },
    { name: "Star 4", value: 0 },
    { name: "Star 5", value: 0 },
  ];

  fd.reduce((acc, current) => {
    acc[current.rating - 1].value += current.rating;
    return acc;
  }, finalPieData7Days);

  return finalPieData7Days;
}

export const last7DaysPieData = starPieDataForLast7Days();

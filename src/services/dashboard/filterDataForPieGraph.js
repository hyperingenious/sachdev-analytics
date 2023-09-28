import { rawFromServer } from "../../config/app-data";

export function starPieDataForLast7Days() {
  const date7DaysAgo = new Date(new Date().setDate(new Date().getDate() - 7));

  const filterDataAsPerDate = rawFromServer.filter(
    (data) => new Date(data.created_at) >= date7DaysAgo
  );

  const finalPieData7Days = [
    { name: "1 Star", value: 0 },
    { name: "2 Star", value: 0 },
    { name: "3 Star", value: 0 },
    { name: "4 Star", value: 0 },
    { name: "5 Star", value: 0 },
  ];

  filterDataAsPerDate.reduce((acc, current) => {
    acc[current.rating - 1].value += current.rating;
    return acc;
  }, finalPieData7Days);

  return finalPieData7Days;
}

export function starPieDataForLast30Days() {
  const date30DaysAgo = new Date(new Date().setDate(new Date().getDate() - 30));

  const filterDataAsPerDate = rawFromServer.filter(
    (data) => new Date(data.created_at) >= date30DaysAgo
  );

  const finalPieData30Days = [
    { name: "1 Star", value: 0 },
    { name: "2 Star", value: 0 },
    { name: "3 Star", value: 0 },
    { name: "4 Star", value: 0 },
    { name: "5 Star", value: 0 },
  ];

  filterDataAsPerDate.reduce((acc, current) => {
    acc[current.rating - 1].value += current.rating;
    return acc;
  }, finalPieData30Days);

  return finalPieData30Days;
}

function starPieDataForLastAllDays() {
  const finalPieDataAllTime = [
    { name: "1 Star", value: 0 },
    { name: "2 Star", value: 0 },
    { name: "3 Star", value: 0 },
    { name: "4 Star", value: 0 },
    { name: "5 Star", value: 0 },
  ];

  rawFromServer.reduce((acc, current) => {
    acc[current.rating - 1].value += current.rating;
    return acc;
  }, finalPieDataAllTime);

  return finalPieDataAllTime;
}

export const last7DaysPieData = starPieDataForLast7Days();
export const last30DaysPieData = starPieDataForLast30Days();
export const lastAllDaysPieData = starPieDataForLastAllDays();

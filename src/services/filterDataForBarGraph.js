import { rawFromServer } from "../config/app-data";

export function starGrowthBarLast5Months() {
  const accLastMonth = [0, 0, 0, 0, 0];
  const accLastSecondMonth = [0, 0, 0, 0, 0];
  const accLastThirdMonth = [0, 0, 0, 0, 0];
  const accLastFourthMonth = [0, 0, 0, 0, 0];
  const accLastFifthMonth = [0, 0, 0, 0, 0];

  // Last Month
  const lastMonthStartingDate = new Date(
    new Date().setDate(new Date().getDate() - new Date().getDate())
  );
  const lastMonthData = rawFromServer
    .filter((data) => new Date(data.created_at) > lastMonthStartingDate)
    .reduce((acc, curr) => {
      acc[curr.rating - 1]++;
      return acc;
    }, accLastMonth);

  // Last Second Month
  const lastSecondMonthStartingDate = new Date(
    new Date().setDate(
      lastMonthStartingDate.getDate() - lastMonthStartingDate.getDate() - 29
    )
  );
  const lastSecondMonthData = rawFromServer
    .filter(
      (data) =>
        new Date(data.created_at) >= lastSecondMonthStartingDate &&
        new Date(data.created_at) < lastMonthStartingDate
    )
    .reduce((acc, curr) => {
      acc[curr.rating - 1]++;
      return acc;
    }, accLastSecondMonth);

  // Last Third Month
  const lastThirdMonthStartingDate = new Date(
    new Date().setDate(
      lastSecondMonthStartingDate.getDate() -
        lastMonthStartingDate.getDate() -
        29
    )
  );
  const lastThirdMonthData = rawFromServer
    .filter(
      (data) =>
        new Date(data.created_at) >= lastThirdMonthStartingDate &&
        new Date(data.created_at) < lastSecondMonthStartingDate
    )
    .reduce((acc, curr) => {
      acc[curr.rating - 1]++;
      return acc;
    }, accLastThirdMonth);

  // Last fourth Month
  const lastFourthMonthStartingDate = new Date(
    new Date().setDate(
      lastMonthStartingDate.getDate() - lastMonthStartingDate.getDate() - 90
    )
  );
  const lastFourthMonthData = rawFromServer
    .filter(
      (data) =>
        new Date(data.created_at) >= lastFourthMonthStartingDate &&
        new Date(data.created_at) < lastThirdMonthStartingDate
    )
    .reduce((acc, curr) => {
      acc[curr.rating - 1]++;
      return acc;
    }, accLastFourthMonth);

  // Last Fifth Month
  const lastFifthMonthStartingDate = new Date(
    new Date().setDate(
      lastMonthStartingDate.getDate() - lastMonthStartingDate.getDate() - 120
    )
  );
  const lastFifthMonthData = rawFromServer
    .filter(
      (data) =>
        new Date(data.created_at) >= lastFifthMonthStartingDate &&
        new Date(data.created_at) < lastFourthMonthStartingDate
    )
    .reduce((acc, curr) => {
      acc[curr.rating - 1]++;
      return acc;
    }, accLastFifthMonth);

  return [
    lastMonthData,
    lastSecondMonthData,
    lastThirdMonthData,
    lastFourthMonthData,
    lastFifthMonthData,
  ];
}

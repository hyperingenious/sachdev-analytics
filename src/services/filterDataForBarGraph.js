import { rawFromServer } from "../config/app-data";

export function starGrowthBarLast5Months() {
  const initializeAccArray = () => [0, 0, 0, 0, 0];

  const accLastMonth = initializeAccArray();
  const accLastSecondMonth = initializeAccArray();
  const accLastThirdMonth = initializeAccArray();
  const accLastFourthMonth = initializeAccArray();
  const accLastFifthMonth = initializeAccArray();

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

  const theFinalArray = [
    lastMonthData.map((data, index) => {
      return { name: `${index + 1} Star`, rating: data };
    }),
    lastSecondMonthData.map((data, index) => {
      return { name: `${index + 1} Star`, rating: data };
    }),
    lastThirdMonthData.map((data, index) => {
      return { name: `${index + 1} Star`, rating: data };
    }),
    lastFourthMonthData.map((data, index) => {
      return { name: `${index + 1} Star`, rating: data };
    }),
    lastFifthMonthData.map((data, index) => {
      return { name: `${index + 1} Star`, rating: data };
    }),
  ];

  return theFinalArray;
}

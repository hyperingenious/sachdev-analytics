import { rawFromServer } from "../config/app-data";

export function starGrowthBarLast5Months() {
  const lastMonthStartingDate = new Date(
    new Date().setDate(new Date().getDate() - new Date().getDate())
  );
  const lastMonthData = rawFromServer.filter(
    (data) => new Date(data.created_at) > lastMonthStartingDate
  );

  const lastSecondMonthStartingDate = new Date(
    new Date().setDate(
      lastMonthStartingDate.getDate() - lastMonthStartingDate.getDate() - 29
    )
  );
  const lastSecondMonthData = rawFromServer.filter(
    (data) =>
      new Date(data.created_at) >= lastSecondMonthStartingDate &&
      new Date(data.created_at) < lastMonthStartingDate
  );

  const lastThirdMonthStartingDate = new Date(
    new Date().setDate(
      lastSecondMonthStartingDate.getDate() -
        lastMonthStartingDate.getDate() -
        29
    )
  );
  const lastThirdMonthData = rawFromServer.filter(
    (data) =>
      new Date(data.created_at) >= lastThirdMonthStartingDate &&
      new Date(data.created_at) < lastSecondMonthStartingDate
  );

  const lastFourthMonthStartingDate = new Date(
    new Date().setDate(
      lastMonthStartingDate.getDate() - lastMonthStartingDate.getDate() - 90
    )
  );
  const lastFourthMonthData = rawFromServer.filter(
    (data) =>
      new Date(data.created_at) >= lastFourthMonthStartingDate &&
      new Date(data.created_at) < lastThirdMonthStartingDate
  );

  const lastFifthMonthStartingDate = new Date(
    new Date().setDate(
      lastMonthStartingDate.getDate() - lastMonthStartingDate.getDate() - 120
    )
  );
  const lastFifthMonthData = rawFromServer.filter(
    (data) =>
      new Date(data.created_at) >= lastFifthMonthStartingDate &&
      new Date(data.created_at) < lastFourthMonthStartingDate
  );

  console.log([
    lastMonthData,
    lastSecondMonthData,
    lastThirdMonthData,
    lastFourthMonthData,
    lastFifthMonthData,
  ]);

  return [
    lastMonthData,
    lastSecondMonthData,
    lastThirdMonthData,
    lastFourthMonthData,
    lastFifthMonthData,
  ];
}

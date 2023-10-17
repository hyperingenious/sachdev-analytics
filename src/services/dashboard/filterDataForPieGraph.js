export function starPieDataForLast7Days(rawFromServer) {
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

export function starPieDataForLast30Days(rawFromServer) {
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
    acc[current.rating - 1].value += 1;
    return acc;
  }, finalPieData30Days);
  return finalPieData30Days;
}

export function starPieDataForLastAllDays(rawFromServer) {
  const finalPieDataAllTime = [
    { name: "1 Star", value: 0 },
    { name: "2 Star", value: 0 },
    { name: "3 Star", value: 0 },
    { name: "4 Star", value: 0 },
    { name: "5 Star", value: 0 },
  ];

  for (let i = 0; i < rawFromServer.length; i++) {
    finalPieDataAllTime[rawFromServer[i].rating - 1].value += 1;
  }

  console.log(finalPieDataAllTime);

  return finalPieDataAllTime;
}

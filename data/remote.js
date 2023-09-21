import { monthNames, rawFromServer } from "../src/config/customData";

// average rating "all time" of all stars
function starGrowthLineAllTime() {
  let acc = [0, 0, 0, 0, 0];
  const growthRawData = rawFromServer.map((graph, index) => {
    acc[graph.rating - 1]++;

    const label = `${monthNames[
      new Date(graph.created_at).getMonth()
    ].substring(0, 3)} ${new Date(graph.created_at)
      .getFullYear()
      .toString()
      .slice(-2)}`;

    return {
      label,
      avg_1: ((acc[0] / (index + 1)) * 100).toFixed(0),
      avg_2: ((acc[1] / (index + 1)) * 100).toFixed(0),
      avg_3: ((acc[2] / (index + 1)) * 100).toFixed(0),
      avg_4: ((acc[3] / (index + 1)) * 100).toFixed(0),
      avg_5: ((acc[4] / (index + 1)) * 100).toFixed(0),
      ...graph,
    };
  });

  // storing all the uniques objects
  const uniqueData = {};

  growthRawData.forEach((item) => {
    const uniqueId = `${new Date(item.created_at).getMonth()}-${new Date(
      item.created_at
    ).getFullYear()}`;

    if (!uniqueData[uniqueId]) uniqueData[uniqueId] = item;
  });
  console.log(Object.values(uniqueData));
  // converting the uniques object in to an array
  return Object.values(uniqueData);
}

// 1 filter the date ki vahi aaye jahan sirf date (todaydate-7=<ho)
// 2 after filtering insert them into the object

// average rating of last **7 days**
export function starGrowthLineLast7Days() {
  const presentDateMinus7Days = new Date(
    new Date().setDate(new Date().getDate() - 7)
  );

  const uniqueData = {};

  rawFromServer
    .filter((data) => new Date(data.created_at) >= presentDateMinus7Days)
    .forEach((filteredData) => {
      // Making a unqiue id
      const uniqueId = `${new Date(
        filteredData.created_at
      ).getMonth()}-${new Date(filteredData.created_at).getFullYear()}`;

      if (!uniqueData[uniqueId]) uniqueData[uniqueId] = filteredData;
    });

  console.log(Object.values(uniqueData));
  return Object.values(uniqueData);
}

export const growthDataAllTime = starGrowthLineAllTime();
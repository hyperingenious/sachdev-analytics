import { monthNames, rawFromServer } from "../src/config/customData";

// average rating "all time" of all stars
function starGrowthLineAllTime() {
  let acc = [0, 0, 0, 0, 0];

  const growthRawData = rawFromServer.map((graph, index) => {
    if (graph.rating !== 0) acc[graph.rating - 1]++;

    // making date label for each rating like : Nov 23
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

  // converting the uniques object in to an array
  return Object.values(uniqueData);
}

// average rating of last **7 days**
export function starGrowthLineLast7Days() {
  const presentDateMinus7Days = new Date(
    new Date().setDate(new Date().getDate() - 7)
  );

  // filtering data of last 7 days
  const filteredRawData = rawFromServer.filter(
    (data) => new Date(data.created_at) >= presentDateMinus7Days
  );

  const acc = [0, 0, 0, 0, 0];

  const growthData = filteredRawData.map((data, index) => {
    if (data.rating !== 0) acc[data.rating - 1]++;
    // making date label for each rating like : Nov 23
    const label = `${new Date(data.created_at).getDate()} ${monthNames[
      new Date(data.created_at).getMonth()
    ].substring(0, 3)}`;
    return {
      label,
      avg_1: ((acc[0] / (index + 1)) * 100).toFixed(0),
      avg_2: ((acc[1] / (index + 1)) * 100).toFixed(0),
      avg_3: ((acc[2] / (index + 1)) * 100).toFixed(0),
      avg_4: ((acc[3] / (index + 1)) * 100).toFixed(0),
      avg_5: ((acc[4] / (index + 1)) * 100).toFixed(0),
      ...data,
    };
  });

  const uniqueData = {};

  growthData.forEach((filteredData) => {
    // Making a unqiue id
    const uniqueId = `${new Date(filteredData.created_at).getDate()}-${new Date(
      filteredData.created_at
    ).getMonth()}`;
    if (!uniqueData[uniqueId]) uniqueData[uniqueId] = filteredData;
  });

  return Object.values(uniqueData);
}
console.log(starGrowthLineLast7Days());

export const growthDataAllTime = starGrowthLineAllTime();
export const growthDataLast7Days = starGrowthLineLast7Days();

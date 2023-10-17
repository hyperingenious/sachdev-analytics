import { todayMinusWhat } from "../../helpers/helper";

function filteredDataAsPerTime(data, timeFilter) {
  const todayMinus30Days = todayMinusWhat(30);
  const todayMinus7Days = todayMinusWhat(7);

  if (timeFilter === "all-time") {
    return data;
  }
  if (timeFilter === "30-day-time") {
    return data.filter((data) => new Date(data.created_at) >= todayMinus30Days);
  }
  if (timeFilter === "7-day-time") {
    return data.filter((data) => new Date(data.created_at) >= todayMinus7Days);
  }

  throw Error("Given Argument is wrong");
}

export function filterReviewRating(allTimeData, ratingFilter, timeFilter) {
  const filteredDataOnTime = filteredDataAsPerTime(allTimeData, timeFilter);

  if (ratingFilter === 15) {
    return filteredDataOnTime;
  }
  
  const filterAsPerRating = filteredDataOnTime.filter(
    (data) => data.rating === ratingFilter
  );

  return filterAsPerRating;
}

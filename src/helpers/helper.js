import { monthNames } from "../config/app-data";

/**
 * Calculates the name of the last 5 months
 * @returns Array containing names of the last 5 months inclusively
 */
export function getLast5Month() {
  let today = new Date();
  const last5Months = [];

  for (let i = 0; i < 5; i++) {
    // Pushing monthname to an array
    last5Months.push(monthNames[today.getMonth()]);

    // Subtract 1 month from current month
    today.setMonth(today.getMonth() - 1);
  }

  return last5Months;
}

export function todayMinusWhat(daysBack) {
  const today = new Date();
  const pastDate = new Date(today.setDate(today.getDate() - daysBack));

  return pastDate;
}

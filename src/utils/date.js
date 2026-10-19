export function calculateDuration(startDate, endDate = null) {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  let totalMonths =
    (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());

  if (end.getDate() < start.getDate()) {
    totalMonths -= 1;
  }

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  return { years, months };
}

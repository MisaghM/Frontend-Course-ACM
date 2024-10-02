function getCurrentDate() {
  const date = new Date();
  const today = new Date(date.getTime() - (date.getTimezoneOffset() * 60000));
  return today.toISOString().slice(0, 10);
};

function isRestaurantOpen(startTime, endTime) {
  const hour = new Date().getHours();
  return hour >= Number(startTime.split(':')[0]) && hour < Number(endTime.split(':')[0]);
};

export { getCurrentDate, isRestaurantOpen };

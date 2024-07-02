function updateTimeAndDay() {
  const now = new Date();
  const options = { weekday: "long" };
  const currentTimeUTC = now.toISOString().split("T")[1].split(".")[0] + " UTC";
  const currentDay = now.toLocaleDateString("en-US", options);

  document.getElementById("current-time-utc").textContent = currentTimeUTC;
  document.getElementById("current-day").textContent = currentDay;
}

updateTimeAndDay();
setInterval(updateTimeAndDay, 1000);

const dayElement = document.querySelector('[data-testid="currentDay"]');
const timeElement = document.querySelector('[data-testid="currentTimeUTC"]');

// function updateDateTime() {
//   const now = new Date();
//   const day = now.toLocaleDateString("en-US", { weekday: "long" }); // Get day of the week
//   const time = now.toLocaleTimeString("en-US", { timeZone: "UTC" }); // Get time in UTC

//   dayElement.textContent = day;
//   timeElement.textContent = time;
// }

// updateDateTime(); // Call on page load

// // Update time every minute for dynamic display
// setInterval(updateDateTime, 60000); // Update every 60 seconds (1 minute)

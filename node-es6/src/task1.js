// Complete the solve function below.
function solve(reservations) {
  let reservationsPerDay = {}
  const SECONDS_IN_A_DAY = 86400;

  reservations.forEach(reservation => {

    // Parse reservation entry
    let start = Date.parse(reservation[0]);
    let end = Date.parse(reservation[1]);

    // Process every day in a reservation
    let currentDate = start;

    while (currentDate <= end) {
      if (!reservationsPerDay[`${currentDate}`]) {
        reservationsPerDay[`${currentDate}`] = 1
        // } else {
      }

      reservationsPerDay[`${currentDate}`] += 1;
      currentDate += SECONDS_IN_A_DAY;
    }
  })

  // Find the day with the most reservations
  let maxReservations = 0;
  let busiestDay = Number.MAX_SAFE_INTEGER;

  for (let day in reservationsPerDay) {
    if (reservationsPerDay[day] > maxReservations) {
      busiestDay = day
      maxReservations = reservationsPerDay[day];
    } else if (reservationsPerDay[day] === maxReservations) {
      if (day < busiestDay) {
        busiestDay = day
      }
    }
  }

  return new Date(parseInt(busiestDay, 10)).toISOString().split('T')[0]

}

function solveWithEs6Feature(a) {
  return [a, 5, 7].map(n => n * 2)
}

module.exports.solve = solve;
module.exports.solveWithEs6Feature = solveWithEs6Feature;

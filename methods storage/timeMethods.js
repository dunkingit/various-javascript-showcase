function minutesUntil(targetYear, targetMonth, targetDay, targetHour, targetMinute) {
    // Create a date object for the current time
    const now = new Date();
    // Create a date object for the target time
    // Note: Months in JavaScript are 0-indexed (0 is January, 1 is February, etc.)
    const targetDate = new Date(targetYear, targetMonth - 1, targetDay, targetHour, targetMinute);
    // Calculate the difference in milliseconds
    const difference = targetDate - now;
    // Convert milliseconds to minutes (1000 ms per second, 60 seconds per minute)
    const minutesUntil = Math.floor(difference / 1000 / 60);
    return minutesUntil;
}


async function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }
  
//* countdown timer => hw
let hour = 1;
let minute = 0;
let second = 0;

const countdownTimer = setInterval(() => {
  const h = String(hour).padStart(2, "0");
  const m = String(minute).padStart(2, "0");
  const s = String(second).padStart(2, "0");

  console.log(`Remaining: ${h}hours ${m}minutes ${s}seconds`);

  if (hour === 0 && minute === 0 && second === 0) {
    console.log("countdown finished");
    clearInterval(countdownTimer);
    return;
  }

  if (second > 0) {
    second--;
  } else if (minute > 0) {
    second = 59;
    minute--;
  } else if (hour > 0) {
    second = 59;
    minute = 59;
    hour--;
  }
}, 1000);




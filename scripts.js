// scripts.js
function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}

function initializeClock(id, endtime) {
  const clock = document.getElementById(id);

  function updateClock() {
    const t = getTimeRemaining(endtime);

    clock.innerHTML = (t.days > 0 ? t.days + 'd ' : '') +
                      t.hours + 'h ' +
                      t.minutes + 'm ' +
                      t.seconds + 's';

    if (t.total <= 0) {
      clearInterval(timeinterval);
      clock.innerHTML = "Hackathon Ended";
    }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}

function showEasterEgg() {
  const easterEgg = document.getElementById('easter-egg');
  easterEgg.classList.toggle('hidden');
}

// Set the date and time of your hackathon
const hackathonDate = new Date("2023-04-01T11:00:00");
const hackathonDuration = 5 * 60 * 60 * 1000; // 5 hours
const deadline = new Date(hackathonDate.getTime() + hackathonDuration);
initializeClock('countdown', deadline);

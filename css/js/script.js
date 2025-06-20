
const hour = new Date().getHours();
const sky = document.querySelector('.sky');
const night = document.querySelector('.night');
const day = document.querySelector('.afternoon');

// You can customize the time ranges as needed
if (hour >= 6 && hour < 12) {
  sky.classList.add('visible');
} else if (hour >= 19| hour < 5) {
  night.classList.add('visible');
} else (hour >= 12 && hour < 19); {
  day.classList.add('visible');
}


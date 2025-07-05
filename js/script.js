
const hour = new Date().getHours();
const sky = document.querySelector('.sky');
const night = document.querySelector('.night');
const day = document.querySelector('.day'); // Changed to match the likely intended class

// You can customize the time ranges as needed
if (hour >= 6 && hour < 12) {
  sky.classList.add('visible');
} else if (hour >= 13 && hour < 18) {
  day.classList.add('visible');
} else {
  night.classList.add('visible');
}


// Select elements
const counter = document.getElementById('counter');
const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');
const increaseBtn = document.getElementById('increase');

// Initialize counter value
let count = 0;

// Update counter display
function updateCounter() {
  counter.textContent = count;
}

// Decrease button event
decreaseBtn.addEventListener('click', () => {
  count--;
  updateCounter();
});

// Reset button event
resetBtn.addEventListener('click', () => {
  count = 0;
  updateCounter();
});

// Increase button event
increaseBtn.addEventListener('click', () => {
  count++;
  updateCounter();
});

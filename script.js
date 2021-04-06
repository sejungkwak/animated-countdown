const defaultContainer = document.querySelector('.default-container');
const countdownContainer = document.querySelector('.countdown-container');
const btn = document.querySelector('.btn');
const number = document.getElementById('number');

if ( defaultContainer.style.display != 'flex' ) countdown();
btn.addEventListener('click', activeCountdown);

function countdown() {
  let i = 3;
  let delay = 1000;
  number.innerHTML = i;

  let showCountdown = setInterval(() => {
    if ( i >= 0 ) {
      i--;
      number.innerHTML = i;
    }
    if ( i < 0 ) {
      number.innerHTML = '';
      clearInterval(showCountdown);
    }
  }, delay);

  setTimeout(() => {
    defaultContainer.style.display = 'flex';
    countdownContainer.style.display = 'none';
  }, 4000)

}

function activeCountdown() {
  defaultContainer.style.display = 'none';
  countdownContainer.style.display = 'flex';
  countdown();
}
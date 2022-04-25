// import functions and grab DOM elements
const button1 = document.getElementById('btn1');
const button2 = document.getElementById('btn2');
const button3 = document.getElementById('btn3');

const shell1 = document.getElementById('shell1');
const shell2 = document.getElementById('shell2');
const shell3 = document.getElementById('shell3');

const wins = document.getElementById('win');
const losses = document.getElementById('loss');
const total = document.getElementById('total');
// let state
let win = 0;
let loss = 0;
// set event listeners
button1.addEventListener('click', () => {
    shell1.classList.remove('reveal');
    shell2.classList.remove('reveal');
    shell3.classList.remove('reveal');

    const randomShell = Math.ceil(Math.random() * 3);

    if (randomShell === 1) {
        shell1.classList.add('reveal');
        win++;
        setTimeout(() => {
            shell1.classList.remove('reveal');
        }, '3000');
    } else if (randomShell === 2) {
        shell2.classList.add('reveal');
        loss++;
        setTimeout(() => {
            shell2.classList.remove('reveal');
        }, '3000');
    } else {
        shell3.classList.add('reveal');
        loss++;
        setTimeout(() => {
            shell3.classList.remove('reveal');
        }, '3000');
    }
    wins.textContent = win;
    losses.textContent = loss;
    total.textContent = win + loss;
}); 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

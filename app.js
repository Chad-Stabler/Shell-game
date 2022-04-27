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

const errorMsg = document.getElementById('error');
// let state
let win = 0;
let loss = 0;
let active = false;
// set event listeners
function displayResults() {
    wins.textContent = win;
    losses.textContent = loss;
    total.textContent = win + loss;
}

function reset() {
    errorMsg.textContent = '';
    shell1.classList.remove('reveal');
    shell2.classList.remove('reveal');
    shell3.classList.remove('reveal');
}

function toggleBounce(i) {
    active = true;
    document.getElementById(`shell${i}`).classList.add('reveal');                
    setTimeout(() => {
        document.getElementById(`shell${i}`).classList.remove('reveal');
    }, '300');
    setTimeout(() => {
        document.getElementById(`shell${i}`).classList.add('reveal');
    }, '600');
    setTimeout(() => {
        document.getElementById(`shell${i}`).classList.remove('reveal');
    }, '900');
    setTimeout(() => {
        document.getElementById(`shell${i}`).classList.add('reveal');
    }, '1200');
    setTimeout(() => {
        document.getElementById(`shell${i}`).classList.remove('reveal');
    }, '1500');
}

button1.addEventListener('click', () => {
    
    if (active) {
        errorMsg.textContent = 'Too fast, please wait a moment before guessing again';
        setTimeout(() => {
            reset();
        }, '1250');
        return;
    } else {
        reset();
        active = true;
        const randomShell = Math.ceil(Math.random() * 3);
        if (randomShell === 1) {
            win++;
            toggleBounce(1);
            setTimeout(() => {
                active = false;
            }, '1800');
        } else if (randomShell === 2) {
            loss++;
            toggleBounce(2);
            setTimeout(() => {
                active = false;
            }, '1800');
        } else {
            loss++;
            toggleBounce(3);
            setTimeout(() => {
                active = false;
            }, '1800');
        }
        displayResults();
    }
});

button2.addEventListener('click', () => {
    
    if (active) {
        errorMsg.textContent = 'Too fast, please wait a moment before guessing again';
        setTimeout(() => {
            reset();
        }, '1250');
        return;
    } else {
        reset();
        active = true;
        const randomShell = Math.ceil(Math.random() * 3);
        if (randomShell === 1) {
            loss++;
            toggleBounce(1);
            setTimeout(() => {
                active = false;
            }, '1800');
        } else if (randomShell === 2) {
            win++;
            toggleBounce(2);
            setTimeout(() => {
                active = false;
            }, '1800');
        } else {
            win++;
            toggleBounce(3);
            setTimeout(() => {
                active = false;
            }, '1800');
        }
    
        displayResults();
    }
});

button3.addEventListener('click', () => {
    if (active) {
        errorMsg.textContent = 'Too fast, please wait a moment before guessing again';
        return;
    } else {
        reset();
        active = true;
        const randomShell = Math.ceil(Math.random() * 3);
        if (randomShell === 1) {
            loss++;
            toggleBounce(1);
            setTimeout(() => {
                active = false;
            }, '1800');
        } else if (randomShell === 2) {
            loss++;
            toggleBounce(2);
            setTimeout(() => {
                active = false;
            }, '1800');
        } else {
            win++;
            toggleBounce(3);
            setTimeout(() => {
                active = false;
            }, '1800');
        }
    
        displayResults();
    }
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

const startBtn = document.querySelector('.start-btn');
const resetBtn = document.querySelector('.reset-btn');
const stopBtn = document.querySelector('.stop-btn');
const textArea = document.querySelector('h1');

let counter = 0;
let interval = null;

const stopwatch = ()=> {
    counter ++;
    console.log(counter);
    let hours = Math.floor(counter/3600);
    let mins = Math.floor((counter - hours * 3600) /60);
    let seconds = counter % 60;
    
    
    textArea.textContent = `${hours} : ${mins} : ${seconds}`;
};
const startStopwatch = ()=>{
    if (interval) {
        return;
    }
    interval = setInterval(stopwatch, 1000);
    };
    const stopStopwatch =()=>{
        clearInterval(interval)
        interval = null;
    };
    const resetStopwatch = ()=> {
        stopStopwatch();
        counter = 0;
        textArea.textContent = `00 : 00 : 00`;
    };

    startBtn.addEventListener('click',startStopwatch);
    resetBtn.addEventListener('click',resetStopwatch);
    stopBtn.addEventListener('click',stopStopwatch);



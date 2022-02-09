require("./index.css");


const $97d73b239eba9594$var$start = document.querySelector(".js-start");
const $97d73b239eba9594$var$stop = document.querySelector(".js-stop");
const $97d73b239eba9594$var$input = document.querySelectorAll(".js-date");
const $97d73b239eba9594$var$timer = document.querySelector(".js-timer");
const $97d73b239eba9594$var$validDate = document.querySelector(".valid-date");
const $97d73b239eba9594$var$resultOfValidation = document.querySelector(".result");
const $97d73b239eba9594$var$options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
};
let $97d73b239eba9594$var$isWorking = false;
setInterval(()=>{
    let date = new Date();
    $97d73b239eba9594$var$validDate.textContent = date.toLocaleString("Uk-uk", $97d73b239eba9594$var$options);
}, 2000);
const $97d73b239eba9594$var$pad = (value)=>{
    return String(value).padStart(2, "0");
};
class $97d73b239eba9594$var$CountdownTimer {
    constructor(currentTime = {
    }){
        this.time = currentTime;
    }
    getUnixTime() {
        this.unixTime = this.time.getTime();
    }
    validateTime() {
        $97d73b239eba9594$var$resultOfValidation.textContent = "!!! Час не валідний, cпробуйте ввести інший !!!";
        $97d73b239eba9594$var$resultOfValidation.style.backgroundColor = "#ff0000";
        $97d73b239eba9594$var$stopTimer();
    }
    isTimerEnded() {
        $97d73b239eba9594$var$resultOfValidation.textContent = "Таймер закінчив роботу. Надсилаємо нагадування ;)";
        $97d73b239eba9594$var$resultOfValidation.style.backgroundColor = "#008000";
        $97d73b239eba9594$var$stopTimer();
    }
    formatResultTime(resultTime) {
        this.resultDays = Math.floor(resultTime / 86400000);
        this.resultHours = $97d73b239eba9594$var$pad(Math.floor(resultTime % 86400000 / 3600000));
        this.resulMins = $97d73b239eba9594$var$pad(Math.floor(resultTime % 3600000 / 60000));
        this.resultSecs = $97d73b239eba9594$var$pad(Math.floor(resultTime % 60000 / 1000));
        const { resultDays: resultDays , resultHours: resultHours , resulMins: resulMins , resultSecs: resultSecs  } = this;
        $97d73b239eba9594$var$timer.textContent = `${resultDays}:${resultHours}:${resulMins}:${resultSecs}`;
    }
    showResultTime() {
        this.currentTime = null;
        this.intervalId = setInterval(()=>{
            this.currentTime = Date.now();
            this.substractTime();
        }, 1000);
    }
    substractTime() {
        this.getUnixTime();
        this.resultTime = this.unixTime - this.currentTime;
        const { resultTime: resultTime  } = this;
        $97d73b239eba9594$var$resultOfValidation.textContent = "";
        $97d73b239eba9594$var$resultOfValidation.style.backgroundColor = "#ffffff";
        if (resultTime < -1000) {
            this.validateTime();
            return;
        } else if (resultTime < 0 && resultTime > -1000) {
            this.isTimerEnded();
            return;
        }
        this.formatResultTime(resultTime);
    }
}
let $97d73b239eba9594$var$timer2 = null;
const $97d73b239eba9594$var$createTimer = ()=>{
    if ($97d73b239eba9594$var$isWorking) return;
    $97d73b239eba9594$var$isWorking = true;
    const arrOfInputs = [
        ...$97d73b239eba9594$var$input
    ];
    const arrOfValues = arrOfInputs.map((el)=>Number(el.value.trim())
    );
    const futureTime = new Date(2022, 1, ...arrOfValues);
    const timer1 = new $97d73b239eba9594$var$CountdownTimer(futureTime);
    timer1.showResultTime();
    $97d73b239eba9594$var$timer2 = timer1;
};
const $97d73b239eba9594$var$stopTimer = ()=>{
    $97d73b239eba9594$var$isWorking = false;
    clearInterval($97d73b239eba9594$var$timer2.intervalId);
};
$97d73b239eba9594$var$start.addEventListener("click", $97d73b239eba9594$var$createTimer);
$97d73b239eba9594$var$stop.addEventListener("click", $97d73b239eba9594$var$stopTimer);


//# sourceMappingURL=index.js.map

import "./style.css";

const start = document.querySelector(".js-start");
const stop = document.querySelector(".js-stop");
const input = document.querySelectorAll(".js-date");
const timer = document.querySelector(".js-timer");
const validDate = document.querySelector(".valid-date");
const resultOfValidation = document.querySelector(".result");

const options = {
  weekday: "long",
  year: "numeric",
  month: "short",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
};

let isWorking = false;

setInterval(() => {
  let date = new Date();
  validDate.textContent = date.toLocaleString("Uk-uk", options);
}, 2000);

const pad = (value) => {
  return String(value).padStart(2, "0");
};

class CountdownTimer {
  constructor(currentTime = {}) {
    this.time = currentTime;
  }

  getUnixTime() {
    this.unixTime = this.time.getTime();
  }

  validateTime() {
    resultOfValidation.textContent =
      "!!! Час не валідний, cпробуйте ввести інший !!!";
    resultOfValidation.style.backgroundColor = "#ff0000";
    stopTimer();
  }

  isTimerEnded() {
    resultOfValidation.textContent =
      "Таймер закінчив роботу. Надсилаємо нагадування ;)";
    resultOfValidation.style.backgroundColor = "#008000";
    stopTimer();
  }

  formatResultTime(resultTime) {
    this.resultDays = Math.floor(resultTime / (1000 * 60 * 60 * 24));
    this.resultHours = pad(
      Math.floor((resultTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    this.resulMins = pad(
      Math.floor((resultTime % (1000 * 60 * 60)) / (1000 * 60))
    );
    this.resultSecs = pad(Math.floor((resultTime % (1000 * 60)) / 1000));

    const { resultDays, resultHours, resulMins, resultSecs } = this;

    timer.textContent = `${resultDays}:${resultHours}:${resulMins}:${resultSecs}`;
  }

  showResultTime() {
    this.currentTime = null;
    this.intervalId = setInterval(() => {
      this.currentTime = Date.now();

      this.substractTime();
    }, 1000);
  }

  substractTime() {
    this.getUnixTime();
    this.resultTime = this.unixTime - this.currentTime;
    const { resultTime } = this;

    resultOfValidation.textContent = "";
    resultOfValidation.style.backgroundColor = "#ffffff";
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

let timer2 = null;

const createTimer = () => {
  if (isWorking) {
    return;
  }
  isWorking = true;
  const arrOfInputs = [...input];
  const arrOfValues = arrOfInputs.map((el) => Number(el.value.trim()));
  const futureTime = new Date(2022, 1, ...arrOfValues);
  const timer1 = new CountdownTimer(futureTime);
  timer1.showResultTime();
  timer2 = timer1;
};

const stopTimer = () => {
  isWorking = false;
  clearInterval(timer2.intervalId);
};

start.addEventListener("click", createTimer);
stop.addEventListener("click", stopTimer);

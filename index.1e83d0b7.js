const e=document.querySelector(".js-start"),t=document.querySelector(".js-stop"),s=document.querySelectorAll(".js-date"),i=document.querySelector(".js-timer"),r=document.querySelector(".valid-date"),n=document.querySelector(".result"),o={weekday:"long",year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"},l=e=>String(e).padStart(2,"0");class u{constructor(e={}){this.time=e}getUnixTime(){this.unixTime=this.time.getTime()}validateTime(){n.textContent="!!! Час не валідний, cпробуйте ввести інший !!!",n.style.backgroundColor="#ff0000",m()}isTimerEnded(){n.textContent="Таймер закінчив роботу. Надсилаємо нагадування ;)",n.style.backgroundColor="#008000",m()}formatResultTime(e){this.resultDays=Math.floor(e/864e5),this.resultHours=l(Math.floor(e%864e5/36e5)),this.resulMins=l(Math.floor(e%36e5/6e4)),this.resultSecs=l(Math.floor(e%6e4/1e3));const{resultDays:t,resultHours:s,resulMins:r,resultSecs:n}=this;i.textContent=`${t}:${s}:${r}:${n}`}substractTime(){this.getUnixTime(),this.resultTime=this.unixTime-this.currentTime;const{resultTime:e}=this;n.textContent="",n.style.backgroundColor="#ffffff",e<-1e3||!e?this.validateTime():e<0&&e>-1e3?this.isTimerEnded():this.formatResultTime(e)}showResultTime(){this.currentTime=null,this.intervalId=setInterval((()=>{this.currentTime=Date.now(),this.substractTime()}),1e3)}}let a=!1,c=null;const m=()=>{a=!1,clearInterval(c.intervalId)};setInterval((()=>{let e=new Date;r.textContent=e.toLocaleString("Uk-uk",o)}),2e3),e.addEventListener("click",(()=>{if(a)return;a=!0;const e=[...s].map((e=>Number(e.value.trim()))),t=new Date(2022,1,...e),i=new u(t);i.showResultTime(),c=i})),t.addEventListener("click",m);
//# sourceMappingURL=index.1e83d0b7.js.map
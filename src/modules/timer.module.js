import {Module} from "../core/module"

export class TimerModule extends Module {
    constructor() {
        super("timer", "Таймер");
        this.label = "Таймер";
    }

    trigger() {
        const exTimer = document.querySelector(".timer-container");

        if (exTimer) {
            exTimer.remove();
        }

        //Container
        const timerContainer = document.createElement("form");
        timerContainer.className = "timer-container";

        //Label
        const timerLabel = document.createElement("label");
        timerLabel.className = "timer-label";
        timerLabel.textContent = "Таймер";

        //Input
        const timerInput = document.createElement("input");
        timerInput.className = "timer-input";
        timerInput.type = "number";
        timerInput.min = "1";
        timerInput.max = "3599";

        //Display
        const timerDisplay = document.createElement("span");
        timerDisplay.id = "timerDisplay";
        timerDisplay.style.display = "none";

        //Info
        const timerInfo = document.createElement("div");
        timerInfo.className = "timer-info";
        timerInfo.textContent = "* Для запуска таймера,\n введите секунды и нажмите ENTER";

        timerContainer.append(timerLabel);
        timerContainer.append(timerInput);
        timerContainer.append(timerDisplay);
        timerContainer.append(timerInfo);
        document.body.append(timerContainer);

        timerContainer.addEventListener("submit", (event) => {
            event.preventDefault();

            let userSeconds = timerInput.value;

            timerInput.value = "";
            timerInput.readOnly = true;
            timerInput.placeholder = "СТАРТ";

            setInterval(() => {
                if (userSeconds >= 0) {
                    timerInput.style.display = "none";
                    timerDisplay.style.display = "block";
                    timerInfo.textContent = "";

                    const minutes = String(Math.floor(userSeconds / 60)).padStart(2, "0");
                    const seconds = String(userSeconds % 60).padStart(2, "0");
                    timerDisplay.textContent = `${minutes}:${seconds}`;
                    userSeconds--;
                } else {
                    timerInfo.textContent = "Таймер закончил свою работу";
                    setTimeout(() => {
                        timerContainer.remove();
                    }, 1000);
                }
            }, 1000);
        });
    }

    render() {
        const el = document.createElement("li");
        el.className = "menu-item";
        el.textContent = this.label;
        el.addEventListener("click", (event) => {
            event.stopPropagation();
            this.trigger();
        })
        return el;
    }
}

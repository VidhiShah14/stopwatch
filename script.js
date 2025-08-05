let timer = null;
let startTime = 0;
let elapsed = 0;

const display = document.getElementById("display");
const lapList = document.getElementById("lapList");

function formatTime(ms) {
  const minutes = String(Math.floor(ms / 60000)).padStart(2, "0");
  const seconds = String(Math.floor((ms % 60000) / 1000)).padStart(2, "0");
  const millis = String(ms % 1000).padStart(3, "0");
  return `${minutes}:${seconds}.${millis}`;
}

function updateDisplay() {
  const now = Date.now();
  elapsed = now - startTime;
  display.textContent = formatTime(elapsed);
}

document.getElementById("start").onclick = () => {
  if (!timer) {
    startTime = Date.now() - elapsed;
    timer = setInterval(updateDisplay, 10);
  }
};

document.getElementById("pause").onclick = () => {
  clearInterval(timer);
  timer = null;
};

document.getElementById("reset").onclick = () => {
  clearInterval(timer);
  timer = null;
  startTime = 0;
  elapsed = 0;
  display.textContent = "00:00.000";
  lapList.innerHTML = "";
};

document.getElementById("lap").onclick = () => {
  if (timer) {
    const lapItem = document.createElement("li");
    lapItem.textContent = formatTime(elapsed);
    lapList.appendChild(lapItem);
  }
};

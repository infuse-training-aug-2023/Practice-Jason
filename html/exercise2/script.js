const clock = document.getElementById("clock");
const darkModeSwitch = document.getElementById("dark-mode-switch");

function updateTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  clock.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateTime, 1000);

darkModeSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
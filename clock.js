const clockTitle = document.querySelector(".user-component__time");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;

}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
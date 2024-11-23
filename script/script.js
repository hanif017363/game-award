const hamBtn = document.getElementById("hamBtn");
const unList = document.querySelector(".nav__list");

hamBtn.addEventListener("click", function (event) {
  unList.classList.toggle("active");
  event.stopPropagation();
});
document.addEventListener("click", function (event) {
  if (!unList.contains(event.target) && !hamBtn.contains(event.target)) {
    unList.classList.remove("active");
  }
});
// countdown

const offerEnds = "12 Dec 2024";

function countDown() {
  const offerDate = new Date(offerEnds);
  const currentDate = new Date();
  const remainDate = (offerDate - currentDate) / 1000;

  const days = Math.floor(remainDate / (24 * 3600));
  const hours = Math.floor((remainDate % (24 * 3600)) / 3600);
  const minutes = Math.floor((remainDate % 3600) / 60);
  const second = Math.floor(remainDate % 60);

  document.querySelector(".countdown__days").innerText = formateTime(days);
  document.querySelector(".countdown__hours").innerText = formateTime(hours);
  document.querySelector(".countdown__min").innerText = formateTime(minutes);
  document.querySelector(".countdown__sec").innerText = formateTime(second);
}

function formateTime(time) {
  return time < 10 ? `0${time}` : time;
}
countDown();

setInterval(countDown, 1000);

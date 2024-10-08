const divElem = document.querySelector(".noneToBlock");
const htmlElem = document.querySelector(":root");

htmlElem.addEventListener("click", showHide);
document.addEventListener("keydown", showHide);

function showHide() {
  divElem.classList.toggle("showing");
}

const f = document.getElementById("foo");
document.addEventListener(
  "click",
  (ev) => {
    f.style.transform = `translateY(${ev.clientY - 25}px)`;
    f.style.transform += `translateX(${ev.clientX - 25}px)`;
  },
  false,
);

/* 
el.addEventListener("transitionend", updateTransition, true);

el.addEventListener("transitionrun", signalStart, true);
el.addEventListener("transitionstart", signalStart, true);
*/
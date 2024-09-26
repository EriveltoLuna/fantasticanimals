//scroll to top button
let btn = document.querySelector(".btn");

window.onscroll = () => {
  if (document.body.scrollTop < 20) {
    btn.classList.remove("active");
  } else {
    btn.classList.add("active");
  }
};

btn.addEventListener("click", () => {
  document.body.scrollTop = 0;
});

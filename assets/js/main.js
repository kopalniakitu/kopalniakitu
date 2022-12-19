// Cookie notice
const cookieNotice = document.querySelector(".cookie-notice");
const cookieNoticeButton = cookieNotice.querySelector(".button");

if (!localStorage.getItem("cookies-accpted")) {
  cookieNotice.classList.remove("-hidden");
}

cookieNoticeButton.addEventListener("click", () => {
  cookieNotice.classList.add("-hidden");
  localStorage.setItem("cookies-accpted", "1");
});

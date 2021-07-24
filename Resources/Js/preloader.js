window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader");
  const headerList = document.querySelector("header");
  const hometxt = document.querySelector(".hometxt");
  setTimeout(function () {
    preloader.classList.add("preload-finish");
    headerList.classList.add("show");
    hometxt.classList.add("show");

    // >> Set cookie to visited here <<
  }, 2000);
});

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

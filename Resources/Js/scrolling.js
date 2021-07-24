$(document).ready(function () {
    var scrollLink = $(".scroll");
    const elements = $("html,body");

    //smooth scroll
    scrollLink.click(function (e) {
      e.preventDefault();

      elements.animate(
        {
          scrollTop: $(this.hash).offset().top,
        },
        1e3,
        "easeInOutExpo"
      );
    });
});
$(document).ready(function () {
  $(".about-left").waypoint(
    function (direction) {
      $(".about-left").addClass("animated-left");
    },
    {
      offset: "50%",
    }
  );
  $(".about-right").waypoint(
    function (direction) {
      $(".about-right").addClass("animated-right");
    },
    {
      offset: "50%",
    }
  );

  $(".skills-left").waypoint(
    function (direction) {
      $(".skills-left").addClass("animated-skills-left");
    },
    {
      offset: "50%",
    }
  );
  $(".skills-right").waypoint(
    function (direction) {
      $(".skills-right").addClass("animated-skills-right");
    },
    {
      offset: "50%",
    }
  );
  $(".education-left").waypoint(
    function (direction) {
      $(".education-left").addClass("animate-education-left ");
    },
    {
      offset: "50%",
    }
  );
  $(".education-middle").waypoint(
    function (direction) {
      $(".education-middle").addClass("animate-education-middle");
    },
    {
      offset: "50%",
    }
  );
  $(".education-right").waypoint(
    function (direction) {
      $(".education-right").addClass("animate-education-right");
    },
    {
      offset: "50%",
    }
  );

  //   $("#home").waypoint(
  //     function (direction) {
  //       $(".nav-link").removeClass("active");
  //       $(".home").addClass("active");
  //     },
  //     {
  //       offsetX: "-20%",
  //     }
  //   );

  //   $("#about").waypoint(
  //     function (direction) {
  //       $(".nav-link").removeClass("active");
  //       $(".about").addClass("active");
  //     },
  //     {
  //       offset: "50%",
  //     }
  //   );
  //   $("#skills").waypoint(function (direction) {
  //     $(".nav-link").removeClass("active");
  //     $(".skills").addClass("active");
  //   }),
  //     {
  //       offset: "50%",
  //     };
});

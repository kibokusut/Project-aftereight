// function hide() {
//   if (screen.width > 400) {
//     console.log("ukuran lebih dari 400");
//     $(".navbar").attr("style", "position : unset");
//     $(".tes").addClass("h-100 bg-primary");
//     // $(".navbar").removeAttr("position");
//   } else {
//     $(".tes").removeClass("h-100  bg-primary");
//     $(".navbar").attr("style", "position : relative");
//   }
// }

$(document).ready(function () {
  $(".togle-menu").on("click", function () {
    $(".menu").addClass("m-menu");
    $(".menu").removeClass("menu");
  });

  $(".menu").on("click", function (event) {
    if ($(event.target).attr("class") == "m-menu") {
      $(".m-menu").addClass("menu");
      $(".menu").removeClass("m-menu");
    }
  });
});

// $('.dropdown').hover(function() {
//   $(this).addClass('open');
// },
// function() {
//   $(this).removeClass('open');
// });

$(".nav-item, .dropdown, .line-bottom").on("mouseenter", function (params) {
  $(".dropdown-menu", this).addClass("show");
  $(".dropdown-menu", this).css({
    position: "absolute",
    inset: "0px auto auto 0px",
    margin: "0px",
    background: "#123040",
    width: "322px",
    fontSize: "25px",
    transform: " translate3d(0px, 50px, 0px)",
    color: "#000 !important",
  });

  $(".dropdown-toggle", this).addClass("show");
});
$(".nav-item, .dropdown, .line-bottom").on("mouseleave", function (params) {
  $(".dropdown-menu", this).removeClass("show");
  $(".dropdown-toggle", this).removeClass("show");
});

let hoverImage = `<div id="show-content" class="hover-show">
<img src="./assets/images/showimg.png" alt="" />
</div>`;

$(".image-content-section-two-edu").on("mouseenter", function () {
  $(this).append(hoverImage);
  $("#show-content").on("mouseleave", function () {
    $(this).remove();
  });
});

$(".image-content-section-two-edu").on("mouseleave", function () {
  $("#show-content").remove();
});

const ele = document.getElementById("id-scroll");
let pos = { top: 0, left: 0, x: 0, y: 0 };

const mouseDownHandler = function (e) {
  ele.style.cursor = "grabbing";
  ele.style.userSelect = "none";

  pos = {
    left: ele.scrollLeft,
    top: ele.scrollTop,
    x: e.clientX,
    y: e.clientY,
  };

  // $("#section-two").on("mousemove", mouseMoveHandler);

  document.addEventListener("mousemove", mouseMoveHandler);
  document.addEventListener("mouseup", mouseUpHandler);
};

const mouseMoveHandler = function (e) {
  const dx = e.clientX - pos.x;
  const dy = e.clientY - pos.y;
  ele.scrollTop = pos.top - dy;
  ele.scrollLeft = pos.left - dx;
};

const mouseUpHandler = function () {
  ele.style.cursor = "grab";
  document.removeEventListener("mousemove", mouseMoveHandler);
  document.removeEventListener("mouseup", mouseUpHandler);
};

// Attach the handler
ele.addEventListener("mousedown", mouseDownHandler);

$(document).ready(function () {
    $(".content").hide();
    $(".is").on("click", function () {
      $(this).find('.fa-solid').toggleClass('active');
      $(this).next('.content').slideToggle(200);
    });
});

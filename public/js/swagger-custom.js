jQuery(function ($) {
  var info = $('div.info');
  var div = $(`<div class="toggle-container"></div>`);
  $(div).append("<button class='toggle-dark'></button>");
  var parent = $(info).parent('div');
  $(parent).toggleClass('flex');
  $(parent).append(div);

  $('button.toggle-dark').click(function () {
    $(this).toggleClass('active');
    $('body').toggleClass('dark');
    $('.swagger-ui').toggleClass('dark');
  });
});

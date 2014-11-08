$(document).ready(function() {
  $('#main').fullpage({
    anchors: ['index', 'quality', 'contact'],
    keyboardScrolling: true,
  });

  $('#index-arrow').click(function() {
    $.fn.fullpage.moveSectionDown();
  });
});

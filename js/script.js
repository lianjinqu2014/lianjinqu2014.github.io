$(document).ready(function() {
  $('#main').fullpage({
    anchors: ['dream', 'learning', 'partner', 'success'],
    keyboardScrolling: true,
    css3: true,
  });

  $('#index-arrow').click(function() {
    $.fn.fullpage.moveSectionDown();
  });
});

$(document).ready(function() {
  $('#main').fullpage({
    anchors: ['index', 'intro', 'subscription', 'contact'],
    responsive: 1,
    resize: true,
    verticalCentered: true,

    css3: true,
    keyboardScrolling: true,

    navigation: true,
    navigationPosition: 'left',

    slidesNavigation: true,
    slidesNavPosition: 'bottom',
  });
});

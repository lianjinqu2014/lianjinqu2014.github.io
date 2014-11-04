$(document).ready(function() {
  $('#main').fullpage({
    anchors: ['index', 'contact'],

    responsive: 1,
    resize: true,

    css3: true,
    keyboardScrolling: true,

    navigation: true,
    navigationPosition: 'right',

    slidesNavigation: true,
    slidesNavPosition: 'bottom',

    afterRender: function() {
      $('#index-title').addClass('appear');
      $('#index-wave').addClass('appear');
    },

    afterLoad: function(anchorLink, index) {
      if (index == 2) {
        $('#contact-detail').addClass('appear');
      }
    }
  });
});

$(document).ready(function() {
  $('#main').fullpage({
    anchors: ['index', 'service', 'contact'],

    responsive: 1,
    resize: true,

    css3: true,
    keyboardScrolling: true,

    navigation: true,
    navigationPosition: 'right',

    afterRender: function() {
      $('#index-title').addClass('appear');
      $('#index-wave').addClass('appear');
    },

    afterLoad: function(anchorLink, index) {
      switch(index) {
        case 3: {
          $('#contact-box').addClass('appear');
          break;
        }

        case 2: {
          $('.service-ability').css({
            "-webkit-transform":"translate(15px,15px)",
            "-ms-transform":"translate(15px,15px)",
            "transform":"translate(15px,15px)",
          });
          break;
        }

        default:
          break;
      }
    }
  });
});

$('body').scrollspy({ target: '#navbar-example' })

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


  $(document).ready(function() {
    // Activate the first carousel item
    $('#carouselExample .carousel-item:first').addClass('active');
    
    // Update carousel indicators on slide
    $('#carouselExample').on('slide.bs.carousel', function(event) {
      var index = $(event.relatedTarget).index();
      $('.nav-pills a.nav-link').removeClass('active');
      $('.nav-pills li').eq(index).find('a.nav-link').addClass('active');
    });
  });

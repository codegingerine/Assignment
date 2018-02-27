$(document).ready(function() {

    var $albumsCarousel = $('#albums-carousel');
    $albumsCarousel.owlCarousel({
      // autoplay: true,
      center: true,
      loop: true,
      touchDrag : false,
      mouseDrag : false,
      // nav: true,
      // navText: ["<img src='./images/back_ico.svg'>",""],
      margin: 0,
      items: 2
    });

    // Current track info
    var $currentTrackInfo = $('.track-info');
    var $currentTrackAdd = $('.track-info').find('#current-track-on');
    var $openInfoBtn = $('#albums-carousel').find('.open-info');
    var $closeInfoBtn = $('.track-info').find('.back-btn');
   
    /* Open/Close current track info */

    $openInfoBtn.on('click', function() {
      var $currentTrackOn = $('#albums-carousel').find('.owl-item.center');
      $currentTrackInfo.removeClass('hide-item');
      // inject outer HTML of the carousel current track into the track info item
      var $currentTrackHtml = $currentTrackOn.clone().wrap('<div>').parent().html();
      $currentTrackAdd.html($currentTrackHtml);
    });

    $closeInfoBtn.on('click', function() {
      // remove any injected track info
      $currentTrackAdd.empty();
      $currentTrackInfo.addClass('hide-item');
    });

    // Player controls - next/prev slide events
    var $playNext = $('.player-controls').find('.next');
    var $playPrev = $('.player-controls').find('.prev');

    $playNext.click(function() {
      $albumsCarousel.trigger('next.owl.carousel');
    });
    $playPrev.click(function() {
      $albumsCarousel.trigger('prev.owl.carousel');
    });

});


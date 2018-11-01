
// loading page




 // shrink navbar
 $(window).scroll(function() {
  if ($(document).scrollTop() > 80) {
    $('nav').addClass('shrink');

  } else {
    $('nav').removeClass('shrink');

  }
});



// video
$('.video-btn .video-play-icon').magnificPopup({
  type: 'iframe',

   items: {
	     src: ''
     },
  type: 'iframe',
  iframe: {
	    	markup: '<div class="mfp-iframe-scaler">'+
            		'<div class="mfp-close"></div>'+
            		'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
            		'</div>',
        patterns: {
            youtube: {
	              index: 'youtube.com/',
	              id: 'v=',
	              src: ''
		        }
		     },
		     srcAction: 'iframe_src',
     }
});



// googlemap
// if HTML DOM Element that contains the map is found...
// if (document.getElementById('map-canvas')){
//
//     // Coordinates to center the map
//     var myLatlng = new google.maps.LatLng(52.525595,13.393085);
//
//     // Other options for the map, pretty much selfexplanatory
//     var mapOptions = {
//         zoom: 14,
//         center: myLatlng,
//         mapTypeId: google.maps.MapTypeId.ROADMAP
//     };
//
//     // Attach a map to the DOM Element, with the defined settings
//     var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
//
// }

// Department
$(document).ready(function() {
var owls = $("#new");
  owls.owlCarousel({
  autoplay: 1000,
  nav: true,
     navText: ["<div class='circle-next'></div>","<div class='circle-prev'></div>"]
,
  margin: 25,
  responsiveClass: true,
  center:true,
  nav: true,
  loop: true,
  responsive: {
    0: {
      items: 1
    },
    568: {
      items: 1
    },
    600: {
      items: 2
    },
     1100: {
      items: 2
    },
    1200: {
      items: 3
    }
  }
});
});


// our partners
$(document).ready(function() {
var owls = $("#second");
  owls.owlCarousel({
  autoplay: 1000,
  margin: 30,
  responsiveClass: true,
  loop: true,
  center:true,
  responsive: {
    0:{
      items:1
    },
    367: {
      items:2
    },
    568: {
      items: 3
    },
    600: {
      items: 3
    },
     1100: {
      items: 5
    },
    1200: {
      items: 5
    }
  }
});
});


// Date Picker
$( function() {
    $( "#datepicker" ).datepicker();
  });



// scroll to specific section

$('body').scrollspy({
  target: '#bs-example-navbar-collapse-1',
  offset: 90
});

var lastId,
 topMenu = $("#navbar"),
 topMenuHeight = topMenu.outerHeight()+1,
 // All list items
 menuItems = topMenu.find("a"),
 // Anchors corresponding to menu items
 scrollItems = menuItems.map(function(){
   var item = $($(this).attr("href"));
    if (item.length) { return item; }
 });


menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-50;
  $('html, body').stop().animate({
      scrollTop: offsetTop
  }, 850);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop();

   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";

   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent('nav .navbar-default ul li  a').removeClass("active")
         .end().filter("a[href*=\\#"+id+"]").parent('nav .navbar-default ul li  a').addClass("active");
   }
});




// counter
  $(function(){
    $(window).on("scroll", function(){
      var win_height = $(this).height();
      var win_pos    = $(this).scrollTop();
      var top_pos    = $(".counters").position().top;

      if(win_pos >= top_pos - win_height){
        // here goes your count logic
        $('#counter .counter').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');

  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },
  {
    duration: 1000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
    }

  });
});
      }
    });
  });



  // Tab to accordion
 $('#myTab').tabCollapse();

$('#myTab').tabCollapse({
    tabsClass: ' hidden-xs ',
    accordionClass: 'visible-xs'
});




// tab department automate
var tabCarousel = setInterval(function() {
    var tabs = $('#tab-wrapp .nav.panel-tabs > li '),
        active = tabs.filter('.active'),
        next = active.next('li'),
        toClick = next.length ? next.find('a.link') : tabs.eq(0).find('a.link');

    toClick.trigger('click');
}, 3000);



  // testimonial
var flkty = new Flickity( '.main-gallery', {
  cellAlign: 'left',
  contain: true,
  wrapAround: true,
  prevNextButtons: false,
  autoPlay: 5000
});


// portfolio
$('.grid').masonry({
  itemSelector: '.grid-item',
  percentPosition: true
});


// add filter To Portfolio Images
const $grid = $('.grid').imagesLoaded(function() {
	$grid.isotope({
		itemSelector: '.grid-item',
		percentPosition: true
	});
});

const filterFns = {
	// show if number is greater than 50
	numberGreaterThan50: function() {
		var number = $(this).find('.number').text();
		return parseInt(number, 10) > 50;
	},
	// show if name ends with -ium
	ium: function() {
		var name = $(this).find('.name').text();
		return name.match(/ium$/);
	}
};
// bind filter button click
$('.filter-button-group').on('click', 'button', function() {
	var filterValue = $(this).attr('data-filter');
	// use filterFn if matches value
	filterValue = filterFns[filterValue] || filterValue;
	$grid.isotope({
		filter: filterValue
	});
});
// change is-checked class on buttons
$('.button-group').each(function(i, buttonGroup) {
	var $buttonGroup = $(buttonGroup);
	$buttonGroup.on('click', 'button', function() {
		$buttonGroup.find('.is-checked').removeClass('is-checked');
		$(this).addClass('is-checked');
	});
});




  // fancybox
$(".fancybox").fancybox({
   openEffect  : "fade",
   closeEffect : "fade",
   type : "image"
});



// collapse tabs
$('#myTab').tabCollapse({
    tabsClass: 'hidden-xs',
    accordionClass: 'visible-xs'
});

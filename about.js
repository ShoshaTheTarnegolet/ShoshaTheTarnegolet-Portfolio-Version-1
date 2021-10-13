let observedEl = document.querySelectorAll('.col-animate');

const options = {
  root: null,
  threshold: 0.7,
};

const inViewCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
};
let observer = new IntersectionObserver(inViewCallback, options);
observedEl.forEach((el) => {
  observer.observe(el);
});

class StickyNavigation {
  constructor() {
    this.currentId = null;
    this.currentTab = null;
    this.tabContainerHeight = 70;
    let self = this;
    $('.hero-nav-link').click(function () {
      self.onTabClick(event, $(this));
    });
    $(window).scroll(() => {
      this.onScroll();
    });
    $(window).resize(() => {
      this.onResize();
    });
  }

  onTabClick(event, element) {
    event.preventDefault();
    let scrollTop = $(element.attr('href')).offset().top - this.tabContainerHeight + 1;
    $('html, body').animate({ scrollTop: scrollTop }, 600);
  }

  onScroll() {
    this.checkTabContainerPosition();
    this.findCurrentTabSelector();
  }

  onResize() {
    if (this.currentId) {
      this.setSliderCss();
    }
  }

  checkTabContainerPosition() {
    let offset = $('.hero-header').offset().top + $('.hero-header').height() - this.tabContainerHeight;
    if ($(window).scrollTop() > offset) {
      $('.hero-navbar').addClass('hero-navbar-top');
    } else {
      $('.hero-navbar').removeClass('hero-navbar-top');
    }
  }

  findCurrentTabSelector(element) {
    let newCurrentId;
    let newCurrentTab;
    let self = this;
    $('.hero-nav-link').each(function () {
      let id = $(this).attr('href');
      let offsetBottom = $(id).offset().top + $(id).height() - self.tabContainerHeight;
      let offsetTop = $(id).offset().top - self.tabContainerHeight;
      if ($(window).scrollTop() > offsetTop && $(window).scrollTop() < offsetBottom) {
        newCurrentId = id;
        newCurrentTab = $(this);
      }
    });
    if (this.currentId != newCurrentId || this.currentId === null) {
      this.currentId = newCurrentId;
      this.currentTab = newCurrentTab;
      this.setSliderCss();
    }
  }

  setSliderCss() {
    let width = 0;
    let left = 0;
    if (this.currentTab) {
      width = this.currentTab.css('width');
      left = this.currentTab.offset().left;
    }
    $('.hero-slider').css('width', width);
    $('.hero-slider').css('left', left);
  }
}

new StickyNavigation();

let markers = [
  { name: 'Saint-P', lat: 59.93105, lng: 30.3609 },
  { name: 'Brest', lat: 52.0996, lng: 23.76366 },
  { name: 'Moscow', lat: 55.75582, lng: 37.6173 },
  { name: 'Jerusalem', lat: 31.76831, lng: 35.21371 },
  { name: 'RG', lat: 32.06842, lng: 34.82478 },
];

const btn = document.getElementById('next');
let map = document.querySelector('iframe');
let btnNext = document.getElementById('next');

btnNext.addEventListener('click')



/*
document.getElementById('next').addEventListener('click', function () {
    console.log(markers);
    for (let i = 0; i < 5; i++) {
      console.log('48.1293954,11.556663');


  }

}); */
/*
$(document).ready(function ()
  {
    $(".btn").on('click', function ()
    {
      for (let i = 0; i < 5; i++) {

          // newLocation( markers[i][1], castles[i][2]);
          console.log(i, markers[0].name);


      }

    });
  }) */
//Setting Location with jQuery
/*   $(document).ready(function ()
  {
      $(".btn").on('click', function ()
      {
        newLocation(48.1293954,11.556663);
      });

      $(".btn").on('click', function ()
      {
        newLocation(40.7033127,-73.979681);
      });

      $(".btn").on('click', function ()
      {
        newLocation(55.749792,37.632495);
      });
  }); */

/*
  var map;
  var castles = [
    ['windsorcastle', 51.483860, -0.606490],
    ['leedscastle', 51.248844, -0.630249],
    ['dovercastle', 51.129524, -1.321235],
    ['warwickcastle', 52.279472, -1.585041]
  ]
  const btn = document.getElementById('next');
 */
/*   function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {
        lat: -34.397,
        lng: 150.644
      },
      zoom: 8
    });

    var bounds = new google.maps.LatLngBounds();
    for (i = 0; i < castles.length; i++) {
      var marker = new google.maps.Marker({
        position: {
          lat: castles[i][1],
          lng: castles[i][2]
        },
        title: castles[i][0],
        map: map
      });
      bounds.extend(marker.getPosition());
    }
    map.fitBounds(bounds);
    function newLocation(newLat,newLng)
  {

      map.setCenter({
          lat : newLat,
          lng : newLng
      });
  }
  btn.addEventListener('click', newLocation(59.93105, 30.3609))
  }

 */
/*   btn.addEventListener('click',(castles) => {
    for (i = 0; i < castles.length; i++) {
        newLocation(castles[i][1],castles[i][2])
    }
  })
 */
/*   btn.addEventListener('click', (castles) => {
    for (i = 0; i < castles.length; i++) {
        console.log('work' + castles[i][1], castles[i][2]);
        map.setCenter(new google.maps.LatLng(castles[i][1], castles[i][2]));
        map.setZoom(15);
    }
}) */

/*    $(".btn").click(function(castles) {
        for (i = 0; i < castles.length; i++) {
            console.log('work' + castles[i][1], castles[i][2]);
            map.setCenter(new google.maps.LatLng(castles[i][1], castles[i][2]));
            map.setZoom(15);
        } */
/*      console.log(this.dataset.lat + "," + this.dataset.lng);
      map.setCenter(new google.maps.LatLng(this.dataset.lat, this.dataset.lng));
      map.setZoom(15); */

/* function initMap() {
    let map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: markers[1],
      mapId:'39388f2f24330e28',

    });
    for (let i = 0; i < markers.length; i++){
        new google.maps.Marker({
            position: markers[i],
            map,
            title: markers[i].name,
          });
      }
  } */

/* const prevBtn = document.getElementById('next');



  prevBtn.addEventListener('click',function(){
    for (i = 0; i < markers.length; i++) {
        let map = new google.maps.Map(document.getElementById("map"), {
            zoom: 4,
            center: markers[i],
            mapId:'39388f2f24330e28',
          });
          new google.maps.Marker({
            position: markers[i],
            map,
            title: markers[i].name,
          });
    }
  })
 */

/*   const marker = new google.maps.Marker({
      position: markers[0],
      map: map,
    }); */
/*
let map;
function initialize()
{
  map = new google.maps.Map(document.getElementById('map'), {
    center: new google.maps.LatLng(59.93105, 30.3609),//Setting Initial Position
    zoom: 10
  });

}

google.maps.event.addDomListener(window, 'load', initialize);

let markers = [
    {'lat': 59.93105,
    'lng': 30.3609},
    {'lat': 52.0996,
    'lng': 23.76366},
    {'lat': 55.75582,
    'lng': 37.6173},
    {'lat': 31.76831,
    'lng': 35.21371},
    {'lat': 32.06842,
    'lng': 34.82478},
]
function newLocation(newLat,newLng)
{
	map.setCenter({
		lat : newLat,
		lng : newLng
	});
}
const prevBtn = document.getElementById('next');
prevBtn.addEventListener('click', function location(map) {
    map.setCenter(new google.maps.LatLng(this.dataset.lat, this.dataset.lng));
    map.setZoom(15);
   for (let i = 0; i < arr.length; i++){

        center: new google.maps.LatLng(arr[i].lat, arr[i].lng)
      map.setCenter({
            lat : arr[i].lat,
            lng : arr[i].lng
        });
    }
})
*/
//Setting Location with jQuery
// $(document).ready(function ()
// {
//     $(".btn").on('click', function ()
//     {
// 	  newLocation(48.1293954,11.556663);
// 	});

// 	$(".btn").on('click', function ()
//     {
// 	  newLocation(40.7033127,-73.979681);
// 	});

//     $(".btn").on('click', function ()
//     {
// 	  newLocation(55.749792,37.632495);
// 	});
// });

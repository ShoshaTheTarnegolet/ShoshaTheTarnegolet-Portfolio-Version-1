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


// let map = document.getElementById('map-block')
let btnNext = document.getElementById('next');
let prev = document.getElementById('prev');
let arr = [1, 3, 5, 6]


let curNum = 0;
  function nextFunction(){
    console.log(curNum)
    if (curNum === 4) {
        curNum = 0;
    }
    else {
        curNum++;
    }
}

const btn = document.getElementById('button');
btn.addEventListener('click',nextFunction());


document.querySelector('button').addEventListener('click', nextFunction());

/*  let mpLinks = ['https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255807.82677506623!2d29.814501564747133!3d59.94046099369754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696378cc74a65ed%3A0x6dc7673fab848eff!2z0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LMsINCg0L7RgdGB0LjRjw!5e0!3m2!1sru!2sil!4v1634114475026!5m2!1sru!2sil','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d511634.7094831512!2d29.534291675062278!3d59.93922592045905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696378cc74a65ed%3A0x6dc7673fab848eff!2z0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LMsINCg0L7RgdGB0LjRjw!5e0!3m2!1sru!2sil!4v1634110498222!5m2!1sru!2sil',
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78449.31346389651!2d23.632848642683005!3d52.08808417693623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47210c0223630975%3A0x4d319ea41f64ae99!2z0JHRgNC10YHRgiwg0JHQtdC70LDRgNGD0YHRjA!5e0!3m2!1sru!2sil!4v1634114658799!5m2!1sru!2sil',
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d577325.3463358729!2d36.82514154725681!3d55.5815244850025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2z0JzQvtGB0LrQstCwLCDQoNC-0YHRgdC40Y8!5e0!3m2!1sru!2sil!4v1634114751880!5m2!1sru!2sil', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108513.53178063802!2d35.105319225618466!3d31.796445332262792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502d7d634c1fc4b%3A0xd96f623e456ee1cb!2z0JjQtdGA0YPRgdCw0LvQuNC8!5e0!3m2!1sru!2sil!4v1634114845056!5m2!1sru!2sil', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27047.23497516602!2d34.80879391919583!3d32.07183511217383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4c86e794e4ad%3A0x2d00bf3ee717526f!2z0KDQsNC80LDRgi3Qk9Cw0L0!5e0!3m2!1sru!2sil!4v1634114865191!5m2!1sru!2sil']; */

/* $(document).ready(function ()
  {
let i = 0;
      $(".btn").on('click', function ()
      {
    console.log('work', i, maplinks);
    i++;
      })

  }) */
/*   $(document).ready(function() {
    setInterval(window.onload = function(){
      let i = 0;
      $(".btn").on('click', function ()
      {
    console.log('work', i, maplinks);
    i++;
})
    })
  }) */



  let mpLinks = [
    '<iframe id="googleMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217027.54124405383!2d35.03527392699861!3d31.796241909457528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502d7d634c1fc4b%3A0xd96f623e456ee1cb!2z0JjQtdGA0YPRgdCw0LvQuNC8!5e0!3m2!1sru!2sil!4v1634110612914!5m2!1sru!2sil" allowfullscreen="" loading="lazy"></iframe>',
  '<iframe id="googleMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54094.49360113373!2d34.791283995196025!3d32.071795134662096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4c86e794e4ad%3A0x2d00bf3ee717526f!2z0KDQsNC80LDRgi3Qk9Cw0L0!5e0!3m2!1sru!2sil!4v1634110638443!5m2!1sru!2sil" allowfullscreen="" loading="lazy"></iframe>',  '<iframe id="googleMap"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d511634.7094831512!2d29.534291675062278!3d59.93922592045905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696378cc74a65ed%3A0x6dc7673fab848eff!2z0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LMsINCg0L7RgdGB0LjRjw!5e0!3m2!1sru!2sil!4v1634110498222!5m2!1sru!2sil"allowfullscreen=""></iframe>'];




   btnNext.addEventListener("click", (e) => {
    e.preventDefault();
    let i = 0;

    console.log(i)
    if (i === 3){
      i = 0;
      console.log('be')
    } else {
      console.log(i)
    map.innerHTML = mpLinks[i+1];
    }
    i= i + 1;
  })



   /*  btnNext.addEventListener("click", () => {
      let i = 0;
      console.dir(map);
      console.log(i);
      map.innerHTML = mpLinks[i+1];
      i = i + 1; */
     /*  if (i == 4){

        map.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255807.82677506623!2d29.814501564747133!3d59.94046099369754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696378cc74a65ed%3A0x6dc7673fab848eff!2z0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LMsINCg0L7RgdGB0LjRjw!5e0!3m2!1sru!2sil!4v1634114475026!5m2!1sru!2sil';
      } else { */
        // console.log('work', i, mpLinks[i]);








    /*     // console.dir(map);
        map.src = mpLinks[i];
        i+=1;
         if (i == 4){
        console.dir(map);
        map.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255807.82677506623!2d29.814501564747133!3d59.94046099369754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696378cc74a65ed%3A0x6dc7673fab848eff!2z0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LMsINCg0L7RgdGB0LjRjw!5e0!3m2!1sru!2sil!4v1634114475026!5m2!1sru!2sil';
        i = 0;
         } */

   /*  if( i > ){
      console.log(mpLinks[0])
      map.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255807.82677506623!2d29.814501564747133!3d59.94046099369754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696378cc74a65ed%3A0x6dc7673fab848eff!2z0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LMsINCg0L7RgdGB0LjRjw!5e0!3m2!1sru!2sil!4v1634114475026!5m2!1sru!2sil';
      i = 1;
    } *
}

let mapLinks = {
  Spb: '<iframe id="googleMap"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d511634.7094831512!2d29.534291675062278!3d59.93922592045905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696378cc74a65ed%3A0x6dc7673fab848eff!2z0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LMsINCg0L7RgdGB0LjRjw!5e0!3m2!1sru!2sil!4v1634110498222!5m2!1sru!2sil"allowfullscreen=""></iframe>',
  Brest: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78449.31346389651!2d23.632848642683005!3d52.08808417693623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47210c0223630975%3A0x4d319ea41f64ae99!2z0JHRgNC10YHRgiwg0JHQtdC70LDRgNGD0YHRjA!5e0!3m2!1sru!2sil!4v1634114658799!5m2!1sru!2sil',
  Moscow: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d577325.3463358729!2d36.82514154725681!3d55.5815244850025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2z0JzQvtGB0LrQstCwLCDQoNC-0YHRgdC40Y8!5e0!3m2!1sru!2sil!4v1634114751880!5m2!1sru!2sil',
  Jerusalem: '<iframe id="googleMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217027.54124405383!2d35.03527392699861!3d31.796241909457528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502d7d634c1fc4b%3A0xd96f623e456ee1cb!2z0JjQtdGA0YPRgdCw0LvQuNC8!5e0!3m2!1sru!2sil!4v1634110612914!5m2!1sru!2sil" allowfullscreen="" loading="lazy"></iframe>',
  RG: '<iframe id="googleMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54094.49360113373!2d34.791283995196025!3d32.071795134662096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4c86e794e4ad%3A0x2d00bf3ee717526f!2z0KDQsNC80LDRgi3Qk9Cw0L0!5e0!3m2!1sru!2sil!4v1634110638443!5m2!1sru!2sil" allowfullscreen="" loading="lazy"></iframe>'
}


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

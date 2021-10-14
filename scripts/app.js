/* animate block color */
let observedEl = document.querySelectorAll('.col-animate');
let videoBlock = document.getElementById('video');
let mapBlock = document.getElementById('map');

const options = {
  root: null,
  threshold: 0.7,
};

const inViewCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      modify(entry.target);
    }
  });
};

let observer = new IntersectionObserver(inViewCallback, options);
observedEl.forEach((el) => {
  observer.observe(el);
});

function modify(x) {
  if (x.id === 'first-animate') {
    x.classList.add('animate');
  } else {
    x.classList.add('animate2');
  }
}

/* sticky nav */
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
    let left = 0;
    if (this.currentTab) {
      left = this.currentTab.offset().left;
    }
  }
}

new StickyNavigation();

/* map navigate */
let sPb =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d511634.7094831512!2d29.534291675062278!3d59.93922592045905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696378cc74a65ed%3A0x6dc7673fab848eff!2z0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LMsINCg0L7RgdGB0LjRjw!5e0!3m2!1sru!2sil!4v1634232792177!5m2!1sru!2sil';
let brest =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78449.31346389651!2d23.632848642683005!3d52.08808417693623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47210c0223630975%3A0x4d319ea41f64ae99!2z0JHRgNC10YHRgiwg0JHQtdC70LDRgNGD0YHRjA!5e0!3m2!1sru!2sil!4v1634114658799!5m2!1sru!2sil';
let moscow =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d577325.3463358729!2d36.82514154725681!3d55.5815244850025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2z0JzQvtGB0LrQstCwLCDQoNC-0YHRgdC40Y8!5e0!3m2!1sru!2sil!4v1634114751880!5m2!1sru!2sil';
let jerusalem = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217027.54124405383!2d35.03527392699861!3d31.796241909457528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502d7d634c1fc4b%3A0xd96f623e456ee1cb!2z0JjQtdGA0YPRgdCw0LvQuNC8!5e0!3m2!1sru!2sil!4v1634110612914!5m2!1sru!2sil';
let rG = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54094.49360113373!2d34.791283995196025!3d32.071795134662096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4c86e794e4ad%3A0x2d00bf3ee717526f!2z0KDQsNC80LDRgi3Qk9Cw0L0!5e0!3m2!1sru!2sil!4v1634110638443!5m2!1sru!2sil';

let array = [sPb, brest, moscow, jerusalem, rG];
let iframe = document.getElementById('iframe');
let btnNext = document.getElementById('next');
let prev = document.getElementById('prev');
let i = 0;

function clickNext() {
  if (i == 4) {
    i = 0;
    iframe.setAttribute('src', array[i]);
  } else {
    i++;
    iframe.setAttribute('src', array[i]);
    console.log(i);
  }
}

function clickPrev() {
  if (i == 0) {
    i = array.length - 1;
    iframe.setAttribute('src', array[i]);
    console.log(i);
  } else {
    i--;
    iframe.setAttribute('src', array[i]);
  }
}

btnNext.addEventListener('click', clickNext);
prev.addEventListener('click', clickPrev);

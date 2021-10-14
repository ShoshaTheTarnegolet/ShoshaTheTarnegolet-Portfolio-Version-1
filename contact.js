const calendarBtn = document.getElementById('calendarBtn');
const modal = document.getElementById('modal');
const contactSection = document.getElementById('contact');
const closeButton = document.getElementById('close');

calendarBtn.addEventListener('click',showModal);

function showModal() {
    modal.style.visibility = 'visible';
// contactSection.classList.toggle('blur');
}
function hideModal() {
    modal.style.visibility = 'hidden';
}

closeButton.addEventListener('click', hideModal);
/* modal ends
const calend = document.getElementById('date');
calend.addEventListener('change', () => {
    console.dir(calend.value);
})
*/
/* ca;endar input */
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

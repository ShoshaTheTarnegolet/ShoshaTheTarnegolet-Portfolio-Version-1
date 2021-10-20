/* calendar and modal */

const button = document.getElementById('calendarBtn');
const closeButton = document.getElementById('close');
const modal = document.getElementById('modal-container');
const contactSections = document.getElementById('contact');

button.addEventListener('click', () => {
  modal.classList.add('one');
  contactSections.classList.add('modal-active');
  if (modal.classList.contains('out')) {
    modal.classList.remove('out');
  }
});

closeButton.addEventListener('click', () => {
  contactSections.classList.remove('modal-active');
  modal.classList.toggle('out');
  modal.classList.remove('one');
});

/* sticky header and nav */
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

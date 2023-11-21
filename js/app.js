const handleReadMore = (e) => {
  const el = e.target.parentElement.parentElement.parentElement.parentElement.parentElement;
  const prev = document.getElementsByClassName('o1')[0];
  prev.classList.remove('o1');
  el.classList.add('o1');
  const rmTags = el.getElementsByTagName('span')
  const addTags = prev.getElementsByTagName('span');
  Object.values(rmTags).map(tag => tag.classList.toggle('hide-more'));
  Object.values(addTags).map(tag => tag.classList.toggle('hide-more'));
}

const handleNavbar = (remove) => {
  const btn = document.getElementById('ham-btn');
  const menu = document.getElementById('nav-menu');
  if(remove) {
  btn.classList.remove('toggle');
  menu.classList.add('hide-nav');
  } else {
  btn.classList.toggle('toggle');
  menu.classList.toggle('hide-nav');
  }
}


// scroll navbar
const navHeight = 55;
// the point the scroll starts from (in px)
let lastScrollY = 0;
// how far to scroll (in px) before triggering
const delta = 7;
// function to run on scrolling
function scrolled() {
  const nav = document.getElementById("header");
  let sy = window.scrollY;
  if(sy < 200) {
    nav.classList.add("top");
  } else {
    nav.classList.remove("top");
  }
  // only trigger if scrolled more than delta
  if (Math.abs(lastScrollY - sy) > delta) {
    // scroll down -> hide nav bar
    if (sy > lastScrollY && sy > navHeight) {
      nav.classList.add("nav-up");
    } 
    // scroll up -> show nav bar
    else if (sy < lastScrollY) {
      nav.classList.remove("nav-up");
    }
   // update current scroll point
   lastScrollY = sy 
  }
}

// Add event listener & debounce so not constantly checking for scroll
let didScroll = false;
window.addEventListener("scroll", function(e){
  didScroll = true;
});

setInterval(function() {
  if (didScroll) {
    scrolled();
    handleNavbar(1);
    didScroll = false;
   }
}, 250)


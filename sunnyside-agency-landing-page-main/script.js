const hambEl = document.querySelector('.hamburger');
const mobNavEl = document.querySelector('.mobile-nav')

let mobNavOn = false;
hambEl.addEventListener('click', function(e) {

  if(mobNavOn == false) {

    mobNavEl.style.opacity = '1';
    mobNavOn = !mobNavOn
  } else {
    mobNavEl.style.opacity = '0';
    mobNavOn = !mobNavOn
  }
})

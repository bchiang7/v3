$(function() {

  const d = new Date();
  const hours = d.getHours();
  const nighttime = (hours >= 19) || (hours <= 7); // 7pm <= hours <= 7am
  const body = document.querySelector('body');
  const toggle = document.getElementById('toggle');
  const input = document.getElementById('switch');

  if (nighttime) {
    input.checked = true;
    body.classList.add('night');
  }

  toggle.addEventListener('click', function() {
    const isChecked = input.checked;
    if (isChecked) {
      body.classList.remove('night');
    } else {
      body.classList.add('night');
    }
  });

  const introHeight = document.querySelector('.intro').offsetHeight;
  const topButton = document.getElementById('top-button');
  const $topButton = $('#top-button');

  window.addEventListener('scroll', function() {
    if (window.scrollY > introHeight) {
      $topButton.fadeIn();
    } else {
      $topButton.fadeOut();
    }
  }, false);

  topButton.addEventListener('click', function() {
    $('html, body').animate({ scrollTop: 0 }, 500);
  });

});

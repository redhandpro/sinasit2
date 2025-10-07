const words = document.querySelectorAll('.content ul li');
let index = 0;

setInterval(() => {
  words.forEach(w => w.style.opacity = 0);
  words[index].style.opacity = 1;
  index = (index + 1) % words.length;
}, 1500);
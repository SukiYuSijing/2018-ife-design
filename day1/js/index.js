var btn = document.getElementById('change-btn'),
	title = document.getElementById("sch-title"),
	bar = document.getElementById("sty-bar");

btn.addEventListener('click',function() {
  title.classList.toggle("title-blue");
  bar.classList.toggle("bar-display");
})

title.addEventListener('transitionend',function() {
  title.classList.remove('title-blue');
  bar.classList.remove("bar-display");
})
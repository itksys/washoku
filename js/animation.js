const observer = new IntersectionObserver((entries) => {
	for(const e of entries) {
		if(e.isIntersecting) {
		e.target.classList.add("in");
		}
	}
}, {
	threshold: 0.2,
});

//TOPページ
const $menuItems = document.querySelectorAll('.menu-item');
const $infoImgs = document.querySelectorAll('.information-img img');
$menuItems?.forEach((e) => {
	e.classList.add("animation");
	observer.observe(e);
});
$infoImgs?.forEach((e) => {
	e.classList.add("animation");
	observer.observe(e);
});


//MENUページ
const $menuImgs = document.querySelectorAll('.menu-category img');
$menuImgs?.forEach((e) => {
	e.classList.add("animation");
	observer.observe(e);
});
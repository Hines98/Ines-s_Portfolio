// Header Toggle
let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function(e) {
	document.querySelector('body').classList.toggle('mobile-nav-active');
	this.classList.toggle('fa-xmark')
})

// Typing Effect
let typed = new Typed('#auto-input', {
	strings: ['Front-End Developer!', 'Web Designer!', 'YouTuber!'],
	typeSpeed: 90,
	backSpeed: 90,
	backDelay: 100,
	loop: true,
})

// Get All Links
let navLinks = document.querySelectorAll('nav ul li a')

let sections = document.querySelectorAll('section')

window.addEventListener('scroll', function(){
	const scrollPos = window.scrollY + 20
	sections.forEach(section => {
		if(scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)){
			navLinks.forEach(link => {
				link.classList.remove('active');
				if(section.getAttribute('id') === link.getAttribute('href').substring(1)) {
					link.classList.add('active')
				}
			});
		}
	});
});
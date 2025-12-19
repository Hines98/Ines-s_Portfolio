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

// ==================== CAROUSEL DE PROJETS ====================
document.addEventListener('DOMContentLoaded', function() {
    const projectsContainer = document.getElementById('projectsContainer');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const paginationDots = document.getElementById('paginationDots');
    
    // Récupérer tous les projets
    const allProjects = Array.from(document.querySelectorAll('.port-item'));
    
    // Configuration
    const projectsPerPage = 6;
    const totalPages = Math.ceil(allProjects.length / projectsPerPage);
    let currentPage = 1;
    
    // Marquer les projets avec leur numéro de page
    allProjects.forEach((project, index) => {
        const pageNumber = Math.floor(index / projectsPerPage) + 1;
        project.setAttribute('data-page', pageNumber);
    });
    
    // Fonction pour afficher la page
    function showPage(pageNumber) {
        // Cacher tous les projets
        allProjects.forEach(project => {
            project.style.display = 'none';
            project.classList.remove('active');
        });
        
        // Afficher les projets de la page actuelle
        const startIndex = (pageNumber - 1) * projectsPerPage;
        const endIndex = startIndex + projectsPerPage;
        
        for (let i = startIndex; i < endIndex && i < allProjects.length; i++) {
            allProjects[i].style.display = 'block';
            // Animation d'apparition avec un léger délai
            setTimeout(() => {
                allProjects[i].classList.add('active');
            }, (i - startIndex) * 50);
        }
        
        // Mettre à jour les boutons
        updateButtons();
        updatePaginationDots();
    }
    
    // Fonction pour mettre à jour l'état des boutons
    function updateButtons() {
        // Désactiver/activer les flèches selon la page
        if (currentPage === 1) {
            prevBtn.classList.add('disabled');
        } else {
            prevBtn.classList.remove('disabled');
        }
        
        if (currentPage === totalPages) {
            nextBtn.classList.add('disabled');
        } else {
            nextBtn.classList.remove('disabled');
        }
        
        // Cacher les flèches s'il n'y a qu'une seule page
        if (totalPages <= 1) {
            prevBtn.style.display = 'none';
            nextBtn.style.display = 'none';
        } else {
            prevBtn.style.display = 'flex';
            nextBtn.style.display = 'flex';
        }
    }
    
    // Fonction pour créer les points de pagination
    function createPaginationDots() {
        paginationDots.innerHTML = '';
        
        // Ne créer des points que s'il y a plus d'une page
        if (totalPages > 1) {
            for (let i = 1; i <= totalPages; i++) {
                const dot = document.createElement('span');
                dot.classList.add('dot');
                dot.setAttribute('data-page', i);
                
                // Événement au clic sur un point
                dot.addEventListener('click', function() {
                    currentPage = i;
                    showPage(currentPage);
                });
                
                paginationDots.appendChild(dot);
            }
        }
    }
    
    // Fonction pour mettre à jour les points de pagination
    function updatePaginationDots() {
        const dots = document.querySelectorAll('#paginationDots .dot');
        dots.forEach((dot, index) => {
            if (index + 1 === currentPage) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }
    
    // Événements des boutons
    prevBtn.addEventListener('click', function() {
        if (currentPage > 1) {
            currentPage--;
            showPage(currentPage);
        }
    });
    
    nextBtn.addEventListener('click', function() {
        if (currentPage < totalPages) {
            currentPage++;
            showPage(currentPage);
        }
    });
    
    // Support du clavier (flèches gauche/droite)
    document.addEventListener('keydown', function(e) {
        // Vérifier si l'utilisateur est dans la section portfolio
        const portfolioSection = document.getElementById('portfolio');
        const rect = portfolioSection.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom >= 0;
        
        if (isInViewport) {
            if (e.key === 'ArrowLeft' && currentPage > 1) {
                currentPage--;
                showPage(currentPage);
            } else if (e.key === 'ArrowRight' && currentPage < totalPages) {
                currentPage++;
                showPage(currentPage);
            }
        }
    });
    
    // Initialisation
    createPaginationDots();
    showPage(currentPage);
});

// ==================== CAROUSEL DE COMPETENCES ====================
document.addEventListener('DOMContentLoaded', function() {
    const servicesContainer = document.getElementById('servicesContainer');
    const prevBtnServices = document.getElementById('prevBtnServices');
    const nextBtnServices = document.getElementById('nextBtnServices');
    const paginationDotsServices = document.getElementById('paginationDotsServices');
    
    // Récupérer toutes les compétences
    const allServices = Array.from(document.querySelectorAll('.service-box'));
    
    // Configuration
    const servicesPerPage = 6;
    const totalPagesServices = Math.ceil(allServices.length / servicesPerPage);
    let currentPageServices = 1;
    
    // Marquer les compétences avec leur numéro de page
    allServices.forEach((service, index) => {
        const pageNumber = Math.floor(index / servicesPerPage) + 1;
        service.setAttribute('data-page', pageNumber);
    });
    
    // Fonction pour afficher la page
    function showPageServices(pageNumber) {
        // Cacher toutes les compétences
        allServices.forEach(service => {
            service.style.display = 'none';
            service.classList.remove('active');
        });
        
        // Afficher les compétences de la page actuelle
        const startIndex = (pageNumber - 1) * servicesPerPage;
        const endIndex = startIndex + servicesPerPage;
        
        for (let i = startIndex; i < endIndex && i < allServices.length; i++) {
            allServices[i].style.display = 'flex';
            // Animation d'apparition avec un léger délai
            setTimeout(() => {
                allServices[i].classList.add('active');
            }, (i - startIndex) * 50);
        }
        
        // Mettre à jour les boutons
        updateButtonsServices();
        updatePaginationDotsServices();
    }
    
    // Fonction pour mettre à jour l'état des boutons
    function updateButtonsServices() {
        // Désactiver/activer les flèches selon la page
        if (currentPageServices === 1) {
            prevBtnServices.classList.add('disabled');
        } else {
            prevBtnServices.classList.remove('disabled');
        }
        
        if (currentPageServices === totalPagesServices) {
            nextBtnServices.classList.add('disabled');
        } else {
            nextBtnServices.classList.remove('disabled');
        }
        
        // Cacher les flèches s'il n'y a qu'une seule page
        if (totalPagesServices <= 1) {
            prevBtnServices.style.display = 'none';
            nextBtnServices.style.display = 'none';
        } else {
            prevBtnServices.style.display = 'flex';
            nextBtnServices.style.display = 'flex';
        }
    }
    
    // Fonction pour créer les points de pagination
    function createPaginationDotsServices() {
        paginationDotsServices.innerHTML = '';
        
        // Ne créer des points que s'il y a plus d'une page
        if (totalPagesServices > 1) {
            for (let i = 1; i <= totalPagesServices; i++) {
                const dot = document.createElement('span');
                dot.classList.add('dot');
                dot.setAttribute('data-page', i);
                
                // Événement au clic sur un point
                dot.addEventListener('click', function() {
                    currentPageServices = i;
                    showPageServices(currentPageServices);
                });
                
                paginationDotsServices.appendChild(dot);
            }
        }
    }
    
    // Fonction pour mettre à jour les points de pagination
    function updatePaginationDotsServices() {
        const dots = document.querySelectorAll('#paginationDotsServices .dot');
        dots.forEach((dot, index) => {
            if (index + 1 === currentPageServices) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }
    
    // Événements des boutons
    prevBtnServices.addEventListener('click', function() {
        if (currentPageServices > 1) {
            currentPageServices--;
            showPageServices(currentPageServices);
        }
    });
    
    nextBtnServices.addEventListener('click', function() {
        if (currentPageServices < totalPagesServices) {
            currentPageServices++;
            showPageServices(currentPageServices);
        }
    });
    
    // Support du clavier (flèches gauche/droite)
    document.addEventListener('keydown', function(e) {
        // Vérifier si l'utilisateur est dans la section services
        const servicesSection = document.getElementById('services');
        const rect = servicesSection.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom >= 0;
        
        if (isInViewport) {
            if (e.key === 'ArrowLeft' && currentPageServices > 1) {
                currentPageServices--;
                showPageServices(currentPageServices);
            } else if (e.key === 'ArrowRight' && currentPageServices < totalPagesServices) {
                currentPageServices++;
                showPageServices(currentPageServices);
            }
        }
    });
    
    // Initialisation
    createPaginationDotsServices();
    showPageServices(currentPageServices);
});

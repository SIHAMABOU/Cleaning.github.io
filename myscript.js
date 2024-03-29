function showDropdown(element) {
	var dropdown = element.querySelector('.dropdown-menu');
	dropdown.style.display = 'block';
}

function hideDropdown(element) {
	var dropdown = element.querySelector('.dropdown-menu');
	dropdown.style.display = 'none';
}
const slides = [
    {
        imageUrl: "images/slide-1.jpg",
        tagLine: "<span>Professional Cleaning</span>SO FRESH & SO CLEAN... <br> WE PROMISE! ",
    },
    {
        imageUrl: "images/slide-2.jpg",
        tagLine: "<span>Professional Cleaning</span>SO FRESH & SO CLEAN... <br> WE PROMISE! ",
    },
    {
        imageUrl: "images/slide-3.jpg",
        tagLine: "<span>Professional Cleaning</span> SO FRESH & SO CLEAN... <br> WE PROMISE! ",
    },
   
];



	/* Sélectionne l'élément du DOM avec la classe "dots" et le stocke dans la variable dotsContainer */
	const dotsContainer = document.querySelector(".dots");

	/* Sélectionne les éléments du DOM avec les classes "arrow_right" et "arrow_left" 
	et les stocke dans les variables arrowRight et arrowLeft */
	const arrowRight = document.querySelector(".arrow_right");
	const arrowLeft = document.querySelector(".arrow_left");


	const img = document.querySelector(".banner-img");
	const tagLine = document.querySelector("#banner p");

	let index = 0;


/*=============== BULLET POINTS ===============*/
	/* Fonction pour créer un bullet point dans le carrousel */
	function createDot(i) {

		/* Crée un élément div dans le DOM et lui ajoute la classe "dot" */
		const dot = document.createElement("div");
		dot.classList.add("dot");

		/* Ajoute le bullet point au conteneur de points (dotsContainer) */
		dotsContainer.appendChild(dot);

		
		dot.addEventListener("click", () => {
			updateCarousel(i);
		});

		
		if (i === index) {
			dot.classList.add("dot_selected");
		}
	}

	/* Fonction permettant d'afficher les bullet points du carrousel */
	function displayDots() {

		/* Parcours tous les slides et crée un bullet point pour chaque image */
		for (let i = 0; i < slides.length; i++) {
			createDot(i);
		}
	}

/*=============== CARROUSEL ===============*/
	/* Fonction permettant de mettre à jour le carrousel avec l'image 
	et le texte correspondant à un index donné */
	function updateCarousel(i) {
		
		/* Sélectionne tous les bullet points du carrousel */
		const selectDots = document.querySelectorAll(".dots .dot");

		/* Retire la classe "dot_selected" du point actuel */
		selectDots[index].classList.remove("dot_selected");

		/* Mise à jour de l'index actuel */
		index = i;

		/* Met à jour l'image et le texte du carrousel en fonction du nouvel index */
		img.src = slides[index].imageUrl;
		tagLine.innerHTML = slides[index].tagLine;

		/* Ajoute la classe "dot_selected" au nouveau bullet point */
		selectDots[index].classList.add("dot_selected");
	}

	/* Fonction permettant d'effectuer le défilement du carrousel vers la droite 
	ou la gauche dans la direction choisi */
	function slide(direction) {

		/* Sélectionne tous les points du carrousel */
		const selectDots = document.querySelectorAll(".dots .dot");

		/* Retire la classe "dot_selected" du bullet point actuel */
		selectDots[index].classList.remove("dot_selected");

		/*  Met à jour l'index en fonction de la direction */
		if (direction === "right") {
			index = (index + 1) % slides.length;
		} else {
			index = (index - 1 + slides.length) % slides.length;
		}

		/* Met à jour l'image et le texte du carrousel en fonction du nouvel index. */
		img.src = slides[index].imageUrl;
		tagLine.innerHTML = slides[index].tagLine;

		/* Ajoute la classe "dot_selected" au nouveau bullet point */
		selectDots[index].classList.add("dot_selected");
	}

/*=============== INTERACTION AVEC LES FLÈCHES & AUTOMATISATION ===============*/
	function slideRight() {
		slide("right");
	}

	function slideLeft() {
		slide("left");
	}

	/* Fonction permettant le défilement automatique du carrousel */
  function autoSlide() {
    autoSlideInterval = setInterval(() => {
        slideRight();
    }, 3000);  
  }	

	/* Ajout des Event Listeners aux flèches pour un défilement manuel */
	arrowRight.addEventListener("click", slideRight);
	arrowLeft.addEventListener("click", slideLeft);

	/* Ajoute un Event Listener pour arrêter le défilement automatique 
	lorsqu'une interaction utilisateur est détectée */
	dotsContainer.addEventListener("click", () => {
    clearInterval(autoSlideInterval);
    autoSlide();
});

/* Fonction utilisée pour précharger les images du carrousel. */
function preloadImages() {
    for (let i = 0; i < slides.length; i++) {
        const imageObj = new Image();
        imageObj.src = slides[i].imageUrl;
    }
}

/*=============== APPEL DE FONCTIONS ===============*/
  /* Démarrage du préchargement d'images */
  preloadImages();

	/* Démarrage du défilement automatique */
	autoSlide();

	/* Affichage des bullet points du carrousel */
	displayDots();


	

//Review JS Code

  var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
	autoplay: {
		delay: 3000,
		disableOnInteraction: true, 
	  },
  });

 
  document.addEventListener('DOMContentLoaded', function () {
    // Initialisation de Swiper
    var swiper = new Swiper('.swiper-container-2', {
      // Paramètres de configuration ici
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  });



  function startCountingAnimation(targetElement, targetValue, duration) {
    let currentValue = 0;
    const interval = duration / targetValue;

    const countingInterval = setInterval(() => {
      currentValue++;
      document.querySelector(targetElement).textContent = currentValue;

      if (currentValue >= targetValue) {
        clearInterval(countingInterval);
      }
    }, interval);
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Commencez l'animation lorsque l'élément est visible
        startCountingAnimation('.counter-1 span', 1500, 1000); 
        startCountingAnimation('.counter-2 span', 100, 2000);  
        startCountingAnimation('.counter-3 span', 30, 2000);   
        startCountingAnimation('.counter-4 span', 1000, 1000); 
        // Arrêtez d'observer une fois que l'animation a commencé
        observer.disconnect();
      }
    });
  });

  // Observer la section cible
  const targetElement = document.querySelector('.count');
  observer.observe(targetElement);




$(".carousel").owlCarousel({
	margin:10,
	loop:true,
	autoplay:true,
	autoplayTimeout:3000,
	autoplayHoverPause:false,
	responsive:{
		0:{
			items:1,
			nav:false
		},
		600:{
			items:2,
			nav:false
		},
		1000:{
			items:3,
			nav:false
		},
	}
})


function showSection(sectionId) {
    // Masquer tous les sections sauf celle spécifiée par l'ID
    document.querySelectorAll('.about > .container > .row > .col-md-6 > div[id^="about"]').forEach(function(section) {
      section.style.display = 'none';
    });
    // Afficher la section spécifiée par l'ID
    document.getElementById(sectionId).style.display = 'block';
  }

  window.onscroll = function () {
	scrollFunction();
  };

  function scrollFunction() {
	var scrollToTopBtn = document.getElementById("scrollToTopBtn");
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
	  scrollToTopBtn.style.display = "block";
	} else {
	  scrollToTopBtn.style.display = "none";
	}
  }

  // Fonction pour remonter en haut lors du clic sur le bouton
  function scrollToTop() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
  }

  // Ajoutez un gestionnaire d'événements au bouton de retour en haut
  document.getElementById("scrollToTopBtn").addEventListener("click", scrollToTop);

  
 

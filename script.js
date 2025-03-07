// Constantes pour les chemins des fichiers PDF CV
const cvPaths = {
    fr: './documents/cv_fr.pdf',
    en: './documents/cv_en.pdf',
    es: './documents/cv_es.pdf',  // Fallback to French version
    de: './documents/cv_de.pdf',  // Fallback to French version
    it: './documents/cv_it.pdf'   // Fallback to French version
};

// Traductions pour les différentes langues
const translations = {
    en: {
        // Navigation
        home: "Home",
        about: "About",
        projects: "Projects",
        skills: "Skills",
        experience: "Experience",
        contact: "Contact",

        // Boutons fixes
        schoolLink: "Discover my school",
        downloadCV: "Download CV",
        scrollDown: "Discover",

        // Header
        title: "Mechanical Engineering Student",
        
        // About section
        aboutTitle: "About Me",
        aboutText: `Hello! I'm Simon Adam, an engineering student at Centrale Lyon ENISE. Passionate about mechanics, robotics, and programming, I dedicate my free time to developing projects that integrate these different fields and I'm constantly seeking new challenges.

        I've led numerous design projects, particularly using SolidWorks, CATIA, and Fusion 360. Since joining ENISE, I've enriched my knowledge in engineering and management while applying my skills through various projects and collaborations.

        These experiences have allowed me to master a wide range of technologies and theoretical concepts while acquiring solid technical expertise and great adaptability in various contexts.

        As president of the school's robotics club, I've also developed project management and leadership skills. This role has allowed me to lead teams, coordinate ambitious projects, and guide club members in developing their technical and organizational skills.`,
        
        // Projects section
        projectsTitle: "My Projects",
        project1Title: "Food Industry Gripper",
        project1Desc: "Design of a gripping system for the food industry",
        project2Title: "Agricultural Special Machine",
        project2Desc: "Development of a special machine for automating wooden stake manufacturing",
        project3Title: "Automated Composter",
        project3Desc: "Design of a large-capacity composter with automation system",
        project4Title: "Electric Wheelbarrow",
        project4Desc: "Design of an electric wheelbarrow, combining ergonomics and performance",
        
        // Skills section
        skillsTitle: "Skills",
        skillCAD: "CAD CAM",
        skillProg: "Programming",
        skillInd: "Industrialization",
        skillLang: "Languages",
        
        // Experience section
        experienceTitle: "Where I Worked",
        experienceRole: "2024 • Engineering Assistant Internship",
        experienceDesc: "Implementation of a CAM system for 5-axis machining centers. Identification of technical dysfunctions and implementation of solutions.",
        
        // Contact section
        contactTitle: "Contact"
    },
    
    fr: {
        // Navigation
        home: "Accueil",
        about: "À Propos",
        projects: "Projets",
        skills: "Compétences",
        experience: "Expérience",
        contact: "Contact",

        // Boutons fixes
        schoolLink: "Découvrir mon école",
        downloadCV: "Télécharger CV",
        scrollDown: "Découvrir",
        
        // Header
        title: "Ingénieur en Génie Mécanique",
        
        // About section
        aboutTitle: "À Propos de Moi",
        aboutText: `Bonjour ! Je m'appelle Simon Adam, étudiant en ingénierie à Centrale Lyon ENISE. Passionné par la mécanique, la robotique et la programmation, je consacre mon temps libre à développer des projets intégrant ces différents domaines et je suis constamment en quête de nouveaux défis.

        J'ai mené de nombreux projets de conception, notamment sur SolidWorks, CATIA et Fusion 360. Depuis mon entrée à l'ENISE, j'ai enrichi mes connaissances en ingénierie et en management, tout en appliquant mes compétences à travers divers projets et collaborations.

        Ces expériences m'ont permis de maîtriser un large éventail de technologies et de concepts théoriques, tout en acquérant une expertise technique solide et une grande capacité d'adaptation dans des contextes variés.

        En tant que président du club de robotique de l'école, j'ai également développé des compétences en gestion de projet et en leadership. Ce rôle m'a permis de diriger des équipes, de coordonner des projets ambitieux et d'encadrer les membres du club dans le développement de leurs compétences techniques et organisationnelles.`,
        
        // Projects section
        projectsTitle: "Mes Projets",
        project1Title: "Préhenseur Agroalimentaire",
        project1Desc: "Conception d'un système de préhension pour l'industrie agroalimentaire",
        project2Title: "Machine Spéciale Agricole",
        project2Desc: "Développement d'une machine spéciale pour l'automatisation de la fabrication de pieux en bois",
        project3Title: "Composteur Automatisé",
        project3Desc: "Conception d'un composteur grande capacité avec système d'automatisation",
        project4Title: "Brouette Électrique",
        project4Desc: "Conception d'une brouette électrique, combinant ergonomie et performance",
        
        // Skills section
        skillsTitle: "Compétences",
        skillCAD: "FAO CAO",
        skillProg: "Programmation",
        skillInd: "Industrialisation",
        skillLang: "Langues",
        
        // Experience section
        experienceTitle: "Où J'ai Travaillé",
        experienceRole: "2024 • Stage Assistant Ingénieur",
        experienceDesc: "Mise en place d'un système de FAO pour les centres d'usinage 5 axes de l'atelier. Identification des dysfonctionnements techniques et mise en œuvre de solutions.",
        
        // Contact section
        contactTitle: "Contact"
    }  
};

/**
 * Fonction principale d'initialisation
 * Cette fonction est exécutée lorsque le DOM est entièrement chargé
 */
document.addEventListener('DOMContentLoaded', function() {
    // Initialiser les éléments de l'interface
    initLanguage();
    initThreeJS();
    initEventListeners();
    updateCopyrightYear();
    initScrollIndicator();
    
    // Afficher l'animation
    animate();
});

/**
 * Met à jour la langue de l'interface
 * @param {string} lang - Code de la langue (fr, en, es, de, it)
 */
function updateLanguage(lang) {
    // Vérifier si la langue demandée existe
    if (!translations[lang]) {
        console.error(`La langue ${lang} n'est pas disponible`);
        return;
    }
    
    // Mettre à jour tous les éléments avec l'attribut data-translate
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            if (element.tagName === 'DIV') {
                element.innerHTML = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    // Mettre à jour le lien de téléchargement du CV
    const cvDownloadLink = document.querySelector('.cv-download');
    if (cvDownloadLink) {
        const filePath = cvPaths[lang] || cvPaths.fr; // Fallback vers le CV français si la traduction n'existe pas
        cvDownloadLink.href = filePath;
        const fileName = `CV_Simon_Adam_${lang.toUpperCase()}.pdf`;
        cvDownloadLink.setAttribute('download', fileName);
    }
    
    // Mettre à jour l'attribut lang de la page
    document.documentElement.lang = lang;
    
    // Mettre à jour l'affichage du sélecteur de langue
    const currentLang = document.querySelector('.current-lang');
    if (currentLang) {
        currentLang.textContent = lang.toUpperCase();
    }
}

/**
 * Initialise le système de langues
 */
function initLanguage() {
    // Détection automatique de la langue du navigateur (fallback à fr)
    const browserLang = navigator.language.split('-')[0];
    // Si la langue du navigateur est l'anglais, on l'utilise, sinon on utilise le français
    const defaultLang = browserLang === 'en' ? 'en' : 'fr';
    
    // Appliquer la langue par défaut
    updateLanguage(defaultLang);
    
    // Configuration des boutons de langue
    const langOptions = document.querySelectorAll('.lang-option');
    langOptions.forEach(option => {
        option.addEventListener('click', function() {
            const lang = this.dataset.lang;
            updateLanguage(lang);
            
            // Fermer le menu déroulant
            const dropdownButton = document.querySelector('.dropdown-button');
            const dropdownContent = document.querySelector('.dropdown-content');
            if (dropdownButton && dropdownContent) {
                dropdownButton.classList.remove('active');
                dropdownContent.classList.remove('show');
            }
        });
    });
}

/**
 * Initialisation de Three.js pour l'animation de fond
 */
function initThreeJS() {
    try {
        // Création de la scène Three.js
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ 
            alpha: true,
            antialias: true 
        });
        
        // Configuration du canvas
        const canvas = document.getElementById('canvas-container');
        if (!canvas) {
            console.error("Element canvas-container introuvable");
            return;
        }
        
        renderer.setSize(window.innerWidth, window.innerHeight);
        canvas.appendChild(renderer.domElement);

        // Configuration des particules
        const particlesCount = Math.min(3000, window.innerWidth < 768 ? 1500 : 3000); // Réduire pour les mobiles
        const positions = new Float32Array(particlesCount * 3);
        const velocities = new Float32Array(particlesCount * 3);

        for (let i = 0; i < particlesCount * 3; i += 3) {
            positions[i] = (Math.random() - 0.5) * 20;
            positions[i + 1] = (Math.random() - 0.5) * 20;
            positions[i + 2] = (Math.random() - 0.5) * 20;
            
            velocities[i] = (Math.random() - 0.5) * 0.02;
            velocities[i + 1] = (Math.random() - 0.5) * 0.02;
            velocities[i + 2] = (Math.random() - 0.5) * 0.02;
        }

        const particlesGeometry = new THREE.BufferGeometry();
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const particlesMaterial = new THREE.PointsMaterial({
            size: window.innerWidth < 768 ? 0.03 : 0.05,
            color: 0x3498db,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending,
            sizeAttenuation: true
        });

        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);

        camera.position.z = 5;

        // Variables pour le contrôle de la souris
        let mouseX = 0;
        let mouseY = 0;
        let targetX = 0;
        let targetY = 0;

        // Enregistrer les variables dans window pour les rendre accessibles à la fonction d'animation
        window.threeJSVars = {
            scene,
            camera,
            renderer,
            particlesMesh,
            mouseX,
            mouseY,
            targetX,
            targetY,
            velocities
        };

        // Event listener pour suivre la position de la souris
        document.addEventListener('mousemove', onMouseMove);
        window.addEventListener('resize', onWindowResize);

    } catch (error) {
        console.error("Erreur lors de l'initialisation de Three.js:", error);
        // Afficher un message d'erreur dans le conteneur canvas
        const canvas = document.getElementById('canvas-container');
        if (canvas) {
            canvas.innerHTML = '<div class="fallback-background">Une erreur est survenue lors du chargement de l\'animation.</div>';
        }
    }
}

/**
 * Gestion du mouvement de la souris
 * @param {MouseEvent} event - L'événement de mouvement de la souris
 */
function onMouseMove(event) {
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

    // Mettre à jour les variables globales
    if (window.threeJSVars) {
        window.threeJSVars.mouseX = mouseX;
        window.threeJSVars.mouseY = mouseY;
    }
}

/**
 * Gestion du redimensionnement de la fenêtre
 */
function onWindowResize() {
    if (!window.threeJSVars) return;
    
    const { camera, renderer } = window.threeJSVars;
    
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

/**
 * Animation des particules Three.js
 */
function animate() {
    requestAnimationFrame(animate);
    
    if (!window.threeJSVars) return;
    
    const { 
        scene, 
        camera, 
        renderer, 
        particlesMesh, 
        targetX, 
        targetY, 
        mouseX, 
        mouseY,
        velocities 
    } = window.threeJSVars;
    
    // Mettre à jour les cibles avec un effet de lissage
    window.threeJSVars.targetX += (mouseX - window.threeJSVars.targetX) * 0.02;
    window.threeJSVars.targetY += (mouseY - window.threeJSVars.targetY) * 0.02;

    // Rotation de base des particules
    particlesMesh.rotation.x += 0.001;
    particlesMesh.rotation.y += 0.002;

    // Mise à jour des positions des particules
    const positions = particlesMesh.geometry.attributes.position.array;
    
    for (let i = 0; i < positions.length; i += 3) {
        positions[i] += velocities[i];
        positions[i + 1] += velocities[i + 1];
        positions[i + 2] += velocities[i + 2];

        // Inverser la direction si la particule sort des limites
        for (let j = 0; j < 3; j++) {
            if (Math.abs(positions[i + j]) > 10) {
                velocities[i + j] *= -1;
            }
        }
    }

    // Ajouter une réaction aux mouvements de la souris
    particlesMesh.rotation.x += window.threeJSVars.targetY * 0.0005;
    particlesMesh.rotation.y += window.threeJSVars.targetX * 0.0005;

    // Indiquer que les positions ont été mises à jour
    particlesMesh.geometry.attributes.position.needsUpdate = true;
    
    // Rendu de la scène
    renderer.render(scene, camera);
}

/**
 * Configuration de l'indicateur de défilement
 */
function initScrollIndicator() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (!scrollIndicator) return;
    
    // Gérer le clic sur l'indicateur pour faire défiler vers la section À propos
    scrollIndicator.addEventListener('click', () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            const offset = 100; // Pour tenir compte de la navbar fixe
            window.scrollTo({
                top: aboutSection.offsetTop - offset,
                behavior: 'smooth'
            });
        }
    });
    
    // Masquer l'indicateur lors du défilement
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            scrollIndicator.style.opacity = '0';
        } else {
            scrollIndicator.style.opacity = '1';
        }
    });
}

/**
 * Initialisation des différents event listeners
 */
function initEventListeners() {
    // Menu mobile toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navContainer = document.querySelector('.nav-container');
    
    if (menuToggle && navContainer) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navContainer.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', navContainer.classList.contains('active'));
            document.body.style.overflow = navContainer.classList.contains('active') ? 'hidden' : '';
        });
    }
    
    // Fermeture du menu lors du clic sur un lien
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (menuToggle && navContainer) {
                menuToggle.classList.remove('active');
                navContainer.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        });
    });
    
    // Gestion du menu déroulant des langues
    const dropdownButton = document.querySelector('.dropdown-button');
    const dropdownContent = document.querySelector('.dropdown-content');
    
    if (dropdownButton && dropdownContent) {
        dropdownButton.addEventListener('click', function(e) {
            e.stopPropagation();
            const isActive = dropdownButton.classList.toggle('active');
            dropdownContent.classList.toggle('show');
            dropdownButton.setAttribute('aria-expanded', isActive);
        });
    }
    
    // Fermeture du menu déroulant lors d'un clic en dehors
    document.addEventListener('click', function() {
        if (dropdownButton && dropdownContent) {
            dropdownButton.classList.remove('active');
            dropdownContent.classList.remove('show');
            dropdownButton.setAttribute('aria-expanded', 'false');
        }
    });
    
    // Empêcher la propagation des clics depuis le menu déroulant
    if (dropdownContent) {
        dropdownContent.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
    
    // Changer le style de la barre de navigation lors du défilement
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        const progressBar = document.querySelector('.progress-bar');
        
        if (nav) {
            if (window.scrollY > 50) {
                nav.style.background = 'rgba(0, 0, 0, 0.9)';
                nav.style.backdropFilter = 'blur(20px)';
            } else {
                nav.style.background = 'rgba(0, 0, 0, 0.1)';
                nav.style.backdropFilter = 'blur(10px)';
            }
        }
        
        // Mise à jour de la barre de progression
        if (progressBar) {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            progressBar.style.width = `${progress}%`;
            progressBar.setAttribute('aria-valuenow', Math.round(progress));
        }
    });
    
    // Liens d'ancrage avec défilement fluide
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (!target) return;
            
            const offset = 100; // Pour tenir compte de la navbar fixe
            window.scrollTo({
                top: target.offsetTop - offset,
                behavior: 'smooth'
            });
        });
    });
    
    // Configuration de l'observateur d'intersection pour les animations au défilement
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    // Observer les éléments à animer
    document.querySelectorAll('.project-card, .skill-card, .work-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
}

/**
 * Met à jour l'année de copyright dans le footer
 */
function updateCopyrightYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

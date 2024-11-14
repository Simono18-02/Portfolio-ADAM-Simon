document.addEventListener('DOMContentLoaded', function() {
    // Traductions
const translations = {
    en: {
        // Navigation
        home: "Home",
        about: "About",
        projects: "Projects",
        skills: "Skills",
        experience: "Experience",
        contact: "Contact",
        
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
        contactTitle: "Contact",
        
        // Download button
        downloadCV: "Download CV"
    },
    
    fr: {
        // Navigation
        home: "Accueil",
        about: "À Propos",
        projects: "Projets",
        skills: "Compétences",
        experience: "Expérience",
        contact: "Contact",
        
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
        contactTitle: "Contact",
        
        // Download button
        downloadCV: "Télécharger CV"
    },
    
    es: {
        // Navigation
        home: "Inicio",
        about: "Sobre Mí",
        projects: "Proyectos",
        skills: "Habilidades",
        experience: "Experiencia",
        contact: "Contacto",
        
        // Header
        title: "Ingeniero Mecánico",
        
        // About section
        aboutTitle: "Sobre Mí",
        aboutText: `¡Hola! Soy Simon Adam, estudiante de ingeniería en Centrale Lyon ENISE. Apasionado por la mecánica, la robótica y la programación, dedico mi tiempo libre a desarrollar proyectos que integran estos diferentes campos y estoy constantemente buscando nuevos desafíos.

        He dirigido numerosos proyectos de diseño, particularmente utilizando SolidWorks, CATIA y Fusion 360. Desde mi ingreso a ENISE, he enriquecido mis conocimientos en ingeniería y gestión, aplicando mis habilidades a través de diversos proyectos y colaboraciones.

        Estas experiencias me han permitido dominar una amplia gama de tecnologías y conceptos teóricos, mientras adquiría una sólida experiencia técnica y una gran capacidad de adaptación en diversos contextos.

        Como presidente del club de robótica de la escuela, también he desarrollado habilidades de gestión de proyectos y liderazgo. Este rol me ha permitido dirigir equipos, coordinar proyectos ambiciosos y guiar a los miembros del club en el desarrollo de sus habilidades técnicas y organizativas.`,
        
        // Projects section
        projectsTitle: "Mis Proyectos",
        project1Title: "Pinza para Industria Alimentaria",
        project1Desc: "Diseño de un sistema de agarre para la industria alimentaria",
        project2Title: "Máquina Agrícola Especial",
        project2Desc: "Desarrollo de una máquina especial para la automatización de la fabricación de estacas de madera",
        project3Title: "Compostador Automatizado",
        project3Desc: "Diseño de un compostador de gran capacidad con sistema de automatización",
        project4Title: "Carretilla Eléctrica",
        project4Desc: "Diseño de una carretilla eléctrica, combinando ergonomía y rendimiento",
        
        // Skills section
        skillsTitle: "Habilidades",
        skillCAD: "CAD CAM",
        skillProg: "Programación",
        skillInd: "Industrialización",
        skillLang: "Idiomas",
        
        // Experience section
        experienceTitle: "Donde He Trabajado",
        experienceRole: "2024 • Prácticas de Ingeniero Asistente",
        experienceDesc: "Implementación de un sistema CAM para centros de mecanizado de 5 ejes. Identificación de disfunciones técnicas e implementación de soluciones.",
        
        // Contact section
        contactTitle: "Contacto",
        
        // Download button
        downloadCV: "Descargar CV"
    },
    
    de: {
        // Navigation
        home: "Startseite",
        about: "Über Mich",
        projects: "Projekte",
        skills: "Fähigkeiten",
        experience: "Erfahrung",
        contact: "Kontakt",
        
        // Header
        title: "Maschinenbauingenieur",
        
        // About section
        aboutTitle: "Über Mich",
        aboutText: `Hallo! Ich bin Simon Adam, Ingenieurstudent an der Centrale Lyon ENISE. Mit Leidenschaft für Mechanik, Robotik und Programmierung widme ich meine Freizeit der Entwicklung von Projekten, die diese verschiedenen Bereiche integrieren, und bin ständig auf der Suche nach neuen Herausforderungen.

        Ich habe zahlreiche Designprojekte geleitet, insbesondere mit SolidWorks, CATIA und Fusion 360. Seit meinem Eintritt in die ENISE habe ich mein Wissen in Ingenieurwesen und Management erweitert und meine Fähigkeiten durch verschiedene Projekte und Kooperationen angewandt.

        Diese Erfahrungen haben es mir ermöglicht, ein breites Spektrum an Technologien und theoretischen Konzepten zu beherrschen und dabei solide technische Expertise und große Anpassungsfähigkeit in verschiedenen Kontexten zu erwerben.

        Als Präsident des Robotik-Clubs der Schule habe ich auch Projektmanagement- und Führungsfähigkeiten entwickelt. Diese Rolle hat es mir ermöglicht, Teams zu leiten, ambitionierte Projekte zu koordinieren und Clubmitglieder bei der Entwicklung ihrer technischen und organisatorischen Fähigkeiten zu unterstützen.`,
        
        // Projects section
        projectsTitle: "Meine Projekte",
        project1Title: "Greifer für die Lebensmittelindustrie",
        project1Desc: "Entwicklung eines Greifsystems für die Lebensmittelindustrie",
        project2Title: "Spezielle Landwirtschaftsmaschine",
        project2Desc: "Entwicklung einer Spezialmaschine zur Automatisierung der Holzpfahlherstellung",
        project3Title: "Automatisierter Komposter",
        project3Desc: "Entwicklung eines Großkapazität-Komposters mit Automatisierungssystem",
        project4Title: "Elektrische Schubkarre",
        project4Desc: "Entwicklung einer elektrischen Schubkarre, die Ergonomie und Leistung kombiniert",
        
        // Skills section
        skillsTitle: "Fähigkeiten",
        skillCAD: "CAD CAM",
        skillProg: "Programmierung",
        skillInd: "Industrialisierung",
        skillLang: "Sprachen",
        
        // Experience section
        experienceTitle: "Wo Ich Gearbeitet Habe",
        experienceRole: "2024 • Praktikum als Ingenieurassistent",
        experienceDesc: "Implementierung eines CAM-Systems für 5-Achsen-Bearbeitungszentren. Identifizierung technischer Störungen und Implementierung von Lösungen.",
        
        // Contact section
        contactTitle: "Kontakt",
        
        // Download button
        downloadCV: "Lebenslauf Herunterladen"
    },
    
    it: {
        // Navigation
        home: "Home",
        about: "Chi Sono",
        projects: "Progetti",
        skills: "Competenze",
        experience: "Esperienza",
        contact: "Contatti",
        
        // Header
        title: "Ingegnere Meccanico",
        
        // About section
        aboutTitle: "Chi Sono",
        aboutText: `Ciao! Sono Simon Adam, studente di ingegneria presso Centrale Lyon ENISE. Appassionato di meccanica, robotica e programmazione, dedico il mio tempo libero allo sviluppo di progetti che integrano questi diversi campi e sono costantemente alla ricerca di nuove sfide.

        Ho guidato numerosi progetti di design, in particolare utilizzando SolidWorks, CATIA e Fusion 360. Dal mio ingresso all'ENISE, ho arricchito le mie conoscenze in ingegneria e gestione, applicando le mie competenze attraverso vari progetti e collaborazioni.

        Queste esperienze mi hanno permesso di padroneggiare un'ampia gamma di tecnologie e concetti teorici, acquisendo una solida esperienza tecnica e una grande capacità di adattamento in vari contesti.

        Come presidente del club di robotica della scuola, ho anche sviluppato competenze di gestione dei progetti e leadership. Questo ruolo mi ha permesso di guidare team, coordinare progetti ambiziosi e guidare i membri del club nello sviluppo delle loro competenze tecniche e organizzative.`,
        
        // Projects section
        projectsTitle: "I Miei Progetti",
        project1Title: "Pinza per l'Industria Alimentare",
        project1Desc: "Progettazione di un sistema di presa per l'industria alimentare",
        project2Title: "Macchina Agricola Speciale",
        project2Desc: "Sviluppo di una macchina speciale per l'automazione della produzione di pali in legno",
        project3Title: "Compostiera Automatizzata",
        project3Desc: "Progettazione di una compostiera di grande capacità con sistema di automazione",
        project4Title: "Carriola Elettrica",
        project4Desc: "Progettazione di una carriola elettrica, che combina ergonomia e prestazioni",
        
        // Skills section
        skillsTitle: "Competenze",
        skillCAD: "CAD CAM",
        skillProg: "Programmazione",
        skillInd: "Industrializzazione",
        skillLang: "Lingue",
        
        // Experience section
        experienceTitle: "Dove Ho Lavorato",
        experienceRole: "2024 • Stage come Assistente Ingegnere",
        experienceDesc: "Implementazione di un sistema CAM per centri di lavorazione a 5 assi. Identificazione di malfunzionamenti tecnici e implementazione di soluzioni.",
        
        // Contact section
        contactTitle: "Contatti",
        
        // Download button
        downloadCV: "Scarica CV"
    }
};

    // Fonction de mise à jour de la langue
    function updateLanguage(lang) {
        if (!translations[lang]) return;
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
        document.documentElement.lang = lang;
    }

    // Configuration Three.js
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
        alpha: true,
        antialias: true 
    });
    
    const canvas = document.getElementById('canvas-container');
    if (canvas) {
        renderer.setSize(window.innerWidth, window.innerHeight);
        canvas.appendChild(renderer.domElement);
    }

    // Particules
    const particlesCount = 3000;
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
        size: 0.05,
        color: 0x3498db,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    camera.position.z = 5;

    // Variables souris
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    // Animation des particules
    function animate() {
        requestAnimationFrame(animate);

        targetX += (mouseX - targetX) * 0.02;
        targetY += (mouseY - targetY) * 0.02;

        particlesMesh.rotation.x += 0.001;
        particlesMesh.rotation.y += 0.002;

        const positions = particlesMesh.geometry.attributes.position.array;
        
        for (let i = 0; i < positions.length; i += 3) {
            positions[i] += velocities[i];
            positions[i + 1] += velocities[i + 1];
            positions[i + 2] += velocities[i + 2];

            for (let j = 0; j < 3; j++) {
                if (Math.abs(positions[i + j]) > 10) {
                    velocities[i + j] *= -1;
                }
            }
        }

        particlesMesh.rotation.x += targetY * 0.0005;
        particlesMesh.rotation.y += targetX * 0.0005;

        particlesMesh.geometry.attributes.position.needsUpdate = true;
        renderer.render(scene, camera);
    }

    // Event Listeners
    document.addEventListener('mousemove', (event) => {
        mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    });

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Parallax des cartes
    document.addEventListener('mousemove', (e) => {
        const cards = document.querySelectorAll('.project-card');
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const angleX = (y - centerY) * 0.01;
            const angleY = (x - centerX) * 0.01;
            
            card.style.transform = `perspective(1000px) rotateX(${-angleX}deg) rotateY(${angleY}deg) translateY(-10px)`;
        });
    });

    // Scroll et Navigation
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(0, 0, 0, 0.9)';
            nav.style.backdropFilter = 'blur(20px)';
        } else {
            nav.style.background = 'rgba(0, 0, 0, 0.1)';
            nav.style.backdropFilter = 'blur(10px)';
        }

        // Barre de progression
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / totalHeight) * 100;
        document.querySelector('.progress-bar').style.width = `${progress}%`;
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            const offset = 100;

            window.scrollTo({
                top: target.offsetTop - offset,
                behavior: 'smooth'
            });

            if (navList.classList.contains('active')) {
                navList.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    });

    // Menu mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('nav ul');

    if (menuToggle && navList) {
        menuToggle.addEventListener('click', () => {
            navList.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    // Animation au scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.project-card, .skill-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });

    // Traduction des boutons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            updateLanguage(this.getAttribute('data-lang'));
        });
    });

    // Démarrer l'animation
    animate();
    
    // Initialiser la langue par défaut
    updateLanguage('fr');
});

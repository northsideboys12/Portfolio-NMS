document.addEventListener('DOMContentLoaded', function() {

    const uiTranslations = {
        'fr': {
            'nav-profil': 'Profil', 'nav-competences': 'Compétences', 'nav-education': 'Éducation',
            'nav-projets': 'Projets', 'nav-contact': 'Contact', 'interets-titre': '[ Centres d\'intérêt ]',
            'profil-titre': '[ PROFIL ]', "nav-interets": "Intérêts",
            'profil-p': "Étudiant motivé en deuxième année de BUT Informatique. Actuellement à la recherche d'un stage pour compléter ma deuxième année, spécifiquement en développement .NET8 C# ou développement web.",
            'profil-btn-cv': 'Télécharger mon CV',
            'competences-titre': '[ COMPÉTENCES ]', 'comp-hard': 'Savoir-faire', 'comp-soft': 'Savoir-être',
            'soft-team': "Travail d'équipe", 'soft-autonomy': "Autonomie", 'soft-adapt': "Adaptabilité",
            'soft-problem': "Résolution de problèmes", 'soft-curiosity': "Curiosité",
            'langues-titre': 'Langues', 'langue1-nom': 'Français:', 'langue1-lvl': '(Natif)',
            'langue2-nom': 'Anglais:', 'langue2-lvl': '(B2)', 'langue3-nom': 'Allemand:', 'langue3-lvl': '(A2)',
            'education-titre': '[ ÉDUCATION ]', 'education1-titre': 'BUT Informatique', 'education1-date': '2024 - 2027',
            'education1-loc': 'IUT Annecy - Annecy-le-Vieux, France',
            'education2-titre': 'Baccalauréat Général (Spé. NSI & Maths)', 'education2-date': '2022 - 2024',
            'projets-titre': '[ PROJETS ]',
            'filter-all': 'Tous', 'filter-uni': 'Universitaire', 'filter-perso': 'Personnel', 'filter-csharp': 'C#', 'filter-web': 'Web',
            'interet-music': 'Musique', 'interet-geek': 'Culture Geek', 'interet-sport': 'Sport',
            'contact-titre': '[ CONTACT ]', 'contact-p': 'Prêt à rejoindre votre équipe. Contactez-moi :',
            'form-email': 'Votre Email', 'form-msg': 'Message', 'form-send': 'Envoyer',
            'footer-p': 'Fait avec ❤️ par Timothée Kiehl.',
            'btn-back': 'Retour', 'desc-title': 'Description', 'techs-title': 'Technologies',
            'projet1-titre': 'Projet Web (Laravel)', 'projet1-date': 'Printemps 2025',
            'projet2-titre': 'Projet C#.NET8 WPF', 'projet2-date': 'Automne 2024',
            'projet3-titre': 'Ce Portfolio', 'projet3-date': 'Octobre 2025',
            'projet4-titre': "Jeu 'Cailloux'", 'projet4-date': 'Mars 2025',
            'projet5-titre': "Jeu 'Premon'", 'projet5-date': 'Mai 2025',
            'ref-titre': '[ RÉFÉRENCES ]',
            'ref1-role': "Coordinatrice Internationale à l'USMB",
            'ref2-role': "Professeur de conception UML et BDD",
        },
        'en': {
            'nav-profil': 'Profile', 'nav-competences': 'Skills', 'nav-education': 'Education',
            'nav-projets': 'Projects', 'nav-contact': 'Contact', 'interets-titre': '[ Interests ]',
            'profil-titre': '[ PROFILE ]', "nav-interets": "Interests",
            'profil-p': "Motivated student in my second year of a Technical Bachelor's Degree in Computer Science. Currently looking for an internship to complete my second year, specifically in .NET8 C# or web development.",
            'profil-btn-cv': 'Download my CV',
            'competences-titre': '[ SKILLS ]', 'comp-hard': 'Hard Skills', 'comp-soft': 'Soft Skills',
            'soft-team': "Teamwork", 'soft-autonomy': "Autonomy", 'soft-adapt': "Adaptability",
            'soft-problem': "Problem Solving", 'soft-curiosity': "Curiosity",
            'langues-titre': 'Languages', 'langue1-nom': 'French:', 'langue1-lvl': '(Native)',
            'langue2-nom': 'English:', 'langue2-lvl': '(B2 - Intermediate)', 'langue3-nom': 'German:', 'langue3-lvl': '(A2 - Beginner)',
            'education-titre': '[ EDUCATION ]', 'education1-titre': 'B.Sc in Computer Science', 'education1-date': '2024 - 2027',
            'education1-loc': 'University of Savoy/IUT Annecy, France',
            'education2-titre': 'High School Diploma (CS & Maths)', 'education2-date': '2022 - 2024',
            'projets-titre': '[ PROJECTS ]',
            'filter-all': 'All', 'filter-uni': 'University', 'filter-perso': 'Personal', 'filter-csharp': 'C#', 'filter-web': 'Web',
            'interet-music': 'Music', 'interet-geek': 'Geek Culture', 'interet-sport': 'Sport',
            'contact-titre': '[ CONTACT ]', 'contact-p': 'Ready to join your team. Contact me:',
            'form-email': 'Your Email', 'form-msg': 'Message', 'form-send': 'Send',
            'footer-p': 'Made with ❤️ by Timothée Kiehl.',
            'btn-back': 'Back', 'desc-title': 'Description', 'techs-title': 'Technologies',
            'projet1-titre': 'Web Project (Laravel)', 'projet1-date': 'Spring 2025',
            'projet2-titre': 'C#.NET8 WPF Project', 'projet2-date': 'Autumn 2024',
            'projet3-titre': 'This Portfolio', 'projet3-date': 'October 2025',
            'projet4-titre': "'Cailloux' Game", 'projet4-date': 'March 2025',
            'projet5-titre': "'Premon' Game", 'projet5-date': 'May 2025',
            'ref-titre': '[ REFERENCES ]',
            'ref1-role': "International Coordinator at USMB",
            'ref2-role': "Professor of UML Design and Databases",
        }
    };

    const projectsData = {
        'laravel': {
            image: "assets/imgWIP.png",
            techs: ["Laravel", "PHP", "PostgreSQL", "Power BI", "MERISE", "BPMN"],
            links: [{ text: "GitHub", url: "https://github.com/BazeOnigiri/SAE_Leboncoin" }],
            fr: {
                title: "Projet Web (Laravel)", date: "Printemps 2025", type: "Projet Universitaire",
                description: `Ce projet collaboratif avait pour but de concevoir une application web complète en utilisant le framework PHP Laravel.
                Nous avons suivi une démarche professionnelle complète : conception de la BDD (Merise), diagrammes BPMN, développement MVC, et sécurité.`
            },
            en: {
                title: "Web Project (Laravel)", date: "Spring 2025", type: "University Project",
                description: `This collaborative project aimed to design a full web application using the Laravel PHP framework.
                We followed a complete professional approach: Database design (Merise), BPMN diagrams, MVC development, and security implementation.`
            }
        },
        'nicolas': {
            image: "assets/previewNICOLAS.png",
            techs: ["C#", ".NET 8", "WPF", "UML", "Figma", "XAML"],
            links: [{ text: "GitHub", url: "https://github.com/BazeOnigiri/SaeNicolas" }],
            fr: {
                title: "Projet C#.NET8 WPF", date: "Automne 2024", type: "Projet Universitaire",
                description: `Application lourde de gestion de commandes de vin.
                Le projet s'est concentré sur l'architecture logicielle et l'expérience utilisateur : Conception UML, Interface XAML moderne, gestion CRUD complète.`
            },
            en: {
                title: "C#.NET8 WPF Project", date: "Autumn 2024", type: "University Project",
                description: `Desktop application for wine order management.
                The project focused on software architecture and user experience: UML Design, modern XAML Interface, complete CRUD management.`
            }
        },
        'portfolio': {
            image: "assets/previewPortfolio.png",
            techs: ["HTML5", "CSS3", "JS", "Particles.js", "Lenis"],
            links: [{ text: "GitHub", url: "https://github.com/BazeOnigiri/Portfolio-NMS" }],
            fr: {
                title: "Portfolio Personnel", date: "Octobre 2025", type: "Projet Personnel",
                description: `Ce portfolio a été conçu de zéro pour présenter mon parcours. Identité visuelle inspirée de "No Man's Sky". Site statique optimisé avec navigation fluide.`
            },
            en: {
                title: "Personal Portfolio", date: "October 2025", type: "Personal Project",
                description: `This portfolio was designed from scratch to showcase my journey. Visual identity inspired by "No Man's Sky". Optimized static site with smooth navigation.`
            }
        },
        'cailloux': {
            image: "assets/previewCailloux.png",
            techs: ["JavaScript", "Phaser.js", "HTML5", "Tiled"],
            links: [{ text: "GitHub", url: "https://github.com/BazeOnigiri" }, { text: "Jouer / Play", url: "pages/cailloux.html" }],
            fr: {
                title: "Jeu 'Cailloux'", date: "Mars 2025", type: "Projet Universitaire",
                description: `Un jeu de plateforme 2D avec Phaser 3. Gestion de la physique, création de niveaux avec Tiled et gestion des collisions.`
            },
            en: {
                title: "'Cailloux' Game", date: "March 2025", type: "University Project",
                description: `A 2D platformer game made with Phaser 3. Physics management, level creation with Tiled, and collision handling.`
            }
        },
        'premon': {
            image: "assets/previewPREMON.png",
            techs: ["C#", ".NET 8", "WPF", "Game Design"],
            links: [{ text: "GitHub", url: "https://github.com/brindyrwlt/Premon" }, { text: "Download (.zip)", url: "assets/Premon.zip" }],
            fr: {
                title: "Jeu 'Premon'", date: "Mai 2025", type: "Projet Universitaire",
                description: `Jeu d'action-aventure 2D développé entièrement en C# WPF. Un défi technique repoussant les limites de WPF pour le jeu vidéo.`
            },
            en: {
                title: "'Premon' Game", date: "May 2025", type: "University Project",
                description: `2D Action-Adventure game developed entirely in C# WPF. A technical challenge pushing the limits of WPF for video games.`
            }
        }
    };

    let currentLang = localStorage.getItem('siteLanguage') || 'fr';
    
    function updatePageLanguage(lang) {
        localStorage.setItem('siteLanguage', lang);
        currentLang = lang;

        const btn = document.getElementById('lang-toggle-btn');
        if(btn) btn.textContent = (lang === 'fr') ? 'EN' : 'FR';

        document.querySelectorAll('[data-lang]').forEach(el => {
            const key = el.dataset.lang;
            if (uiTranslations[lang] && uiTranslations[lang][key]) {
                el.textContent = uiTranslations[lang][key];
            }
        });

        const urlParams = new URLSearchParams(window.location.search);
        const projectId = urlParams.get('id');
        if (projectId && projectsData[projectId]) {
            renderProjectDetails(projectId, lang);
        }

        if (document.getElementById('typed-text')) {
            initTyped(lang);
        }

        if (document.querySelector('.project-grid')) {
            populateProjectPreviews(lang);
        }
    }

    function showProjectDetail(id, lang) {
        const pd = document.getElementById('project-detail');
        const mainEl = document.querySelector('main');
        if (!pd) return;
        renderProjectDetails(id, lang || currentLang);

        try { window._prevScrollY = window.scrollY || window.pageYOffset; } catch (e) { window._prevScrollY = 0; }

        const projetsEl = document.getElementById('projets');
        if (projetsEl) {
            if (!window._pdOriginalParent) {
                window._pdOriginalParent = pd.parentNode;
                window._pdOriginalNext = pd.nextSibling;
            }

            const insertBeforeEl = projetsEl.querySelector('.filter-controls') || projetsEl.querySelector('.project-grid') || null;
            projetsEl.insertBefore(pd, insertBeforeEl);

            pd.style.display = 'block';

            const fc = projetsEl.querySelector('.filter-controls');
            const grid = projetsEl.querySelector('.project-grid');
            if (fc) fc.style.display = 'none';
            if (grid) grid.style.display = 'none';
        } else {
            pd.style.display = 'block';
        }
        requestAnimationFrame(() => {
            const targetEl = document.getElementById('projets') || pd;
            const rect = targetEl.getBoundingClientRect();
            const targetY = rect.top + window.scrollY;
            window.scrollTo({ top: targetY, behavior: 'smooth' });
        });
    }

    function hideProjectDetail() {
        const pd = document.getElementById('project-detail');
        const mainEl = document.querySelector('main');
        if (!pd) return;
        try {
            const projetsEl = document.getElementById('projets');
            if (projetsEl) {
                const fc = projetsEl.querySelector('.filter-controls');
                const grid = projetsEl.querySelector('.project-grid');
                if (fc) fc.style.display = '';
                if (grid) grid.style.display = '';
            }

            if (window._pdOriginalParent) {
                const parent = window._pdOriginalParent;
                const next = window._pdOriginalNext;
                parent.insertBefore(pd, next);
                pd.style.display = 'none';
                delete window._pdOriginalParent;
                delete window._pdOriginalNext;
            } else {
                pd.style.display = 'none';
            }
        } catch (e) {
            pd.style.display = 'none';
        }

        const prev = (typeof window._prevScrollY !== 'undefined') ? window._prevScrollY : 0;
        window.scrollTo({ top: prev, behavior: 'smooth' });
    }

    try { window.showProjectDetail = showProjectDetail; window.hideProjectDetail = hideProjectDetail; } catch(e) {}

    const detailBackBtn = document.getElementById('detail-back');
    if (detailBackBtn) {
        detailBackBtn.addEventListener('click', (e) => {
            e.preventDefault();
            hideProjectDetail();
        });
    }

    const langBtn = document.getElementById('lang-toggle-btn');
    if (langBtn) {
        langBtn.textContent = (currentLang === 'fr') ? 'EN' : 'FR';
        
        langBtn.addEventListener('click', () => {
            const newLang = (currentLang === 'fr') ? 'en' : 'fr';
            updatePageLanguage(newLang);
        });
    }

    const isProjectPage = window.location.pathname.includes('project.html');

    if (isProjectPage) {
        const urlParams = new URLSearchParams(window.location.search);
        const projectId = urlParams.get('id');

        if (projectId && projectsData[projectId]) {
            renderProjectDetails(projectId, currentLang);
        } else {
            document.getElementById('detail-title').textContent = "Projet introuvable";
        }

    } else {
        if (typeof Lenis !== 'undefined') {
            const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
            function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
            requestAnimationFrame(raf);
        }

        const filterButtons = document.querySelectorAll('.filter-btn');
        const projectTiles = document.querySelectorAll('.project-tile');

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                const filter = button.dataset.filter;

                projectTiles.forEach(tile => {
                    const type = tile.dataset.type;
                    const techs = tile.dataset.tech;
                    if (filter === 'all' || type === filter || (techs && techs.includes(filter))) {
                        tile.classList.remove('hidden');
                    } else {
                        tile.classList.add('hidden');
                    }
                });
            });
        });

        initTyped(currentLang);

        populateProjectPreviews(currentLang);
    }

    updatePageLanguage(currentLang);


    function renderProjectDetails(id, lang) {
        const data = projectsData[id];
        const content = data[lang]; 

        document.getElementById('detail-title').textContent = content.title;
        document.getElementById('detail-image').src = data.image;
        document.getElementById('detail-desc').textContent = content.description;
        document.getElementById('detail-date').textContent = content.date;
        document.getElementById('detail-type').textContent = content.type;

        const techContainer = document.getElementById('detail-tech-list');
        if(techContainer) {
            techContainer.innerHTML = '';
            data.techs.forEach(tech => {
                const span = document.createElement('span');
                span.textContent = tech;
                techContainer.appendChild(span);
            });
        }

        const linksContainer = document.getElementById('detail-links');
        if(linksContainer) {
            linksContainer.innerHTML = '';
            data.links.forEach(link => {
                const a = document.createElement('a');
                a.href = link.url;
                a.target = "_blank";
                a.innerHTML = `<i class="fa-solid fa-external-link-alt"></i> ${link.text}`;
                linksContainer.appendChild(a);
            });
        }
        try { window.renderProjectDetails = renderProjectDetails; } catch(e) {}
    }

    function populateProjectPreviews(lang) {
        Object.keys(projectsData).forEach(key => {
            const data = projectsData[key];
            const content = data[lang] || data['fr'];

            const previewEl = document.querySelector(`.project-preview[data-project="${key}"]`);
            if (previewEl) {
                const txt = content.description.replace(/\s+/g, ' ').trim();
                const max = 120;
                let short = txt;
                if (txt.length > max) {
                    short = txt.slice(0, max);
                    const lastSpace = short.lastIndexOf(' ');
                    if (lastSpace > 60) short = short.slice(0, lastSpace);
                    short = short.trim() + '...';
                }
                previewEl.textContent = short;
            }

            const typeEl = document.querySelector(`.project-type[data-project="${key}"]`);
            if (typeEl) {
                typeEl.textContent = content.type || '';
            }
        });
    }

    function initTyped(lang) {
        if (document.getElementById('typed-text')) {
            if(window.typedInstance) { window.typedInstance.destroy(); }

            const strings = (lang === 'fr') 
                ? ["Étudiant en Informatique", "Développeur C# .NET", "Développeur Web", "Recherche un stage..."]
                : ["CS Student", "C# .NET Developer", "Web Developer", "Looking for internship..."];

            window.typedInstance = new Typed('#typed-text', {
                strings: strings,
                typeSpeed: 50, backSpeed: 30, backDelay: 1500, startDelay: 500, loop: true, showCursor: true, cursorChar: '_',
            });
        }
    }

    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
    "particles": {
    "number": {
        "value": 170,
        "density": {
        "enable": true,
        "value_area": 2209.648271344806
        }
    },
    "color": {
        "value": "#ffffff"
    },
    "shape": {
        "type": "circle",
        "stroke": {
        "width": 3,
        "color": "#d9af7b"
        },
        "polygon": {
        "nb_sides": 5
        },
        "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
        }
    },
    "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
        }
    },
    "size": {
        "value": 3,
        "random": true,
        "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
        }
    },
    "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#71254a",
        "opacity": 0.4,
        "width": 1
    },
    "move": {
        "enable": true,
        "speed": 2.5,
        "direction": "right",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
        }
    }
    },
    "interactivity": {
    "detect_on": "window",
    "events": {
        "onhover": {
        "enable": true,
        "mode": "grab"
        },
        "onclick": {
        "enable": false,
        "mode": "push"
        },
        "resize": true
    },
    "modes": {
        "grab": {
        "distance": 251.73215698496793,
        "line_linked": {
            "opacity": 1
        }
        },
        "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
        },
        "repulse": {
        "distance": 200,
        "duration": 0.4
        },
        "push": {
        "particles_nb": 4
        },
        "remove": {
        "particles_nb": 2
        }
    }
    },
    "retina_detect": true
});
    }
});

function goToProject(id) {
    const inPage = document.getElementById('project-detail');
    const lang = localStorage.getItem('siteLanguage') || 'fr';
    if (inPage && window.showProjectDetail) {
        window.showProjectDetail(id, lang);
        return;
    }
    window.location.href = `pages/project.html?id=${id}`;
}
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          languageCode: "en",
          welcome: "Hi there, Dylan Andrew here!",
          copyright:
            "Built and designed by Dylan Andrew. All rights reserved. ©",
          homeDescription1:
            "Fullstack Developer",
          homeDescription2:
            "React + TypeScript | Python + Django | Paris",
          homeButton: "See my projects",
          homeAboutButton: "About me",
          featuredWork: "Featured Work",
          about: "About Me",
          experiences: "Experiences",
          projects: "Projects",
          passions: "Passions",
          contact: "Contact",
          home: "Home",
          language: "Change Language",
          aboutDescription1:
            "Fullstack developer with a Master's degree in IT Engineering from <university>ESIEE-IT</university> (specialization in VR & Game Development), graduated in 2025.",
          aboutDescription2:
            "For 2 years, I was the main developer at <finetic>Finetic</finetic>, a financial consulting firm, where I was in charge of most of the daily development on a SaaS business planning tool — from UI design to REST API architecture.",
          aboutDescription3:
            "I thrive on learning new domains through code. At Finetic, I dove deep into finance to truly understand the business needs, and I loved every bit of it. Since graduating, I've been building a school management system now used daily by a real school, alongside personal projects in trading and Formula 1.",
          aboutDescription4:
            "Autonomous, curious, and driven to always give my best — whether it's picking up a new technology, understanding a new business domain, or pushing a side project to production. Outside of code, I'm passionate about Formula 1, Dota 2, cooking, and science.",
          technologiesIntroduction:
            "Technologies I work with:",
          skillsFrontend: "Frontend",
          skillsBackend: "Backend",
          skillsDatabase: "Database",
          skillsDevOps: "DevOps & Tools",
          skillsGameDev: "Game Dev",
          experiencesTitle: "My Experiences",
          fineticTitle: "Fullstack Developer @ <title>Finetic</title>",
          fineticPeriod: "September 2023 - October 2025",
          fineticDescription1:
            "Main developer on a SaaS business planning tool, in charge of most of the daily development across the full stack.",
          fineticDescription2:
            "Built the complete front-end: dashboards, data exports, and business interfaces with React, TypeScript, and Material UI / Joy UI.",
          fineticDescription3:
            "Designed and developed REST APIs and backend logic with Python/Django, handling complex financial modeling.",
          fineticDescription4:
            "Modeled and optimized the PostgreSQL database for performance and data integrity.",
          fineticDescription5:
            "Wrote tests (Pytest, Jest), maintained technical documentation, and collaborated in Agile/Scrum with product, design, and business teams.",
          fineticDescription6:
            "Learned the finance domain in depth to understand business requirements and deliver features that truly matched client needs.",
          tripalioTitle: "C# Developer @ <title>Tripalio</title>",
          tripalioPeriod: "May 2023 - July 2023",
          tripalioDescription1:
            "Extended database features and maintained a recruitment platform in C#.",
          tripalioDescription2:
            "Diagnosed and resolved backend bugs in production.",
          tripalioDescription3:
            "Delivered front-end updates in HTML/CSS.",
          sahazaGroupTitle: "Web Developer @ <title>Sahaza Group</title>",
          sahazaGroupPeriod: "April 2020 - May 2022",
          sahazaGroupDescription1:
            "Built and maintained e-commerce sites with WordPress and PrestaShop, including custom development in HTML, CSS, JavaScript, and PHP.",
          sahazaGroupDescription2:
            "Developed a custom PrestaShop module tailored to a client's specific needs.",
          sahazaGroupDescription3:
            "Built an intranet site for the Sahaza Group using Drupal 8.",
          sahazaGroupDescription4:
            "Delivered responsive web integration across all projects.",
          passionTitle: "My Passions",
          passionTitleDescription:
            "Whether it's the precision of an F1 lap or the perfect team fight in Dota, I'm drawn to pursuits that demand excellence, strategy, and relentless improvement.",
          f1Title: "Formula 1",
          f1Subtitle: "The pinnacle of motorsport",
          f1Description:
            "The adrenaline, precision, and cutting-edge technology of F1 captivate me. Every race weekend is a masterclass in engineering excellence and human skill pushed to the absolute limit.",
          favoriteDriver: "Favorite Driver",
          favoriteTeam: "Favorite Team",
          favoriteCircuit: "Dream Circuit",
          favoriteTeamValue: "All of them",
          yearsFollowing: "Years Following",
          yearsFollowingValue: "Since 2008",
          dota2Subtitle: "The ultimate strategy game",
          dota2Description:
            "Dota 2 is more than just a game; it's a test of strategy, teamwork, and skill. I love the depth of its gameplay and the thrill of competing at the highest levels.",
          mainRole: "Main Role",
          favoriteHero: "Favorite Hero",
          rank: "Rank",
          totalPlayTime: "Total Play Time",
          totalPlayTimeValue: "7000+ hours",
          checkMyProfile: "Check my profile",
          projectsTitle: "My Projects",
          projectsSubtitle: "A selection of things I've built, from production software to game jam entries.",
          projectTypeWeb: "Web App",
          projectTypeMobile: "Mobile App",
          projectTypeGame: "Game",
          projectStatusProduction: "In Production",
          playOnItch: "Play on itch.io",
          downloadOnItch: "Download on itch.io",
          schoolMgmtTitle: "School Management System",
          schoolMgmtDescription: "Full-stack web application digitalizing the administrative management of a real school. Handles student records, enrollment, class management, PDF certificate generation, and analytics dashboards. V1 in production, used daily.",
          schoolMgmtHighlight1: "Used daily by a real school's admin team",
          schoolMgmtHighlight2: "PDF certificate generation with @react-pdf",
          schoolMgmtHighlight3: "Row-Level Security and contract-first API (Orval)",
          liveRateTitle: "LiveRate Trader",
          liveRateDescription: "Real-time FX trading platform with a Bloomberg-terminal inspired dashboard. Features live market data streaming via WebSocket, interactive charts with technical indicators, order execution, and a strategy backtesting engine.",
          liveRateHighlight1: "7-panel Bloomberg-style CSS Grid dashboard",
          liveRateHighlight2: "Real-time price streaming via WebSocket",
          liveRateHighlight3: "Backtesting engine with Sharpe ratio and equity curves",
          f1CompanionTitle: "F1 Live Companion",
          f1CompanionDescription: "Real-time Formula 1 second-screen companion app. Surfaces live positions, tire strategies, on-track battles, and race control decisions during broadcast sessions.",
          f1CompanionHighlight1: "Clean Architecture with Port/Adapter pattern",
          f1CompanionHighlight2: "Live timing tower with algorithmic battle detection",
          f1CompanionHighlight3: "Cross-platform: iOS, Android, and Web from one codebase",
          windletonTitle: "Windleton",
          windletonDescription: "3D puzzle game where you are trapped in your dad's manor. Solve the enigmas and leave this place. A school project built with Unity.",
          windletonHighlight1: "3D exploration and puzzle-solving",
          ascensionTitle: "Ascension",
          ascensionDescription: "2D platformer where you climb as high as possible using a grapple hook. Swing between floating asteroids, but be careful - some explode shortly after you grab them!",
          ascensionHighlight1: "Fast-paced grapple hook mechanics",
          findingGilbertTitle: "Finding Gilbert",
          findingGilbertDescription: "A relaxing fishing adventure on a tiny island. With only 10 attempts, reel in the elusive clownfish Gilbert among a sea of colorful decoys. Made for Ludum Dare 56 in 72 hours.",
          findingGilbertHighlight1: "Built in 72h for Ludum Dare 56",
          vrEffondrementTitle: "VR Effondrement",
          vrEffondrementDescription: "VR serious game developed for tp.demain to raise awareness about trench collapse risks on construction sites. A disguised safety prevention tool built by a team of 5 students.",
          vrEffondrementHighlight1: "VR safety awareness simulation",
        },
      },
      fr: {
        translation: {
          languageCode: "fr",
          welcome: "Hello, je suis Dylan Andrew !",
          copyright:
            "Conçu et développé par Dylan Andrew. Tous droits réservés. ©",
          homeDescription1:
            "Développeur Fullstack",
          homeDescription2:
            "React + TypeScript | Python + Django | Paris",
          homeButton: "Voir mes projets",
          homeAboutButton: "À propos",
          featuredWork: "Projets phares",
          about: "À propos de moi",
          experiences: "Expériences",
          projects: "Projets",
          passions: "Passions",
          contact: "Contact",
          home: "Accueil",
          language: "Changer de langue",
          aboutDescription1:
            "Développeur fullstack diplômé d'un Master Manager en Ingénierie Informatique à l'<university>ESIEE-IT</university> en 2025, spécialisation VR et Jeux Vidéo.",
          aboutDescription2:
            "Pendant 2 ans, j'étais développeur principal chez <finetic>Finetic</finetic>, un cabinet de conseil financier, en charge de l'essentiel du développement quotidien d'un outil SaaS de business planning — du design UI à l'architecture des API REST.",
          aboutDescription3:
            "J'aime apprendre de nouveaux domaines à travers le code. Chez Finetic, j'ai plongé dans la finance pour vraiment comprendre les besoins métier, et j'ai adoré. Depuis l'obtention de mon diplôme, je développe un système de gestion scolaire utilisé au quotidien par une vraie école, en parallèle de projets personnels en trading et Formule 1.",
          aboutDescription4:
            "Autonome, curieux, et motivé à toujours donner le meilleur de moi-même — que ce soit pour apprendre une nouvelle technologie, comprendre un nouveau domaine métier, ou pousser un projet perso jusqu'en production. En dehors du code, je suis passionné par la Formule 1, Dota 2, la cuisine et la science.",
          technologiesIntroduction:
            "Technologies avec lesquelles je travaille :",
          skillsFrontend: "Frontend",
          skillsBackend: "Backend",
          skillsDatabase: "Base de données",
          skillsDevOps: "DevOps & Outils",
          skillsGameDev: "Jeux Vidéo",
          experiencesTitle: "Mes Expériences",
          fineticTitle: "Développeur Fullstack @ <title>Finetic</title>",
          fineticPeriod: "Septembre 2023 - Octobre 2025",
          fineticDescription1:
            "Développeur principal d'un outil SaaS de business planning, en charge de l'essentiel du développement quotidien sur l'ensemble de la stack.",
          fineticDescription2:
            "Développement du front-end complet : dashboards, exports de données et interfaces métier avec React, TypeScript et Material UI / Joy UI.",
          fineticDescription3:
            "Conception et développement des API REST et de la logique back-end avec Python/Django, incluant de la modélisation financière complexe.",
          fineticDescription4:
            "Modélisation et optimisation de la base de données PostgreSQL pour la performance et l'intégrité des données.",
          fineticDescription5:
            "Rédaction de tests (Pytest, Jest), documentation technique, et collaboration en Agile/Scrum avec les équipes produit, design et business.",
          fineticDescription6:
            "Apprentissage approfondi du domaine financier pour comprendre les besoins métier et livrer des fonctionnalités adaptées aux attentes clients.",
          tripalioTitle:
            "Développeur C# @ <title>Tripalio</title>",
          tripalioPeriod: "Mai 2023 - Juillet 2023",
          tripalioDescription1:
            "Extension des fonctionnalités base de données et maintenance d'une plateforme de recrutement en C#.",
          tripalioDescription2:
            "Diagnostic et résolution de bugs backend en production.",
          tripalioDescription3:
            "Mises à jour front-end en HTML/CSS.",
          sahazaGroupTitle: "Développeur Web @ <title>Sahaza Group</title>",
          sahazaGroupPeriod: "Avril 2020 - Mai 2022",
          sahazaGroupDescription1:
            "Création et maintenance de sites web sous WordPress et PrestaShop, avec développement spécifique en HTML, CSS, JavaScript et PHP.",
          sahazaGroupDescription2:
            "Réalisation d'un module PrestaShop sur mesure pour un client.",
          sahazaGroupDescription3:
            "Développement d'un site intranet pour le Sahaza Group avec Drupal 8.",
          sahazaGroupDescription4:
            "Intégration web responsive sur l'ensemble des projets.",
          passionTitle: "Mes Passions",
          passionTitleDescription:
            "Que ce soit la précision d'un tour en F1 ou la coordination parfaite d'une équipe dans Dota, je suis attiré par les défis qui exigent excellence, stratégie et amélioration continue.",
          f1Title: "Formule 1",
          f1Subtitle: "Le summum du sport automobile",
          f1Description:
            "L'adrénaline, la précision et la technologie de pointe de la F1 me captivent. Chaque week-end de course est une leçon de maîtrise technique et de compétence humaine poussée à l'extrême.",
          favoriteDriver: "Pilote préféré",
          favoriteTeam: "Équipe préférée",
          favoriteCircuit: "Circuit de rêve",
          favoriteTeamValue: "Toutes",
          yearsFollowing: "Années de suivi",
          yearsFollowingValue: "Depuis 2008",
          dota2Subtitle: "Le jeu de stratégie ultime",
          dota2Description:
            "Dota 2 est plus qu'un simple jeu; c'est un test de stratégie, de travail d'équipe et de compétence. J'adore la profondeur de son gameplay et l'excitation de la compétition au plus haut niveau.",
          mainRole: "Rôle principal",
          favoriteHero: "Héro préféré",
          rank: "Rang",
          totalPlayTime: "Temps de jeu total",
          totalPlayTimeValue: "7000+ heures",
          checkMyProfile: "Voir mon profil",
          projectsTitle: "Mes Projets",
          projectsSubtitle: "Une sélection de ce que j'ai construit, du logiciel en production aux game jams.",
          projectTypeWeb: "App Web",
          projectTypeMobile: "App Mobile",
          projectTypeGame: "Jeu",
          projectStatusProduction: "En Production",
          playOnItch: "Jouer sur itch.io",
          downloadOnItch: "Télécharger sur itch.io",
          schoolMgmtTitle: "Système de Gestion Scolaire",
          schoolMgmtDescription: "Application web full-stack digitalisant la gestion administrative d'une vraie école. Gère les fiches élèves, inscriptions, classes, génération de certificats PDF et tableaux de bord analytiques. V1 en production, utilisée au quotidien.",
          schoolMgmtHighlight1: "Utilisé quotidiennement par l'équipe admin d'une école",
          schoolMgmtHighlight2: "Génération de certificats PDF avec @react-pdf",
          schoolMgmtHighlight3: "Row-Level Security et API contract-first (Orval)",
          liveRateTitle: "LiveRate Trader",
          liveRateDescription: "Plateforme de trading FX en temps réel avec un dashboard inspiré de Bloomberg. Streaming de données de marché via WebSocket, graphiques interactifs avec indicateurs techniques, exécution d'ordres et moteur de backtesting.",
          liveRateHighlight1: "Dashboard Bloomberg-style en CSS Grid à 7 panneaux",
          liveRateHighlight2: "Streaming de prix en temps réel via WebSocket",
          liveRateHighlight3: "Moteur de backtesting avec ratio de Sharpe et courbes d'equity",
          f1CompanionTitle: "F1 Live Companion",
          f1CompanionDescription: "Application compagnon F1 en temps réel pour second écran. Affiche les positions, stratégies de pneus, batailles en piste et décisions de la direction de course pendant les sessions.",
          f1CompanionHighlight1: "Clean Architecture avec pattern Port/Adapter",
          f1CompanionHighlight2: "Tour par tour en direct avec détection algorithmique des batailles",
          f1CompanionHighlight3: "Multi-plateforme : iOS, Android et Web depuis un seul codebase",
          windletonTitle: "Windleton",
          windletonDescription: "Jeu de puzzle 3D où vous êtes piégé dans le manoir de votre père. Résolvez les énigmes et quittez cet endroit. Projet scolaire réalisé avec Unity.",
          windletonHighlight1: "Exploration 3D et résolution d'énigmes",
          ascensionTitle: "Ascension",
          ascensionDescription: "Platformer 2D où vous grimpez le plus haut possible avec un grappin. Balancez-vous entre des astéroïdes flottants, mais attention - certains explosent peu après que vous les attrapez !",
          ascensionHighlight1: "Mécaniques de grappin dynamiques",
          findingGilbertTitle: "Finding Gilbert",
          findingGilbertDescription: "Une aventure de pêche relaxante sur une petite île. Avec seulement 10 tentatives, attrapez l'insaisissable poisson-clown Gilbert parmi des leurres colorés. Réalisé pour le Ludum Dare 56 en 72 heures.",
          findingGilbertHighlight1: "Réalisé en 72h pour le Ludum Dare 56",
          vrEffondrementTitle: "VR Effondrement",
          vrEffondrementDescription: "Serious game VR développé pour tp.demain afin de sensibiliser aux risques d'effondrement de tranchée sur les chantiers. Un outil de prévention déguisé réalisé par une équipe de 5 étudiants.",
          vrEffondrementHighlight1: "Simulation VR de sensibilisation à la sécurité",
        },
      },
    },
  });

export default i18n;

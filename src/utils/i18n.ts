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
            "Fullstack developer with a Master's degree in Computer Science from <university>ESIEE-IT</university>, graduated in 2025.",
          aboutDescription2:
            "Previously the main developer at <finetic>Finetic</finetic>, a financial consulting firm, where I was in charge of building a SaaS business planning tool for 2 years.",
          aboutDescription3:
            "I love learning new domains through code. At Finetic, I dove deep into finance to understand business needs, and I built a school management system now used daily by a real school.",
          aboutDescription4:
            "Outside of work, I'm passionate about Formula 1, enjoy playing a lot of Dota 2, love cooking, and I'm curious about science and new technologies.",
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
            "Main developer on a custom SaaS web application that streamlines the creation and editing of business plans.",
          fineticDescription2:
            "Developed the complete front-end with React and TypeScript, using Material UI / Joy UI for clean, consistent interfaces.",
          fineticDescription3:
            "Designed and implemented backend logic and REST APIs with Python/Django.",
          fineticDescription4:
            "Managed database interactions with PostgreSQL, optimizing data retrieval and storage.",
          fineticDescription5:
            "Participated in code reviews and CI/CD workflows using GitHub and Vercel, ensuring code quality and smooth deployments.",
          tripalioTitle: "Backend Developer @ <title>Tripalio</title>",
          tripalioPeriod: "May 2023 - July 2023",
          tripalioDescription1:
            "Worked on an insurance web application, focusing on backend development using C#.",
          sahazaGroupTitle: "Web Developer @ <title>Sahaza Group</title>",
          sahazaGroupPeriod: "April 2020 - May 2022",
          sahazaGroupDescription1:
            "Worked on e-commerce sites using Prestashop",
          sahazaGroupDescription2:
            "Developed a website for the <fea>women entrepreneurs of Analamanga</fea> using WordPress",
          sahazaGroupDescription3:
            "Developed an intranet site for the Sahaza Group using Drupal",
          sahazaGroupDescription4:
            "Played a key role in the development of <recruter>recruter-a-madagascar.com</recruter>",
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
            "Développeur fullstack diplômé d'un Master en informatique à l'<university>ESIEE-IT</university> en 2025.",
          aboutDescription2:
            "Précédemment développeur principal chez <finetic>Finetic</finetic>, un cabinet de conseil financier, où j'étais en charge du développement d'un outil SaaS de business planning pendant 2 ans.",
          aboutDescription3:
            "J'aime apprendre de nouveaux domaines à travers le code. Chez Finetic, j'ai plongé dans la finance pour comprendre les besoins métier, et j'ai développé un système de gestion scolaire aujourd'hui utilisé au quotidien par une vraie école.",
          aboutDescription4:
            "En dehors du travail, je suis passionné par la Formule 1, je joue beaucoup à Dota 2, j'aime cuisiner, et je m'intéresse à la science et aux nouvelles technologies.",
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
            "Développeur principal d'une application web SaaS sur mesure facilitant la création et l'édition de business plans.",
          fineticDescription2:
            "Développement du front-end complet en React et TypeScript, avec Material UI / Joy UI pour des interfaces cohérentes et ergonomiques.",
          fineticDescription3:
            "Conception et développement du back-end et des API REST avec Python/Django.",
          fineticDescription4:
            "Modélisation et gestion des données avec une base PostgreSQL.",
          fineticDescription5:
            "Participation aux revues de code et aux workflows CI/CD via GitHub et Vercel, garantissant qualité et stabilité des déploiements.",
          tripalioTitle:
            "Développeur Backend @ <title>Tripalio</title>",
          tripalioPeriod: "Mai 2023 - Juillet 2023",
          tripalioDescription1:
            "J'ai travaillé sur une application web d'assurance, en me concentrant sur le développement backend en C#.",
          sahazaGroupTitle: "Développeur Web @ <title>Sahaza Group</title>",
          sahazaGroupPeriod: "Avril 2020 - Mai 2022",
          sahazaGroupDescription1:
            "J'ai travaillé sur des sites e-commerce utilisant Prestashop",
          sahazaGroupDescription2:
            "J'ai développé un site web pour les <fea>femmes entrepreneurs d'Analamanga</fea> en utilisant WordPress",
          sahazaGroupDescription3:
            "J'ai développé un site intranet pour le Sahaza Group en utilisant Drupal",
          sahazaGroupDescription4:
            "J'ai joué un rôle clé dans le développement de <recruter>recruter-a-madagascar.com</recruter>",
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

import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const NBSP = " ";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: import.meta.env.DEV,
    fallbackLng: "en",
    supportedLngs: ["en", "fr"],
    nonExplicitSupportedLngs: true,
    interpolation: { escapeValue: false },
    resources: {
      en: {
        translation: {
          languageCode: "en",
          skipToContent: "Skip to content",
          openMenu: "Open menu",
          closeMenu: "Close menu",
          mainNav: "Main",
          language: "Language",
          languageEnglish: "English",
          languageFrench: "French",
          homeLink: "Dylan Andrew, home",

          home: "Home",
          work: "Work",
          experiences: "Experience",
          about: "About",
          passions: "Passions",

          heroLine: "I learn the domain, then build what it needs.",
          heroRole: "Fullstack developer · Paris",
          heroCtaWork: "See the work",
          heroCtaContact: "Get in touch",
          portraitAlt: "Dylan Andrew in the Jardin du Luxembourg, Paris",

          timelineTitle: "The line so far",
          timelineIntro:
            "Every job taught me a new business before it taught me new code. Here is the path, from my first client sites to what I'm building now.",
          now: "Now",
          stopSahazaDomain: "Web agencies & e-commerce",
          stopSahazaText:
            "WordPress and PrestaShop shops, a custom PrestaShop module, and a Drupal intranet.",
          stopTripalioDomain: "Legaltech & collective agreements",
          stopTripalioText:
            "Front-end fixes on a collective-agreements data platform used by insurers and brokers, and my first steps in a C# codebase.",
          stopFineticDomain: "Finance",
          stopFineticText:
            "Two years as main developer of a SaaS business-planning tool. I learned finance in depth to build what clients actually needed.",
          stopEsieeDomain: "VR & game development",
          stopEsieeText:
            "Master's in IT Engineering at ESIEE-IT, specialised in VR and game development.",
          stopNowDomain: "Schools & Formula 1",
          stopNowText:
            "A school management system used every day by a real school's admin team, and Parc Fermé, a Formula 1 companion anyone can use during a race weekend.",

          selectedWorkTitle: "Shipped and in use",
          allWork: "All work",
          viewProject: "Read about {{name}}",

          signoffTitle: "Working on something interesting?",
          signoffText:
            "Always open to a sharp conversation about a project, a business, or an ambitious idea.",
          signoffEmail: "Email me",
          signoffLinkedIn: "LinkedIn",
          copyright: "Designed and built by Dylan Andrew. © {{year}}",

          workTitle: "Work",
          workIntro:
            "What I've built, starting with software real people use every day.",
          groupShipped: "Shipped and in use",
          groupExplorations: "Explorations",
          groupExplorationsIntro:
            "Personal projects where I take on a new domain end to end.",
          groupGames: "Games & jams",
          groupGamesIntro: "Where I started: Unity, C#, VR and 72-hour jams.",
          fieldDomain: "Domain",
          fieldYears: "Years",
          fieldStatus: "Status",
          fieldPlatform: "Platform",
          fieldLearned: "What I learned",
          fieldStack: "Built with",
          howBuilt: "How it's built",
          statusInUse: "In daily use",
          statusShipped: "Shipped",
          statusLive: "Live",
          statusPersonal: "Personal project",
          statusJam: "Game jam",
          statusSchool: "School project",
          platformWeb: "Web",
          platformWebAndroid: "Web & Android",
          platformGame: "Game",
          platformVr: "VR",
          domainSchools: "Schools",
          domainFinance: "Finance",
          domainTrading: "Trading",
          domainF1: "Formula 1",
          domainGames: "Games",
          domainSafety: "Construction safety",
          playOnItch: "Play on itch.io",
          downloadOnItch: "Download on itch.io",
          openApp: "Open the app",
          opensInNewTab: "(opens in a new tab)",

          schoolMgmtTitle: "School Management System",
          schoolMgmtDescription:
            "Full-stack web application digitalizing the administrative management of a real school. Handles student records, enrollment, class management, PDF certificate generation, and analytics dashboards. V1 in production, used daily.",
          schoolMgmtSummary:
            "Used daily by a real school's admin team. PDF certificate generation with @react-pdf.",
          schoolMgmtHighlight1: "Used daily by a real school's admin team",
          schoolMgmtHighlight2: "PDF certificate generation with @react-pdf",
          schoolMgmtHighlight3:
            "Row-Level Security and a contract-first API generated with Orval",
          liveRateTitle: "LiveRate Trader",
          liveRateDescription:
            "Real-time FX trading platform with a Bloomberg-terminal inspired dashboard. Features live market data streaming via WebSocket, interactive charts with technical indicators, order execution, and a strategy backtesting engine.",
          liveRateHighlight1: "7-panel Bloomberg-style dashboard built on CSS Grid",
          liveRateHighlight2: "Real-time price streaming via WebSocket",
          liveRateHighlight3:
            "Backtesting engine with Sharpe ratio and equity curves",
          parcFermeTitle: "Parc Fermé",
          parcFermeSummary:
            "Open to anyone during a race weekend: live timing, results and standings, and race analysis in plain language.",
          parcFermeDescription:
            "A Formula 1 companion for the whole race weekend: countdown to the next session, results and standings, live timing that switches on by itself when a session starts, and race analysis written in plain language. Built only on free data: the F1 live timing feed, Jolpica and OpenF1.",
          parcFermeHighlight1:
            "Live timing streamed from the official F1 feed over SignalR",
          parcFermeHighlight2:
            "Long-run pace and telemetry comparison, summed up in one sentence",
          parcFermeHighlight3:
            "One shared TypeScript core behind the web app and a native Android app",
          windletonTitle: "Windleton",
          windletonDescription:
            "3D puzzle game where you are trapped in your dad's manor. Solve the enigmas and leave this place. A school project built with Unity.",
          ascensionTitle: "Ascension",
          ascensionDescription:
            "2D platformer where you climb as high as possible using a grapple hook. Swing between floating asteroids, but be careful: some explode shortly after you grab them!",
          findingGilbertTitle: "Finding Gilbert",
          findingGilbertDescription:
            "A relaxing fishing adventure on a tiny island. With only 10 attempts, reel in the elusive clownfish Gilbert among a sea of colorful decoys. Made for Ludum Dare 56 in 72 hours.",
          vrEffondrementTitle: "VR Effondrement",
          vrEffondrementDescription:
            "VR serious game developed for tp.demain to raise awareness about trench collapse risks on construction sites. A disguised safety prevention tool built by a team of 5 students.",

          experiencesTitle: "Experience",
          experiencesIntro:
            "Three companies, three businesses to learn. Newest first.",
          fineticRole: "Fullstack developer",
          fineticPeriod: "Sep 2023 – Oct 2025",
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
          tripalioRole: "Web developer",
          tripalioPeriod: "May 2023 – Jul 2023",
          tripalioDescription1:
            "Front-end (HTML/CSS) and display fixes on app.tripalio.fr, a SaaS data platform on collective agreements used by insurers and brokers.",
          tripalioDescription2:
            "Got up to speed on an existing C# codebase and made my first backend query adjustments.",
          tripalioDescription3:
            "Updated the application's production content and made it more reliable.",
          sahazaGroupRole: "Web developer",
          sahazaGroupPeriod: "Apr 2020 – May 2022",
          sahazaGroupDescription1:
            "Built and maintained e-commerce sites with WordPress and PrestaShop, including custom development in HTML, CSS, JavaScript, and PHP.",
          sahazaGroupDescription2:
            "Developed a custom PrestaShop module tailored to a client's specific needs.",
          sahazaGroupDescription3:
            "Built an intranet site for the Sahaza Group using Drupal 8.",
          sahazaGroupDescription4:
            "Delivered responsive web integration across all projects.",
          companySite: "{{company}} website",

          aboutTitle: "About",
          aboutDescription1:
            "Fullstack developer with a Master's degree in IT Engineering from <university>ESIEE-IT</university> (specialization in VR & Game Development), graduated in 2025.",
          aboutDescription2:
            "For 2 years, I was the main developer at <finetic>Finetic</finetic>, a financial consulting firm, where I was in charge of most of the daily development on a SaaS business planning tool, from UI design to REST API architecture.",
          aboutDescription3:
            "I thrive on learning new domains through code. At Finetic, I dove deep into finance to truly understand the business needs, and I loved every bit of it. Since graduating, I've been building a school management system now used daily by a real school, alongside personal projects in trading and Formula 1.",
          aboutDescription4:
            "Autonomous, curious, and driven to always give my best, whether it's picking up a new technology, understanding a new business domain, or pushing a side project to production. Outside of code, I'm passionate about Formula 1, Dota 2, cooking, and science.",
          toolsTitle: "What I work with",
          skillsFrontend: "Frontend",
          skillsBackend: "Backend",
          skillsDatabase: "Database",
          skillsDevOps: "DevOps & tools",
          skillsGameDev: "Game dev",

          passionTitle: "Passions",
          passionTitleDescription:
            "Whether it's the precision of an F1 lap or the perfect team fight in Dota, I'm drawn to pursuits that demand excellence, strategy, and relentless improvement.",
          f1Title: "Formula 1",
          f1Subtitle: "The pinnacle of motorsport",
          f1Description:
            "The adrenaline, precision, and cutting-edge technology of F1 captivate me. Every race weekend is a masterclass in engineering excellence and human skill pushed to the absolute limit.",
          favoriteDriver: "Favorite driver",
          favoriteTeam: "Favorite team",
          favoriteCircuit: "Dream circuit",
          favoriteTeamValue: "All of them",
          yearsFollowing: "Following since",
          yearsFollowingValue: "2008",
          dota2Subtitle: "The ultimate strategy game",
          dota2Description:
            "Dota 2 is more than just a game; it's a test of strategy, teamwork, and skill. I love the depth of its gameplay and the thrill of competing at the highest levels.",
          mainRole: "Main role",
          mainRoleValue: "Position 1",
          favoriteHero: "Favorite hero",
          rank: "Rank",
          totalPlayTime: "Time played",
          totalPlayTimeValue: "7,000+ hours",
          checkMyProfile: "My Dota profile on Stratz",
          alsoTitle: "Also on the list",
          alsoText:
            "Cooking and science: two more places where I like to understand how things really work.",

          notFoundTitle: "This page went off track.",
          notFoundText:
            "The address doesn't match anything on this site. It may have moved, or the link has a typo.",
          notFoundHome: "Back to the start",
        },
      },
      fr: {
        translation: {
          languageCode: "fr",
          skipToContent: "Aller au contenu",
          openMenu: "Ouvrir le menu",
          closeMenu: "Fermer le menu",
          mainNav: "Principale",
          language: "Langue",
          languageEnglish: "Anglais",
          languageFrench: "Français",
          homeLink: "Dylan Andrew, accueil",

          home: "Accueil",
          work: "Projets",
          experiences: "Expérience",
          about: "À propos",
          passions: "Passions",

          heroLine: "Je plonge dans le métier, puis je construis ce dont il a besoin.",
          heroRole: "Développeur fullstack · Paris",
          heroCtaWork: "Voir les projets",
          heroCtaContact: "Me contacter",
          portraitAlt: "Dylan Andrew au jardin du Luxembourg, à Paris",

          timelineTitle: "Le tracé jusqu'ici",
          timelineIntro:
            "Chaque poste m'a d'abord appris un métier, avant de m'apprendre du code. Voici le parcours, de mes premiers sites clients à ce que je construis aujourd'hui.",
          now: "Aujourd'hui",
          stopSahazaDomain: "Agence web & e-commerce",
          stopSahazaText:
            "Des boutiques WordPress et PrestaShop, un module PrestaShop sur mesure et un intranet Drupal.",
          stopTripalioDomain: "Legaltech & conventions collectives",
          stopTripalioText:
            "Corrections front-end sur une plateforme de données sur les conventions collectives utilisée par des assureurs et des courtiers, et mes premiers pas dans une base de code C#.",
          stopFineticDomain: "Finance",
          stopFineticText:
            "Deux ans comme développeur principal d'un outil SaaS de business planning. J'ai appris la finance en profondeur pour construire ce dont les clients avaient vraiment besoin.",
          stopEsieeDomain: "VR & jeux vidéo",
          stopEsieeText:
            "Master Manager en Ingénierie Informatique à l'ESIEE-IT, spécialisation VR et jeux vidéo.",
          stopNowDomain: "Écoles & Formule 1",
          stopNowText:
            "Un système de gestion scolaire utilisé chaque jour par l'équipe administrative d'une vraie école, et Parc Fermé, un compagnon F1 que tout le monde peut utiliser pendant un week-end de course.",

          selectedWorkTitle: "Livré et utilisé",
          allWork: "Tous les projets",
          viewProject: "En savoir plus sur {{name}}",

          signoffTitle: `Vous travaillez sur un projet intéressant${NBSP}?`,
          signoffText:
            "Toujours partant pour une conversation sérieuse autour d'un projet, d'un business ou d'une idée ambitieuse.",
          signoffEmail: "M'écrire",
          signoffLinkedIn: "LinkedIn",
          copyright: "Conçu et développé par Dylan Andrew. © {{year}}",

          workTitle: "Projets",
          workIntro:
            "Ce que j'ai construit, en commençant par des logiciels que de vraies personnes utilisent chaque jour.",
          groupShipped: "Livré et utilisé",
          groupExplorations: "Explorations",
          groupExplorationsIntro:
            "Des projets perso où je m'attaque à un nouveau domaine de bout en bout.",
          groupGames: "Jeux & game jams",
          groupGamesIntro: `Là où tout a commencé${NBSP}: Unity, C#, VR et des jams de 72${NBSP}heures.`,
          fieldDomain: "Domaine",
          fieldYears: "Années",
          fieldStatus: "Statut",
          fieldPlatform: "Plateforme",
          fieldLearned: "Ce que j'ai appris",
          fieldStack: "Construit avec",
          howBuilt: "Comment c'est construit",
          statusInUse: "Utilisé au quotidien",
          statusShipped: "Livré",
          statusLive: "En ligne",
          statusPersonal: "Projet perso",
          statusJam: "Game jam",
          statusSchool: "Projet d'école",
          platformWeb: "Web",
          platformWebAndroid: "Web & Android",
          platformGame: "Jeu",
          platformVr: "VR",
          domainSchools: "Écoles",
          domainFinance: "Finance",
          domainTrading: "Trading",
          domainF1: "Formule 1",
          domainGames: "Jeux vidéo",
          domainSafety: "Sécurité sur chantier",
          playOnItch: "Jouer sur itch.io",
          downloadOnItch: "Télécharger sur itch.io",
          openApp: "Ouvrir l'app",
          opensInNewTab: "(s'ouvre dans un nouvel onglet)",

          schoolMgmtTitle: "Système de gestion scolaire",
          schoolMgmtDescription:
            "Application web full-stack digitalisant la gestion administrative d'une vraie école. Gère les fiches élèves, inscriptions, classes, génération de certificats PDF et tableaux de bord analytiques. V1 en production, utilisée au quotidien.",
          schoolMgmtSummary:
            "Utilisé quotidiennement par l'équipe admin d'une école. Génération de certificats PDF avec @react-pdf.",
          schoolMgmtHighlight1:
            "Utilisé quotidiennement par l'équipe admin d'une école",
          schoolMgmtHighlight2: "Génération de certificats PDF avec @react-pdf",
          schoolMgmtHighlight3:
            "Row-Level Security et API contract-first générée avec Orval",
          liveRateTitle: "LiveRate Trader",
          liveRateDescription:
            "Plateforme de trading FX en temps réel avec un dashboard inspiré de Bloomberg. Streaming de données de marché via WebSocket, graphiques interactifs avec indicateurs techniques, exécution d'ordres et moteur de backtesting.",
          liveRateHighlight1:
            "Dashboard façon Bloomberg à 7 panneaux, construit en CSS Grid",
          liveRateHighlight2: "Streaming de prix en temps réel via WebSocket",
          liveRateHighlight3:
            "Moteur de backtesting avec ratio de Sharpe et courbes d'equity",
          parcFermeTitle: "Parc Fermé",
          parcFermeSummary:
            `Ouvert à tous pendant un week-end de course${NBSP}: timing en direct, résultats et classements, et analyse de course expliquée simplement.`,
          parcFermeDescription:
            `Un compagnon F1 pour tout le week-end de course${NBSP}: compte à rebours avant la prochaine session, résultats et classements, timing en direct qui s'active tout seul au départ de la session, et analyse de course expliquée simplement. Uniquement des données gratuites${NBSP}: le flux de timing F1, Jolpica et OpenF1.`,
          parcFermeHighlight1:
            "Timing en direct depuis le flux officiel F1, via SignalR",
          parcFermeHighlight2:
            "Rythme en relais longs et comparaison de télémétrie, résumés en une phrase",
          parcFermeHighlight3:
            "Un seul cœur TypeScript partagé entre l'app web et une app Android native",
          windletonTitle: "Windleton",
          windletonDescription:
            "Jeu de puzzle 3D où vous êtes piégé dans le manoir de votre père. Résolvez les énigmes et quittez cet endroit. Projet scolaire réalisé avec Unity.",
          ascensionTitle: "Ascension",
          ascensionDescription: `Platformer 2D où vous grimpez le plus haut possible avec un grappin. Balancez-vous entre des astéroïdes flottants, mais attention${NBSP}: certains explosent peu après que vous les attrapez${NBSP}!`,
          findingGilbertTitle: "Finding Gilbert",
          findingGilbertDescription: `Une aventure de pêche relaxante sur une petite île. Avec seulement 10${NBSP}tentatives, attrapez l'insaisissable poisson-clown Gilbert parmi des leurres colorés. Réalisé pour le Ludum Dare 56 en 72${NBSP}heures.`,
          vrEffondrementTitle: "VR Effondrement",
          vrEffondrementDescription: `Serious game VR développé pour tp.demain afin de sensibiliser aux risques d'effondrement de tranchée sur les chantiers. Un outil de prévention déguisé réalisé par une équipe de 5${NBSP}étudiants.`,

          experiencesTitle: "Expérience",
          experiencesIntro:
            "Trois entreprises, trois métiers à apprendre. Du plus récent au plus ancien.",
          fineticRole: "Développeur fullstack",
          fineticPeriod: "Sept. 2023 – oct. 2025",
          fineticDescription1:
            "Développeur principal d'un outil SaaS de business planning, en charge de l'essentiel du développement quotidien sur l'ensemble de la stack.",
          fineticDescription2: `Développement du front-end complet${NBSP}: dashboards, exports de données et interfaces métier avec React, TypeScript et Material UI / Joy UI.`,
          fineticDescription3:
            "Conception et développement des API REST et de la logique back-end avec Python/Django, incluant de la modélisation financière complexe.",
          fineticDescription4:
            "Modélisation et optimisation de la base de données PostgreSQL pour la performance et l'intégrité des données.",
          fineticDescription5:
            "Rédaction de tests (Pytest, Jest), documentation technique, et collaboration en Agile/Scrum avec les équipes produit, design et business.",
          fineticDescription6:
            "Apprentissage approfondi du domaine financier pour comprendre les besoins métier et livrer des fonctionnalités adaptées aux attentes clients.",
          tripalioRole: "Développeur web",
          tripalioPeriod: "Mai 2023 – juil. 2023",
          tripalioDescription1:
            "Corrections front-end (HTML/CSS) et d'affichage sur app.tripalio.fr, une plateforme SaaS de données sur les conventions collectives utilisée par des assureurs et des courtiers.",
          tripalioDescription2:
            "Prise en main d'une base de code C# existante et premiers ajustements de requêtes backend.",
          tripalioDescription3:
            "Mise à jour et fiabilisation des contenus de l'application en production.",
          sahazaGroupRole: "Développeur web",
          sahazaGroupPeriod: "Avr. 2020 – mai 2022",
          sahazaGroupDescription1:
            "Création et maintenance de sites web sous WordPress et PrestaShop, avec développement spécifique en HTML, CSS, JavaScript et PHP.",
          sahazaGroupDescription2:
            "Réalisation d'un module PrestaShop sur mesure pour un client.",
          sahazaGroupDescription3:
            "Développement d'un site intranet pour le Sahaza Group avec Drupal 8.",
          sahazaGroupDescription4:
            "Intégration web responsive sur l'ensemble des projets.",
          companySite: "Site de {{company}}",

          aboutTitle: "À propos",
          aboutDescription1:
            "Développeur fullstack diplômé d'un Master Manager en Ingénierie Informatique à l'<university>ESIEE-IT</university> en 2025, spécialisation VR et jeux vidéo.",
          aboutDescription2:
            "Pendant 2 ans, j'étais développeur principal chez <finetic>Finetic</finetic>, un cabinet de conseil financier, en charge de l'essentiel du développement quotidien d'un outil SaaS de business planning, du design UI à l'architecture des API REST.",
          aboutDescription3:
            "J'aime apprendre de nouveaux domaines à travers le code. Chez Finetic, j'ai plongé dans la finance pour vraiment comprendre les besoins métier, et j'ai adoré. Depuis l'obtention de mon diplôme, je développe un système de gestion scolaire utilisé au quotidien par une vraie école, en parallèle de projets personnels en trading et Formule 1.",
          aboutDescription4:
            "Autonome, curieux, et motivé à toujours donner le meilleur de moi-même, que ce soit pour apprendre une nouvelle technologie, comprendre un nouveau domaine métier, ou pousser un projet perso jusqu'en production. En dehors du code, je suis passionné par la Formule 1, Dota 2, la cuisine et la science.",
          toolsTitle: "Avec quoi je travaille",
          skillsFrontend: "Frontend",
          skillsBackend: "Backend",
          skillsDatabase: "Base de données",
          skillsDevOps: "DevOps & outils",
          skillsGameDev: "Jeux vidéo",

          passionTitle: "Passions",
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
          yearsFollowing: "Fan depuis",
          yearsFollowingValue: "2008",
          dota2Subtitle: "Le jeu de stratégie ultime",
          dota2Description: `Dota 2 est plus qu'un simple jeu${NBSP}; c'est un test de stratégie, de travail d'équipe et de compétence. J'adore la profondeur de son gameplay et l'excitation de la compétition au plus haut niveau.`,
          mainRole: "Rôle principal",
          mainRoleValue: "Position 1",
          favoriteHero: "Héros préféré",
          rank: "Rang",
          totalPlayTime: "Temps de jeu",
          totalPlayTimeValue: `7${NBSP}000+ heures`,
          checkMyProfile: "Mon profil Dota sur Stratz",
          alsoTitle: "Et aussi",
          alsoText: `La cuisine et la science${NBSP}: deux autres terrains où j'aime comprendre comment les choses fonctionnent vraiment.`,

          notFoundTitle: "Cette page est sortie de la piste.",
          notFoundText:
            "Cette adresse ne correspond à rien sur ce site. La page a peut-être été déplacée, ou le lien contient une faute de frappe.",
          notFoundHome: "Retour au départ",
        },
      },
    },
  });

const syncDocumentLanguage = (lng?: string) => {
  const lang = (lng ?? i18n.resolvedLanguage ?? "en").startsWith("fr")
    ? "fr"
    : "en";
  document.documentElement.lang = lang;
};

syncDocumentLanguage();
i18n.on("languageChanged", syncDocumentLanguage);

export default i18n;

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
            "I'm a software developer based in Paris, with a Master's degree in Computer Science.",
          homeDescription2:
            "I focus on writing clean code and crafting seamless digital experiences.",
          homeButton: "Tap to see more →",
          about: "About Me",
          experiences: "Experiences",
          projects: "Projects",
          passions: "Passions",
          contact: "Contact",
          home: "Home",
          language: "Change Language",
          aboutDescription1:
            "I'm a full-stack developer at <finetic>Finetic</finetic>, working on a custom web application that streamlines the creation of business plans.",
          aboutDescription2:
            "I am currently in the final year of a Master's degree in IT Engineering Management at <university>ESIEE-IT</university>",
          aboutDescription3:
            "Outside of work, I'm passionate about Formula 1, enjoy playing a lot of Dota 2, love cooking, and curious about science and new technologies.",
          technologiesIntroduction:
            "Here are some technologies I have been working with:",
          experiencesTitle: "My Experiences",
          fineticTitle: "Fullstack developper @ <title>Finetic</title>",
          fineticPeriod: "September 2023 - Present",
          fineticDescription1:
            "Developping a custom web application that simplifies the creation of business plans.",
          fineticDescription2:
            "Relevant technologies/tools used: React, TypeScript, Python, Django, PostgreSQL, Vercel.",
          tripalioTitle: "Intern backend developper @ <title>Tripalio</title>",
          tripalioPeriod: "May 2023 - July 2023",
          tripalioDescription1:
            "Worked on an insurance web application, focusing on backend development using C#.",
          sahazaGroupTitle: "Web developper @ <title>Sahaza Group</title>",
          sahazaGroupPeriod: "April 2020 - May 2022",
          sahazaGroupDescription1:
            "Worked on e-commerce sites using Prestashop",
          sahazaGroupDescription2:
            "Developed a website for the <fea>women entrepreneurs of Analamanga</fea> using WordPress",
          sahazaGroupDescription3:
            "Developed an intranet site for the Sahaza Group using Drupal",
          passionTitle: "My Passions",
          passionTitleDescription:
            "Beyond code, I'm driven by the speed of Formula 1, the strategy of Dota 2, and the thrill of competitive sports.",
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
          dylanAndrewQuote:
            "Whether it's the precision of an F1 lap or the perfect team fight in Dota, I'm drawn to pursuits that demand excellence, strategy, and relentless improvement.",
        },
      },
      fr: {
        translation: {
          languageCode: "fr",
          welcome: "Hello, je suis Dylan Andrew !",
          copyright:
            "Conçu et développé par Dylan Andrew. Tous droits réservés. ©",
          homeDescription1:
            "Développeur Full Stack basé à Paris, diplômé d'un Master en informatique.",
          homeDescription2:
            "Je conçois des expériences numériques soignées, portées par une approche rigoureuse du clean code.",
          homeButton: "En savoir plus →",
          about: "À propos de moi",
          experiences: "Expériences",
          projects: "Projets",
          passions: "Passions",
          contact: "Contact",
          home: "Accueil",
          language: "Changer de langue",
          aboutDescription1:
            "Je suis développeur full-stack chez <finetic>Finetic</finetic>, travaillant sur une application web sur mesure qui simplifie la création de business plans.",
          aboutDescription2:
            "Je suis actuellement en dernière année du Master Manager en Ingénierie Informatique à l'<university>ESIEE-IT</university>",
          aboutDescription3:
            "En dehors du travail, je suis passionné par la Formule 1, je joue beaucoup à Dota 2, j'aime cuisiner, et je m'intéresse à la science et aux nouvelles technologies.",
          technologiesIntroduction:
            "Voici quelques technologies avec lesquelles j'ai travaillé :",
          experiencesTitle: "Mes Expériences",
          fineticTitle: "Développeur fullstack chez <title>Finetic</title>",
          fineticPeriod: "Septembre 2023 - Présent",
          fineticDescription1:
            "Développement d'une application web sur mesure qui simplifie la création de business plans.",
          fineticDescription2:
            "Technologies/outils pertinents utilisés : React, TypeScript, Python, Django, PostgreSQL, Vercel.",
          tripalioTitle:
            "Stagiaire développeur backend chez <title>Tripalio</title>",
          tripalioPeriod: "Mai 2023 - Juillet 2023",
          tripalioDescription1:
            "J'ai travaillé sur une application web d'assurance, en me concentrant sur le développement backend en C#.",
          sahazaGroupTitle: "Développeur web chez <title>Sahaza Group</title>",
          sahazaGroupPeriod: "Avril 2020 - Mai 2022",
          sahazaGroupDescription1:
            "J'ai travaillé sur des sites e-commerce utilisant Prestashop",
          sahazaGroupDescription2:
            "J'ai développé un site web pour les <fea>femmes entrepreneurs d'Analamanga</fea> en utilisant WordPress",
          sahazaGroupDescription3:
            "J'ai développé un site intranet pour le Sahaza Group en utilisant Drupal",
          passionTitle: "Mes Passions",
          passionTitleDescription:
            "Au-delà du code, je suis passionné par la vitesse de la Formule 1, la stratégie de Dota 2 et l'adrénaline des sports compétitifs.",
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
          dylanAndrewQuote:
            "Que ce soit la précision d'un tour en F1 ou la coordination parfaite d'une équipe dans Dota, je suis attiré par les défis qui exigent excellence, stratégie et amélioration continue.",
        },
      },
    },
  });

export default i18n;

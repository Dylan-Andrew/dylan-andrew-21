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
        },
      },
    },
  });

export default i18n;

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
          welcome: "Hi there, Dylan Andrew here!",
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
        },
      },
      fr: {
        translation: {
          welcome: "Hello, je suis Dylan Andrew !",
          homeDescription1:
            "Développeur Full Stack basé à Paris, diplômé d’un Master en informatique.",
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
        },
      },
    },
  });

export default i18n;

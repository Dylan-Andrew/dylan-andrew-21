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
          welcome: "Welcome to my portfolio",
          about: "About Me",
          experiences: "Experiences",
          projects: "Projects",
          passions: "Passions",
          contact: "Contact",
          home: "Home",
          email: "Email",
          linkedin: "LinkedIn",
          itchio: "Itch.io",
          language: "Change Language",
        },
      },
      fr: {
        translation: {
          welcome: "Bienvenue sur mon portfolio",
          about: "À propos de moi",
          experiences: "Expériences",
          projects: "Projets",
          passions: "Passions",
          contact: "Contact",
          home: "Accueil",
          email: "Email",
          linkedin: "LinkedIn",
          itchio: "Itch.io",
          language: "Changer de langue",
        },
      },
    },
  });

export default i18n;

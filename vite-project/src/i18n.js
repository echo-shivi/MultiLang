import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    returnObjects:true,
    lng: "hi",
    resources: {
      en: {
        translation: {
          greeting: "Hello, World ",
          description: {
            line1: "today is a beautiful day",
            line2: "be grateful",
          },
        },
      },
      fr: {
        translation: {
          greeting: " Bonjour, le monde",
          description: {
            line1: "Aujourd'hui est une belle journée",
            line2: "Soyez reconnaissant",
          },
        },
      },
      hi: {
        translation: {
          greeting: "नमस्ते दुनिया (Namaste Duniya) ",
          description: {
            line1: "आज एक सुंदर दिन है",
            line2: "आभारी रहें",
          },
        },
      },
    },
  });

export default i18n;

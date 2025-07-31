import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "@/locales/en/translation.json"
import arTranslation from "@/locales/ar/translation.json"


i18next
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      ar: {
        translation: arTranslation,
      },
    },
    lng: "en", // Default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18next;
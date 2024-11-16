import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    ns: "translation",
    backend: {
      loadPath: "./locales/{{lng}}/{{ns}}.json",
    },
    detection: {
      order: [
        "querystring",
        "cookie",
        "localStorage",
        "sessionStorage",
        "navigator",
        "htmlTag",
        "path",
        "subdomain",
      ],
      caches: ["localStorage"],
      cookieMinutes: 10080,
      lookupQuerystring: "lng",
      lookupCookie: "server_language",
      lookupLocalStorage: "i18nextLng",
      lookupSessionStorage: "i18nextLng",
      excludeCacheFor: ["cimode"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

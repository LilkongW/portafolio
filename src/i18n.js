import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importa los archivos de traducción
import enTranslation from './translations/en.json';
import esTranslation from "./translations/es.json";

// Configura i18next
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    es: { translation: esTranslation },
  },
  lng: 'es', // Idioma predeterminado
  fallbackLng: 'es', // Si no se encuentra la traducción, se usa español
  interpolation: {
    escapeValue: false, // No se necesita escape en React
  },
});

export default i18n;

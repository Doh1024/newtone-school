import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

//JSON FILES
import enTranslation from './lngs/en.json';
import frTranslation from './lngs/fr.json';
import spTranslation from './lngs/sp.json';
import krTranslation from './lngs/kr.json';


i18n.use(initReactI18next).init({
	resources: {
		en: {
			translation: enTranslation,
		},
		fr: {
			translation: frTranslation,
		},
		sp: {
			translation: spTranslation,
		},
		kr:{
			translation: krTranslation,
		},
	},
	lng: 'en', // default language
	fallbackLng: 'en', // fallback language
});

export default i18n;
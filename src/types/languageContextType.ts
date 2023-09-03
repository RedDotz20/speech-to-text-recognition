import { languageTypes } from './languageTypes';

interface currentLanguageType {
	currentLanguage: languageTypes;
}

interface changeLanguageType {
	changeLanguage: (
		selectedName: languageTypes['name'],
		selectedValue: languageTypes['value']
	) => void;
}

export interface LanguageContextType
	extends currentLanguageType,
		changeLanguageType {}

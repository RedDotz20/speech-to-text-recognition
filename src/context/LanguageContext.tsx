import { createContext, useState } from 'react';
import { languageTypes } from '../types/languageTypes';
import { LanguageContextType } from '../types/languageContextType';

type ProviderProps = { children: React.ReactNode };

export const LanguageContext = createContext<LanguageContextType | undefined>(
	undefined
);

export default function LanguageContextProvider({ children }: ProviderProps) {
	const [currentLanguage, setCurrentLanguage] = useState<languageTypes>({
		name: 'English',
		value: 'en-US',
	});

	function changeLanguage(
		selectedName: languageTypes['name'],
		selectedValue: languageTypes['value']
	) {
		setCurrentLanguage({ name: selectedName, value: selectedValue });
	}

	return (
		<LanguageContext.Provider value={{ currentLanguage, changeLanguage }}>
			<div className="flex justify-center gap-4 p-2 mx-auto border-4 rounded-xl h-96">
				{children}
			</div>
		</LanguageContext.Provider>
	);
}

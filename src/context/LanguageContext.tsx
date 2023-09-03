import { createContext, useState } from 'react';
import { languageTypes } from '../types/languageTypes';
import { LanguageContextType } from '../types/languageContextType';
import { Flex } from '@chakra-ui/react';

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
			<Flex
				justifyContent="center"
				gap={2}
				p={2}
				mx="auto"
				borderWidth={4}
				rounded="xl"
				minH="390px"
				maxH="390px"
			>
				{children}
			</Flex>
		</LanguageContext.Provider>
	);
}

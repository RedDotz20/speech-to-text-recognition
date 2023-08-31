// import React from 'react';
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { languageSupported } from '../constants/languageSupport';
import {
	Button,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Text,
} from '@chakra-ui/react';

export default function MainControls() {
	const { currentLanguage, changeLanguage } = useContext<any>(LanguageContext);

	return (
		<section className="border-0 rounded-lg">
			<Text
				fontSize="sm"
				textAlign="left"
			>
				Current Language
			</Text>
			<Menu>
				<MenuButton
					minWidth={'200px'}
					textAlign="left"
					as={Button}
					// rightIcon={<ChevronDownIcon />}
				>
					{currentLanguage.name}
				</MenuButton>
				<MenuList minWidth={'200px'}>
					{languageSupported.map((language) => {
						return (
							<MenuItem
								key={language.value}
								onClick={() => changeLanguage(language.name, language.value)}
							>
								{language.name}
							</MenuItem>
						);
					})}
				</MenuList>
			</Menu>
		</section>
	);
}

import { useContext } from 'react';
import {
	Box,
	Button,
	Icon,
	Image,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Stack,
	Text,
} from '@chakra-ui/react';
import { BsGlobeAmericas } from 'react-icons/Bs';
import { MdKeyboardArrowDown } from 'react-icons/Md';

import { LanguageContext } from '../../context/LanguageContext';
import { SpeechRecognitionContext } from '../../context/SpeechRecognitionContext';
import { languageSupported } from '../../constants/languageSupport';

export default function LanguageSelector() {
	const { currentLanguage, changeLanguage } = useContext<any>(LanguageContext);
	const { listening } = useContext<any>(SpeechRecognitionContext);

	const findCurrentLanguageIndex = (languageValue: string) => {
		return languageSupported.findIndex(
			(language) => language.name === languageValue
		);
	};

	return (
		<Stack
			direction="column"
			alignItems="flex-start"
			spacing={2}
			marginBottom={4}
		>
			<Stack
				direction="row"
				alignItems="center"
			>
				<Icon as={BsGlobeAmericas} />
				<Text
					fontSize="md"
					textAlign="left"
					fontWeight={500}
				>
					Current Language
				</Text>
			</Stack>

			<Menu>
				<MenuButton
					as={Button}
					rightIcon={<MdKeyboardArrowDown />}
					variant="outline"
					textAlign="left"
					isDisabled={listening}
				>
					<Box className="flex items-center gap-2">
						<Image
							src={
								languageSupported[
									findCurrentLanguageIndex(currentLanguage.name)
								].flag
							}
							alt={currentLanguage.name}
							width={15}
							className="my-auto"
						/>
						<Text>{currentLanguage.name}</Text>
					</Box>
				</MenuButton>

				<MenuList minWidth={178}>
					{languageSupported.map((language) => {
						return (
							<MenuItem
								key={language.value}
								onClick={() => changeLanguage(language.name, language.value)}
								className="flex items-center gap-2"
							>
								<Image
									src={language.flag}
									alt={language.name}
									width={13}
									className="my-auto"
								/>
								<Text fontSize="sm">{language.name}</Text>
							</MenuItem>
						);
					})}
				</MenuList>
			</Menu>
		</Stack>
	);
}

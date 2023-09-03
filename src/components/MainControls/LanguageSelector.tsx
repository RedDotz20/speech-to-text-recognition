import { useContext } from 'react';
import {
	Button,
	Flex,
	HStack,
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
import { MdKeyboardArrowDown } from 'react-icons/md';

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
		<Flex flexDirection="column">
			<Stack
				direction="row"
				alignItems="center"
				mb={2}
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
					<HStack
						alignItems="center"
						spacing={2}
					>
						<Image
							src={
								languageSupported[
									findCurrentLanguageIndex(currentLanguage.name)
								].flag
							}
							alt={currentLanguage.name}
							width={15}
							my="auto"
						/>
						<Text>{currentLanguage.name}</Text>
					</HStack>
				</MenuButton>

				<MenuList minWidth={208}>
					{languageSupported.map((language) => {
						return (
							<MenuItem
								key={language.value}
								onClick={() => changeLanguage(language.name, language.value)}
							>
								<HStack
									alignItems="center"
									spacing={2}
								>
									<Image
										src={language.flag}
										alt={language.name}
										width={13}
										my="auto"
									/>
									<Text fontSize="sm">{language.name}</Text>
								</HStack>
							</MenuItem>
						);
					})}
				</MenuList>
			</Menu>
		</Flex>
	);
}

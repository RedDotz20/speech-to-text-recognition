import { useContext } from 'react';
import SpeechRecognition from 'react-speech-recognition';
import {
	Box,
	Button,
	IconButton,
	Image,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Text,
} from '@chakra-ui/react';
import { BsFillStopFill, BsFillPlayFill } from 'react-icons/Bs';
import { RxReset } from 'react-icons/Rx';
import { MdKeyboardArrowDown } from 'react-icons/Md';

import { LanguageContext } from '../context/LanguageContext';
import { languageSupported } from '../constants/languageSupport';
import { SpeechRecognitionContext } from '../context/SpeechRecognitionContext';

export default function MainControls() {
	return (
		<Box className="py-3 px-4 bg-[#fff] rounded-r-lg min-w-[210px]">
			<LanguageSelector />
			<SpeechControls />
		</Box>
	);
}

function LanguageSelector() {
	const { currentLanguage, changeLanguage } = useContext<any>(LanguageContext);
	const { listening } = useContext<any>(SpeechRecognitionContext);

	const findCurrentLanguageIndex = (languageValue: string) => {
		return languageSupported.findIndex(
			(language) => language.name === languageValue
		);
	};

	return (
		<Box className="flex flex-col gap-2 mb-4">
			<Text
				fontSize="sm"
				fontWeight={600}
				textAlign="left"
			>
				Current Language
			</Text>

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
		</Box>
	);
}

function SpeechControls() {
	const { currentLanguage } = useContext<any>(LanguageContext);
	const { listening, resetTranscript, resetClipboard } = useContext<any>(
		SpeechRecognitionContext
	);

	const triggerActions = () => {
		if (!listening) {
			resetClipboard();
			return SpeechRecognition.startListening({
				continuous: true,
				language: currentLanguage.value,
			});
		}
		return SpeechRecognition.stopListening();
	};

	const resetTranscription = () => {
		resetClipboard();
		resetTranscript();
	};

	return (
		<Box className="flex justify-around">
			<Box className="flex flex-col items-center justify-center gap-2">
				<Text
					fontSize="lg"
					fontWeight={500}
				>
					{!listening ? 'START' : 'STOP'}
				</Text>
				<IconButton
					variant={!listening ? 'solid' : 'outline'}
					aria-label="Start/Stop"
					size="lg"
					borderRadius={100}
					onClick={() => triggerActions()}
					colorScheme={!listening ? 'green' : 'red'}
					icon={
						!listening ? (
							<BsFillPlayFill size={24} />
						) : (
							<BsFillStopFill size={24} />
						)
					}
				/>
			</Box>

			<Box className="flex flex-col items-center justify-center gap-2">
				<Text
					fontSize="lg"
					fontWeight={500}
				>
					RESET
				</Text>
				<IconButton
					aria-label="Reset"
					size="lg"
					borderRadius={100}
					onClick={() => resetTranscription()}
					colorScheme="blue"
					variant="solid"
					icon={
						<RxReset
							className="text-white"
							size={24}
						/>
					}
				/>
			</Box>
		</Box>
	);
}

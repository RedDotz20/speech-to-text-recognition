// import React from 'react';
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { languageSupported } from '../constants/languageSupport';
import SpeechRecognition, {
	useSpeechRecognition,
} from 'react-speech-recognition';
import {
	Box,
	Button,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Text,
} from '@chakra-ui/react';
import { BsFillPauseFill, BsFillPlayFill } from 'react-icons/Bs';
import { GrPowerReset } from 'react-icons/Gr';
// import { BiDownArrow } from 'react-icons/Bi';

export default function MainControls() {
	const { listening, resetTranscript } = useSpeechRecognition();
	const { currentLanguage, changeLanguage } = useContext<any>(LanguageContext);

	const triggerActions = () => {
		if (!listening) {
			// setCopied(false);
			return SpeechRecognition.startListening({
				continuous: true,
				language: currentLanguage.value,
			});
		}
		return SpeechRecognition.stopListening();
	};

	const resetTranscriptText = () => {
		// setCopied(false);
		resetTranscript();
	};

	return (
		<Box>
			<Text
				fontSize="sm"
				textAlign="left"
			>
				Current Language
			</Text>
			<Menu>
				<MenuButton
					as={Button}
					// rightIcon={<BiDownArrow />}
					variant="outline"
					minWidth="200px"
					textAlign="left"
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

			<div className="action-buttons">
				<Button
					colorScheme={!listening ? 'green' : 'red'}
					leftIcon={
						!listening ? (
							<BsFillPlayFill size={20} />
						) : (
							<BsFillPauseFill size={20} />
						)
					}
					onClick={() => triggerActions()}
				>
					<span className="text-lg">{!listening ? 'Start' : 'Stop'}</span>
				</Button>
				<Button
					colorScheme="teal"
					variant="solid"
					leftIcon={<GrPowerReset />}
					onClick={() => resetTranscriptText()}
					className="font-black"
				>
					<span className="text-lg">Reset</span>
				</Button>
			</div>
		</Box>
	);
}

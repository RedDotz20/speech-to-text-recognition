import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { languageSupported } from '../constants/languageSupport';
import { SpeechRecognitionContext } from '../context/SpeechRecognitionContext';
import SpeechRecognition from 'react-speech-recognition';

import {
	Box,
	Button,
	Image,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Text,
} from '@chakra-ui/react';
import { BsFillPauseFill, BsFillPlayFill } from 'react-icons/Bs';
import { RxReset } from 'react-icons/Rx';
import { MdKeyboardArrowDown } from 'react-icons/Md';

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

				<MenuList>
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

type CopiedToClipboardProps = { isCopiedToClipboard: boolean };

function SpeechControls({ isCopiedToClipboard }: CopiedToClipboardProps) {
	const { currentLanguage } = useContext<any>(LanguageContext);
	const { listening, resetTranscript } = useContext<any>(
		SpeechRecognitionContext
	);

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

	return (
		<Box className="flex gap-2">
			<Button
				onClick={() => triggerActions()}
				colorScheme={!listening ? 'green' : 'red'}
				leftIcon={
					!listening ? (
						<BsFillPlayFill size={20} />
					) : (
						<BsFillPauseFill size={20} />
					)
				}
			>
				<Text fontSize="lg">{!listening ? 'Start' : 'Stop'}</Text>
			</Button>

			<Button
				onClick={() => resetTranscript()}
				colorScheme="teal"
				variant="solid"
				leftIcon={
					<RxReset
						className="text-white"
						size={20}
					/>
				}
			>
				<Text fontSize="lg">Reset</Text>
			</Button>
		</Box>
	);
}

export default function MainControls({
	isCopiedToClipboard,
}: CopiedToClipboardProps) {
	return (
		<Box className="my-3 mr-4">
			<LanguageSelector />
			<SpeechControls isCopiedToClipboard={isCopiedToClipboard} />
		</Box>
	);
}

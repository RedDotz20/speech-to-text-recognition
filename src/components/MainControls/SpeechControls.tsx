import { useContext } from 'react';
import SpeechRecognition from 'react-speech-recognition';
import {
	HStack,
	VStack,
	Text,
	StackDivider,
	IconButton,
	Stack,
	Icon,
} from '@chakra-ui/react';

import { RxReset } from 'react-icons/rx';
import { AiFillControl } from 'react-icons/ai';
import { IoPlay, IoStop } from 'react-icons/io5';

import { LanguageContext } from '../../context/LanguageContext';
import { SpeechRecognitionContext } from '../../context/SpeechRecognitionContext';

export default function SpeechControls() {
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
		<Stack
			direction="column"
			mb={4}
		>
			<HStack>
				<Icon as={AiFillControl} />
				<Text>Main Controls</Text>
			</HStack>
			<Stack
				direction="row"
				justify="space-evenly"
				divider={<StackDivider borderColor="gray.600" />}
			>
				<VStack
					align="center"
					justify="center"
					spacing={2}
				>
					<Text
						fontSize="lg"
						fontWeight={500}
						minWidth={55}
						textAlign="center"
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
						icon={!listening ? <IoPlay size={24} /> : <IoStop size={24} />}
					/>
				</VStack>

				<VStack
					align="center"
					justify="center"
					spacing={2}
				>
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
						icon={<RxReset size={24} />}
					/>
				</VStack>
			</Stack>
		</Stack>
	);
}

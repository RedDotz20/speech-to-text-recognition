// import { useSpeechRecognition } from 'react-speech-recognition';
import { Box, Heading, Icon } from '@chakra-ui/react';
import { BsChatText } from 'react-icons/Bs';
import { HiOutlineMicrophone } from 'react-icons/Hi';

import MainControls from './components/MainControls';
import Transcription from './components/Transcription';
import SpeechRecognitionProvider from './context/SpeechRecognitionContext';
import LanguageContextProvider from './context/LanguageContext';

export default function App() {
	// const { browserSupportsSpeechRecognition } = useSpeechRecognition();

	// if (!browserSupportsSpeechRecognition) {
	// 	return (
	// 		<Heading className="grid items-center h-screen text-4xl font-bold">
	// 			This Browser doesn't support Speech Recognition.
	// 		</Heading>
	// 	);
	// }

	return (
		<Box
			as="main"
			className="flex flex-col items-center justify-center min-h-screen"
		>
			<Heading
				size="lg"
				className="flex items-center gap-1 mb-6 text-[#fff]"
			>
				<Icon
					as={BsChatText}
					mr={2}
				/>
				Speech To Text Recognition
				<Icon
					as={HiOutlineMicrophone}
					ml={1}
				/>
			</Heading>

			<SpeechRecognitionProvider>
				<LanguageContextProvider>
					<Transcription />
					<MainControls />
				</LanguageContextProvider>
			</SpeechRecognitionProvider>
		</Box>
	);
}

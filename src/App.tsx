// import { useSpeechRecognition } from 'react-speech-recognition';
import { useState } from 'react';
import { Box, Heading, Icon } from '@chakra-ui/react';
import { BsChatText } from 'react-icons/Bs';
import { HiOutlineMicrophone } from 'react-icons/Hi';
import copy from 'clipboard-copy';

import MainControls from './components/MainControls';
import Transcription from './components/Transcription';
import SpeechRecognitionProvider from './context/SpeechRecognitionContext';
import LanguageContextProvider from './context/LanguageContext';

export default function App() {
	const [isCopiedToClipboard, setIsCopiedToClipboard] = useState(false);
	// const { browserSupportsSpeechRecognition } = useSpeechRecognition();

	const handleCopyToClipboard = async (textToCopy: string) => {
		try {
			await copy(textToCopy);
			setIsCopiedToClipboard(true);
		} catch (error) {
			console.error('Copy to clipboard failed:', error);
		}
	};

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
				marginBottom={4}
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
					<Transcription
						isCopiedToClipboard={isCopiedToClipboard}
						handleCopyToClipboard={handleCopyToClipboard}
					/>
					<MainControls isCopiedToClipboard={isCopiedToClipboard} />
				</LanguageContextProvider>
			</SpeechRecognitionProvider>
		</Box>
	);
}

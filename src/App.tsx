import { useSpeechRecognition } from 'react-speech-recognition';
import { Flex, Grid, Heading, Icon } from '@chakra-ui/react';
import { BsChatText } from 'react-icons/Bs';
import { HiOutlineMicrophone } from 'react-icons/Hi';

import SpeechRecognitionProvider from './context/SpeechRecognitionContext';
import LanguageContextProvider from './context/LanguageContext';
import TranscriptContextProvider from './context/TranscriptContext';

import MainControls from './components/MainControls';
import Transcription from './components/Transcription';

export default function App() {
	const { browserSupportsSpeechRecognition } = useSpeechRecognition();

	if (!browserSupportsSpeechRecognition) {
		return <ErrorHeading />;
	}

	return (
		<Flex
			as="main"
			direction="column"
			alignItems="center"
			justifyContent="center"
			minH="100vh"
		>
			<MainHeading />

			<SpeechRecognitionProvider>
				<LanguageContextProvider>
					<TranscriptContextProvider>
						<Transcription />
						<MainControls />
					</TranscriptContextProvider>
				</LanguageContextProvider>
			</SpeechRecognitionProvider>
		</Flex>
	);
}

function MainHeading() {
	return (
		<Flex
			alignItems="center"
			gap={1}
			mb={6}
			color="#fff"
		>
			<Icon
				as={BsChatText}
				boxSize={8}
				mr={2}
			/>
			<Heading size="lg">Speech To Text Recognition</Heading>
			<Icon
				as={HiOutlineMicrophone}
				boxSize={8}
				ml={1}
			/>
		</Flex>
	);
}

function ErrorHeading() {
	return (
		<Grid
			placeItems="center"
			textAlign="center"
			height="100vh"
		>
			<Heading
				fontSize="4xl"
				fontWeight="bold"
				color="#fff"
			>
				This Browser doesn't support Speech Recognition.
			</Heading>
		</Grid>
	);
}

// import { useSpeechRecognition } from 'react-speech-recognition';
import { Box, Flex, Grid, Heading, Icon } from '@chakra-ui/react';
import { BsChatText } from 'react-icons/Bs';
import { HiOutlineMicrophone } from 'react-icons/Hi';

import MainControls from './components/MainControls';
import Transcription from './components/Transcription';
import SpeechRecognitionProvider from './context/SpeechRecognitionContext';
import LanguageContextProvider from './context/LanguageContext';

export default function App() {
	// const { browserSupportsSpeechRecognition } = useSpeechRecognition();

	// if (!browserSupportsSpeechRecognition) return <ErrorHeading />

	return (
		<Box
			as="main"
			className="flex flex-col items-center justify-center min-h-screen"
		>
			<MainHeading />

			<SpeechRecognitionProvider>
				<LanguageContextProvider>
					<Transcription />
					<MainControls />
				</LanguageContextProvider>
			</SpeechRecognitionProvider>
		</Box>
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
				mr={2}
			/>
			<Heading size="lg">Speech To Text Recognition</Heading>
			<Icon
				as={HiOutlineMicrophone}
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
			>
				This Browser doesn't support Speech Recognition.
			</Heading>
		</Grid>
	);
}

import { useSpeechRecognition } from "react-speech-recognition";
import { Flex, Grid, Heading, Icon } from "@chakra-ui/react";
import { PiChatsCircleBold, PiMicrophone } from "react-icons/pi";

import SpeechRecognitionProvider from "./context/SpeechRecognitionContext";
import LanguageContextProvider from "./context/LanguageContext";
import TranscriptContextProvider from "./context/TranscriptContext";

import MainControls from "./components/MainControls";
import Transcription from "./components/Transcription";
import SpeechRecognitionTroubleshoot from "./components/SpeechRecognitionTroubleshoot";
import DebugPanel from "./components/DebugPanel";
import SimpleSpeechTest from "./components/SimpleSpeechTest";

export default function App() {
	const { browserSupportsSpeechRecognition } = useSpeechRecognition();

	if (!browserSupportsSpeechRecognition) {
		return (
			<Flex
				as="main"
				direction="column"
				alignItems="center"
				justifyContent="center"
				minH="100vh"
			>
				<ErrorHeading />
				<SpeechRecognitionTroubleshoot />
			</Flex>
		);
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
						<SimpleSpeechTest />
						<Transcription />
						<MainControls />
						<DebugPanel />
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
				as={PiChatsCircleBold}
				boxSize={8}
				mr={2}
			/>
			<Heading size="lg">Speech To Text Recognition</Heading>
			<Icon
				as={PiMicrophone}
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
			height="auto"
			mb={8}
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

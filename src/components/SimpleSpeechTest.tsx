import { useState } from "react";
import { Button, Text, VStack, Box, Alert, AlertIcon } from "@chakra-ui/react";
import SpeechRecognition, {
	useSpeechRecognition,
} from "react-speech-recognition";

export default function SimpleSpeechTest() {
	const [testResult, setTestResult] = useState<string>("");

	const {
		transcript,
		listening,
		resetTranscript,
		browserSupportsSpeechRecognition,
	} = useSpeechRecognition();

	const testDirectSpeechRecognition = async () => {
		console.log("🧪 Testing direct speech recognition...");
		setTestResult("Testing...");

		try {
			if (!browserSupportsSpeechRecognition) {
				setTestResult("❌ Browser does not support speech recognition");
				return;
			}

			console.log("Starting direct speech recognition...");
			await SpeechRecognition.startListening({
				continuous: true,
				language: "en-US",
			});
			setTestResult("✅ Direct speech recognition started successfully");

			setTimeout(() => {
				SpeechRecognition.stopListening();
				setTestResult(`✅ Test completed. Transcript: "${transcript}"`);
			}, 5000);
		} catch (error) {
			console.error("❌ Direct speech recognition failed:", error);
			if (error instanceof Error) {
				setTestResult(`❌ Error: ${error.message}`);
			} else {
				setTestResult("❌ An unknown error occurred");
			}
		}
	};

	if (!browserSupportsSpeechRecognition) {
		return (
			<Alert status="error">
				<AlertIcon />
				Browser does not support speech recognition
			</Alert>
		);
	}

	return (
		<Box
			p={4}
			border="2px"
			borderColor="blue.200"
			borderRadius="md"
			bg="blue.50"
		>
			<VStack spacing={4}>
				<Text
					fontSize="lg"
					fontWeight="bold"
				>
					Simple Speech Test
				</Text>

				<Alert status={listening ? "success" : "info"}>
					<AlertIcon />
					Status: {listening ? "🎤 Listening..." : "⏹ Stopped"}
				</Alert>

				<Text>Transcript: {transcript}</Text>

				<Button
					colorScheme={listening ? "red" : "green"}
					onClick={testDirectSpeechRecognition}
					disabled={listening}
				>
					{listening ? "Testing..." : "Test Speech Recognition (5 sec)"}
				</Button>

				<Button
					onClick={resetTranscript}
					size="sm"
				>
					Clear Transcript
				</Button>

				{testResult && (
					<Text
						fontSize="sm"
						p={2}
						bg="gray.100"
						borderRadius="md"
					>
						{testResult}
					</Text>
				)}
			</VStack>
		</Box>
	);
}

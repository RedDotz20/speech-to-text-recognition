import { useContext, useState } from "react";
import { Box, Button, Text, VStack, Alert, AlertIcon } from "@chakra-ui/react";
import { SpeechRecognitionContext } from "../context/SpeechRecognitionContext";

type SpeechRecognitionContextType = {
	listening: boolean;
	transcript: string;
};

type DebugInfo = {
	browserSupport?: boolean;
	mediaDevices?: boolean;
	https?: boolean;
	userAgent?: string;
	timestamp?: string;
};

export default function DebugPanel() {
	const { listening, transcript } = useContext<SpeechRecognitionContextType>(
		SpeechRecognitionContext
	);

	const [debugInfo, setDebugInfo] = useState<DebugInfo>({});

	const checkBrowserSupport = () => {
		const info = {
			browserSupport:
				"webkitSpeechRecognition" in window || "SpeechRecognition" in window,
			mediaDevices: !!(
				navigator.mediaDevices && navigator.mediaDevices.getUserMedia
			),
			https:
				window.location.protocol === "https:" ||
				window.location.hostname === "localhost",
			userAgent: navigator.userAgent,
			timestamp: new Date().toLocaleTimeString(),
		};
		setDebugInfo(info);
		console.log("Debug Info:", info);
	};

	return (
		<Box
			p={4}
			bg="gray.100"
			borderRadius="md"
			m={4}
			maxWidth="400px"
		>
			<VStack
				spacing={3}
				align="stretch"
			>
				<Text
					fontSize="lg"
					fontWeight="bold"
				>
					Debug Panel
				</Text>

				<Alert status={listening ? "success" : "info"}>
					<AlertIcon />
					<Text>Status: {listening ? "Listening" : "Stopped"}</Text>
				</Alert>

				<Box
					bg="white"
					p={2}
					borderRadius="md"
				>
					<Text fontWeight="bold">Transcript:</Text>
					<Text fontSize="sm">{transcript || "No transcript yet..."}</Text>
				</Box>

				<Button
					onClick={checkBrowserSupport}
					colorScheme="blue"
					size="sm"
				>
					Check Browser Support
				</Button>

				{debugInfo.browserSupport !== undefined && (
					<Box
						bg="white"
						p={2}
						borderRadius="md"
					>
						<Text fontWeight="bold">Debug Info:</Text>
						<Text fontSize="xs">
							✅ Browser Support: {debugInfo.browserSupport ? "Yes" : "No"}
							<br />✅ Media Devices: {debugInfo.mediaDevices ? "Yes" : "No"}
							<br />✅ HTTPS/Localhost: {debugInfo.https ? "Yes" : "No"}
							<br />
							🕐 Checked: {debugInfo.timestamp}
						</Text>
					</Box>
				)}
			</VStack>
		</Box>
	);
}

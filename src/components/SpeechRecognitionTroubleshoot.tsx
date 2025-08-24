import { useEffect, useState } from "react";
import { Box, Text, Alert, AlertIcon, VStack } from "@chakra-ui/react";

export default function SpeechRecognitionTroubleshoot() {
	const [troubleshootInfo, setTroubleshootInfo] = useState<{
		isHttps: boolean;
		hasWebkitSpeechRecognition: boolean;
		hasGetUserMedia: boolean;
		userAgent: string;
	}>({
		isHttps: false,
		hasWebkitSpeechRecognition: false,
		hasGetUserMedia: false,
		userAgent: "",
	});

	useEffect(() => {
		setTroubleshootInfo({
			isHttps:
				window.location.protocol === "https:" ||
				window.location.hostname === "localhost",
			hasWebkitSpeechRecognition:
				"webkitSpeechRecognition" in window || "SpeechRecognition" in window,
			hasGetUserMedia: !!(
				navigator.mediaDevices && navigator.mediaDevices.getUserMedia
			),
			userAgent: navigator.userAgent,
		});
	}, []);

	const isChrome = troubleshootInfo.userAgent.includes("Chrome");
	const isEdge = troubleshootInfo.userAgent.includes("Edg");
	const isSafari =
		troubleshootInfo.userAgent.includes("Safari") &&
		!troubleshootInfo.userAgent.includes("Chrome");
	const isFirefox = troubleshootInfo.userAgent.includes("Firefox");

	return (
		<Box
			p={4}
			maxWidth="600px"
			margin="0 auto"
		>
			<Text
				fontSize="lg"
				fontWeight="bold"
				mb={4}
				color="white"
			>
				Speech Recognition Troubleshooting
			</Text>

			<VStack
				spacing={3}
				align="stretch"
			>
				{/* HTTPS Check */}
				<Alert status={troubleshootInfo.isHttps ? "success" : "warning"}>
					<AlertIcon />
					<Text fontSize="sm">
						{troubleshootInfo.isHttps
							? "✓ Running on HTTPS or localhost (Required for speech recognition)"
							: "⚠ Speech recognition requires HTTPS in production"}
					</Text>
				</Alert>

				{/* Browser Support */}
				<Alert
					status={
						troubleshootInfo.hasWebkitSpeechRecognition ? "success" : "error"
					}
				>
					<AlertIcon />
					<Text fontSize="sm">
						{troubleshootInfo.hasWebkitSpeechRecognition
							? "✓ Browser supports speech recognition"
							: "✗ Browser does not support speech recognition"}
					</Text>
				</Alert>

				{/* Microphone Access */}
				<Alert status={troubleshootInfo.hasGetUserMedia ? "success" : "error"}>
					<AlertIcon />
					<Text fontSize="sm">
						{troubleshootInfo.hasGetUserMedia
							? "✓ Browser supports microphone access"
							: "✗ Browser does not support microphone access"}
					</Text>
				</Alert>

				{/* Browser-specific guidance */}
				{isChrome && (
					<Alert status="info">
						<AlertIcon />
						<Text fontSize="sm">
							Chrome detected - Should work well with speech recognition
						</Text>
					</Alert>
				)}

				{isEdge && (
					<Alert status="info">
						<AlertIcon />
						<Text fontSize="sm">
							Edge detected - Should work well with speech recognition
						</Text>
					</Alert>
				)}

				{isSafari && (
					<Alert status="warning">
						<AlertIcon />
						<Text fontSize="sm">
							Safari detected - Speech recognition support may be limited
						</Text>
					</Alert>
				)}

				{isFirefox && (
					<Alert status="error">
						<AlertIcon />
						<Text fontSize="sm">
							Firefox detected - Speech recognition is not supported
						</Text>
					</Alert>
				)}
			</VStack>
		</Box>
	);
}

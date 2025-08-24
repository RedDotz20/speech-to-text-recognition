import { useState, useEffect } from "react";
import SpeechRecognition from "react-speech-recognition";
import {
	HStack,
	VStack,
	Text,
	StackDivider,
	IconButton,
	Stack,
	Icon,
	useToast,
} from "@chakra-ui/react";

import { RxReset } from "react-icons/rx";
import { AiFillControl } from "react-icons/ai";
import { IoPlay, IoStop } from "react-icons/io5";

import { useLanguageContext } from "../../hooks/useLanguageContext";
import { useSpeechRecognitionContext } from "../../hooks/useSpeechRecognitionContext";

export default function SpeechControls() {
	const { currentLanguage } = useLanguageContext();
	const { listening, resetTranscript, resetClipboard } =
		useSpeechRecognitionContext();
	const [hasPermission, setHasPermission] = useState<boolean | null>(null);
	const toast = useToast();

	useEffect(() => {
		checkMicrophonePermission();
	}, []);

	const checkMicrophonePermission = async () => {
		try {
			if (navigator.permissions) {
				const result = await navigator.permissions.query({
					name: "microphone" as PermissionName,
				});
				setHasPermission(result.state === "granted");

				result.onchange = () => {
					setHasPermission(result.state === "granted");
				};
			}
		} catch (error) {
			console.warn("Permission API not supported, will request on first use");
			setHasPermission(null);
		}
	};

	const requestMicrophonePermission = async () => {
		console.log("🎤 Requesting microphone permission...");
		try {
			const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
			stream.getTracks().forEach((track) => track.stop());
			console.log("✅ Microphone permission granted");
			setHasPermission(true);
			return true;
		} catch (error) {
			console.error("❌ Microphone permission denied:", error);
			setHasPermission(false);
			toast({
				title: "Microphone Permission Required",
				description:
					"Please allow microphone access to use speech recognition.",
				status: "error",
				duration: 5000,
				isClosable: true,
			});
			return false;
		}
	};

	const triggerActions = async () => {
		console.log("🎤 START button clicked!");
		console.log("Current listening state:", listening);
		console.log("Has permission:", hasPermission);

		if (!listening) {
			console.log("🔄 Starting speech recognition process...");

			// Check and request permission if needed
			if (
				hasPermission === false ||
				(hasPermission === null && !(await requestMicrophonePermission()))
			) {
				console.log("❌ Permission check failed, aborting");
				return;
			}

			console.log("✅ Permission check passed");
			resetClipboard();

			try {
				console.log(
					"🎯 Attempting to start listening with language:",
					currentLanguage.value
				);
				await SpeechRecognition.startListening({
					continuous: true,
					language: currentLanguage.value,
				});
				console.log("🎤 Speech recognition started successfully");
			} catch (error) {
				console.error("❌ Failed to start speech recognition:", error);
				toast({
					title: "Speech Recognition Error",
					description: "Failed to start speech recognition. Please try again.",
					status: "error",
					duration: 3000,
					isClosable: true,
				});
			}
		} else {
			console.log("🛑 Stopping speech recognition...");
			SpeechRecognition.stopListening();
		}
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
						{!listening ? "START" : "STOP"}
					</Text>
					<IconButton
						variant={!listening ? "solid" : "outline"}
						aria-label="Start/Stop"
						size="lg"
						borderRadius={100}
						onClick={triggerActions}
						colorScheme={!listening ? "green" : "red"}
						icon={!listening ? <IoPlay size={24} /> : <IoStop size={24} />}
						disabled={hasPermission === false}
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

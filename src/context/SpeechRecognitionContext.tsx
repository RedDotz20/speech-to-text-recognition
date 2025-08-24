import React, { createContext, useState, useMemo } from "react";
import { useSpeechRecognition } from "react-speech-recognition";
import copy from "clipboard-copy";
import { SpeechRecognitionContextType } from "../types/speechRecognitionContextType";

type ProviderProps = { children: React.ReactNode };

export const SpeechRecognitionContext = createContext<
	SpeechRecognitionContextType | undefined
>(undefined);

export default function SpeechRecognitionProvider({ children }: ProviderProps) {
	const { listening, transcript, resetTranscript } = useSpeechRecognition();
	const [isCopiedToClipboard, setIsCopiedToClipboard] = useState(false);

	// Debug logging
	console.log("📝 SpeechRecognition Context Values:");
	console.log("  - listening:", listening);
	console.log("  - transcript length:", transcript.length);
	console.log("  - transcript:", transcript.substring(0, 50) + "...");

	const handleCopyToClipboard = React.useCallback(
		async (textToCopy: string) => {
			try {
				await copy(textToCopy);
				setIsCopiedToClipboard(true);
			} catch (error) {
				console.error("Copy to clipboard failed:", error);
			}
		},
		[]
	);

	const resetClipboard = React.useCallback(
		() => setIsCopiedToClipboard(false),
		[]
	);

	const speechRecogContextValue = useMemo(
		() => ({
			listening,
			transcript,
			resetTranscript,
			isCopiedToClipboard,
			handleCopyToClipboard,
			resetClipboard,
		}),
		[
			listening,
			transcript,
			resetTranscript,
			isCopiedToClipboard,
			handleCopyToClipboard,
			resetClipboard,
		]
	);

	return (
		<SpeechRecognitionContext.Provider value={speechRecogContextValue}>
			{children}
		</SpeechRecognitionContext.Provider>
	);
}

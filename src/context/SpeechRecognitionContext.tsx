import React, { createContext, useState, useMemo } from 'react';
import { useSpeechRecognition } from 'react-speech-recognition';
import copy from 'clipboard-copy';

type ProviderProps = { children: React.ReactNode };

export const SpeechRecognitionContext = createContext<any>(undefined);

export default function SpeechRecognitionProvider({ children }: ProviderProps) {
	const { listening, transcript, resetTranscript } = useSpeechRecognition();
	const [isCopiedToClipboard, setIsCopiedToClipboard] = useState(false);

	const handleCopyToClipboard = async (textToCopy: string) => {
		try {
			await copy(textToCopy);
			setIsCopiedToClipboard(true);
		} catch (error) {
			console.error('Copy to clipboard failed:', error);
		}
	};

	const resetClipboard = () => setIsCopiedToClipboard(false);

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

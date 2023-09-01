import React, { createContext } from 'react';
import { useSpeechRecognition } from 'react-speech-recognition';

type ProviderProps = { children: React.ReactNode };

export const SpeechRecognitionContext = createContext<any>(undefined);

export default function SpeechRecognitionProvider({ children }: ProviderProps) {
	const { listening, transcript, resetTranscript } = useSpeechRecognition();

	return (
		<SpeechRecognitionContext.Provider
			value={{ listening, transcript, resetTranscript }}
		>
			{children}
		</SpeechRecognitionContext.Provider>
	);
}

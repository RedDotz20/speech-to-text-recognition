import { useContext } from "react";
import { SpeechRecognitionContext } from "../context/SpeechRecognitionContext";

export const useSpeechRecognitionContext = () => {
	const context = useContext(SpeechRecognitionContext);

	if (context === undefined) {
		throw new Error(
			"useSpeechRecognitionContext must be used within a SpeechRecognitionProvider"
		);
	}

	return context;
};

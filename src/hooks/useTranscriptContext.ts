import { useContext } from "react";
import { TranscriptContext } from "../context/TranscriptContext";

export const useTranscriptContext = () => {
	const context = useContext(TranscriptContext);

	if (context === undefined) {
		throw new Error(
			"useTranscriptContext must be used within a TranscriptContextProvider"
		);
	}

	return context;
};

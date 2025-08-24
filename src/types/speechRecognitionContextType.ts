export interface SpeechRecognitionContextType {
	listening: boolean;
	transcript: string;
	resetTranscript: () => void;
	isCopiedToClipboard: boolean;
	handleCopyToClipboard: (textToCopy: string) => Promise<void>;
	resetClipboard: () => void;
}

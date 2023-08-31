import { useState, useContext } from 'react';
import copy from 'clipboard-copy';
import SpeechRecognition, {
	useSpeechRecognition,
} from 'react-speech-recognition';
import { BiMicrophone, BiMicrophoneOff } from 'react-icons/BI';
import { LanguageContext } from '../context/LanguageContext';

function SpeechRecognitionApp() {
	const { listening, transcript, resetTranscript } = useSpeechRecognition();
	const { currentLanguage } = useContext<any>(LanguageContext);

	const [copied, setCopied] = useState(false);

	const triggerActions = () => {
		if (!listening) {
			setCopied(false);
			return SpeechRecognition.startListening({
				continuous: true,
				language: currentLanguage.value,
			});
		}
		return SpeechRecognition.stopListening();
	};

	const resetTranscriptText = () => {
		setCopied(false);
		resetTranscript();
	};

	const handleCopy = async (textToCopy: string) => {
		try {
			await copy(textToCopy);
			setCopied(true);
		} catch (error) {
			console.error('Copy to clipboard failed:', error);
		}
	};

	return (
		<>
			<div
				className={`flex gap-2 items-center text-white p-4 rounded-full transition-all duration-300 delay-100 min-w-min ${
					listening ? 'bg-green-700' : 'bg-red-700'
				}`}
			>
				{listening ? <BiMicrophone size={40} /> : <BiMicrophoneOff size={40} />}
				<span className="pr-2 text-xl">
					{!listening ? 'MICROPHONE' : 'LISTENING ...'}
				</span>
			</div>

			<div className="action-buttons">
				<button
					onClick={() => triggerActions()}
					className="flex items-center gap-2 p-2 px-4 text-white bg-red-700 rounded-full"
				>
					<span className="text-lg">{!listening ? 'START' : 'STOP'}</span>
				</button>
				<button onClick={() => resetTranscriptText()}>Reset</button>
			</div>

			<div>
				<button
					disabled={listening || transcript === ''}
					onClick={() => handleCopy(transcript)}
				>
					{copied ? 'Copied!' : 'Copy to Clipboard'}
				</button>
				<p>{transcript}</p>
			</div>
		</>
	);
}

export default SpeechRecognitionApp;

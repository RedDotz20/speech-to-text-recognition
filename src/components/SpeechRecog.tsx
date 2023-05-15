import React from 'react';
import { BiMicrophone, BiMicrophoneOff } from 'react-icons/BI';
import SpeechRecognition, {
	useSpeechRecognition,
} from 'react-speech-recognition';

const SpeechRecognitionApp: React.FC = () => {
	const {
		transcript,
		listening,
		resetTranscript,
		browserSupportsSpeechRecognition,
	} = useSpeechRecognition();

	if (!browserSupportsSpeechRecognition) {
		return <h2>This Browser doesn't support Speech Recognition.</h2>;
	}

	const triggerActions = () => {
		if (!listening) {
			return SpeechRecognition.startListening({
				continuous: true,
				language: 'en-US',
			});
		}
		return SpeechRecognition.stopListening();
	};

	console.log(listening);

	return (
		<>
			<div>
				Microphone: {listening ? <BiMicrophone /> : <BiMicrophoneOff />}
			</div>
			<div className="action-buttons">
				<button onClick={() => triggerActions()}>
					{!listening ? 'Start' : 'Stop'}
				</button>
				<button onClick={() => resetTranscript()}>Reset</button>
			</div>
			<p>{transcript}</p>
		</>
	);
};

export default SpeechRecognitionApp;

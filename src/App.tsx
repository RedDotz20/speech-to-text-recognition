import { useSpeechRecognition } from 'react-speech-recognition';
import MainControls from './components/MainControls';
import SpeechRecognitionApp from './components/SpeechRecognition';
import LanguageContextProvider from './context/LanguageContext';

export default function App() {
	// const { browserSupportsSpeechRecognition } = useSpeechRecognition();

	// if (!browserSupportsSpeechRecognition) {
	// 	return (
	// 		<h1 className="grid items-center h-screen text-4xl font-bold">
	// 			This Browser doesn't support Speech Recognition.
	// 		</h1>
	// 	);
	// }

	return (
		<main className="flex flex-col items-center justify-center min-h-screen">
			<h1 className="mb-6 text-4xl font-semibold">
				Speech To Text Recognition
			</h1>
			<LanguageContextProvider>
				<SpeechRecognitionApp />
				<MainControls />
			</LanguageContextProvider>
		</main>
	);
}

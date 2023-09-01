import { useContext } from 'react';
// import { useSpeechRecognition } from 'react-speech-recognition';
import { Button, Box, Text, Icon } from '@chakra-ui/react';
import { SpeechRecognitionContext } from '../context/SpeechRecognitionContext';
import { BsFillClipboardFill, BsPenFill } from 'react-icons/Bs';

interface TranscriptionProps {
	isCopiedToClipboard: boolean;
	handleCopyToClipboard: (textToCopy: string) => void;
}

export default function Transcription({
	isCopiedToClipboard,
	handleCopyToClipboard,
}: TranscriptionProps) {
	const { listening, transcript } = useContext<any>(SpeechRecognitionContext);
	return (
		<Box className="relative flex flex-col p-2 border-2 rounded-lg min-w-[500px] max-w-[500px]">
			<Box className="absolute flex items-center gap-2 top-2 left-6">
				<Icon
					as={BsPenFill}
					boxSize={3}
				/>
				<Text fontWeight={700}>Transcript</Text>
			</Box>
			<Button
				colorScheme={isCopiedToClipboard ? 'green' : 'gray'}
				variant={isCopiedToClipboard ? 'solid' : 'outline'}
				position="absolute"
				top={2}
				right={2}
				px="2"
				py="1"
				fontSize="0.75rem"
				size="xs"
				leftIcon={<BsFillClipboardFill />}
				isDisabled={listening || transcript === ''}
				onClick={() => handleCopyToClipboard(transcript)}
			>
				{isCopiedToClipboard ? 'Copied!' : 'Copy to Clipboard'}
			</Button>
			<Text className="mx-4 mt-8 text-left transition-all duration-75 ease-in-out">
				{transcript}
			</Text>
		</Box>
	);
}

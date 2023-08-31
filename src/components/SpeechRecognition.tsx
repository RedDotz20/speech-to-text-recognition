import { useState } from 'react';
import { useSpeechRecognition } from 'react-speech-recognition';
import { Button, Box, Text, Icon } from '@chakra-ui/react';
import { BsFillClipboardFill, BsPenFill } from 'react-icons/Bs';
import copy from 'clipboard-copy';

function SpeechRecognitionApp() {
	const { listening, transcript } = useSpeechRecognition();
	const [copied, setCopied] = useState(false);

	const handleCopy = async (textToCopy: string) => {
		try {
			await copy(textToCopy);
			setCopied(true);
		} catch (error) {
			console.error('Copy to clipboard failed:', error);
		}
	};

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
				colorScheme={copied ? 'green' : 'gray'}
				variant={copied ? 'solid' : 'outline'}
				position="absolute"
				top={2}
				right={2}
				px="2"
				py="1"
				fontSize="0.75rem"
				size="xs"
				leftIcon={<BsFillClipboardFill />}
				disabled={listening || transcript === ''}
				onClick={() => handleCopy(transcript)}
			>
				{copied ? 'Copied!' : 'Copy to Clipboard'}
			</Button>
			<p className="mx-4 mt-8 text-left">{transcript}</p>
		</Box>
	);
}

export default SpeechRecognitionApp;

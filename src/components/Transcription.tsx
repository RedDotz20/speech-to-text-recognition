import { useContext } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Button, Box, Text, Icon } from '@chakra-ui/react';
import { BsFillClipboardFill, BsPenFill } from 'react-icons/Bs';
import { HiOutlineMicrophone } from 'react-icons/Hi';

import { SpeechRecognitionContext } from '../context/SpeechRecognitionContext';

export default function Transcription() {
	const { listening, transcript, isCopiedToClipboard, handleCopyToClipboard } =
		useContext<any>(SpeechRecognitionContext);

	return (
		<Box className="relative flex flex-col p-2 border-2 rounded-l-lg min-w-[500px] max-w-[500px] bg-[#fff]">
			<Box className="absolute flex items-center gap-2 top-2 left-6">
				<Icon
					as={BsPenFill}
					boxSize={3}
				/>
				<Text
					fontWeight={700}
					mr={2}
				>
					Transcript
				</Text>
				<AnimatePresence mode="wait">
					{listening && (
						<motion.div
							className="bg-[green] rounded-md"
							initial="hidden"
							animate="visible"
							exit="hidden"
							transition={{ duration: 0.5 }}
							variants={{
								hidden: { opacity: 0, x: 20 },
								visible: { opacity: 1, x: 0 },
							}}
						>
							<Text
								pl={2}
								pr={3}
								py={0.5}
								fontWeight={600}
								fontSize={14}
								className="animate-pulse flex gap-1 select-none items-center text-[#fff]"
							>
								<HiOutlineMicrophone />
								Listening ...
							</Text>
						</motion.div>
					)}
				</AnimatePresence>
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

import { useContext } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Button, Box, Text, Icon, Stack } from '@chakra-ui/react';
import { BsFillClipboardFill, BsPenFill } from 'react-icons/Bs';
import { HiOutlineMicrophone } from 'react-icons/Hi';

import { SpeechRecognitionContext } from '../context/SpeechRecognitionContext';

export default function Transcription() {
	const { listening, transcript, isCopiedToClipboard, handleCopyToClipboard } =
		useContext<any>(SpeechRecognitionContext);

	return (
		<Box className="flex flex-col p-2 gap-[6px] border-2 rounded-l-lg min-w-[500px] max-w-[500px] bg-[#fff]">
			<Stack direction="row">
				<Box className="flex items-center gap-2 mx-2">
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
								<Text className="animate-pulse flex gap-1 pl-2 pr-3 py-[0.4] font-semibold text-sm select-none items-center text-[#fff]">
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
					className="ml-auto px-2 py-1 text-[0.75rem]"
					leftIcon={<BsFillClipboardFill />}
					isDisabled={listening || transcript === ''}
					onClick={() => handleCopyToClipboard(transcript)}
					size="xs"
				>
					{isCopiedToClipboard ? 'Copied!' : 'Copy to Clipboard'}
				</Button>
			</Stack>

			<Text className="ml-2 mr-4 text-left transition-all duration-75 ease-in-out">
				{transcript}
			</Text>
		</Box>
	);
}

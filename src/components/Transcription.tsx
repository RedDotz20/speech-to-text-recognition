import { useContext } from 'react';
import { AnimatePresence, motion, isValidMotionProp } from 'framer-motion';
import {
	Button,
	Box,
	Text,
	Icon,
	Stack,
	Flex,
	chakra,
	shouldForwardProp,
} from '@chakra-ui/react';
import { BsFillClipboardFill, BsPenFill } from 'react-icons/Bs';
import { HiOutlineMicrophone } from 'react-icons/Hi';

import { SpeechRecognitionContext } from '../context/SpeechRecognitionContext';
import { TranscriptContext } from '../context/TranscriptContext';

export default function Transcription() {
	const { listening, transcript, isCopiedToClipboard, handleCopyToClipboard } =
		useContext<any>(SpeechRecognitionContext);
	const { selectedFontWeight, selectedFontSize } =
		useContext<any>(TranscriptContext);

	const ChakraBox = chakra(motion.div, {
		shouldForwardProp: (prop) =>
			isValidMotionProp(prop) || shouldForwardProp(prop),
	});

	return (
		<Box
			display="flex"
			flexDir="column"
			gap="6px"
			p={2}
			borderWidth={2}
			roundedLeft="lg"
			minW="500px"
			maxW="500px"
			bg="#fff"
		>
			<Stack
				direction="row"
				alignItems="center"
				justifyContent="center"
			>
				<Flex
					alignItems="center"
					gap={2}
					mx={2}
				>
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
							<ChakraBox
								bg="green"
								rounded="md"
								initial="hidden"
								animate="visible"
								exit="hidden"
								transition={{ duration: '0.5' }}
								variants={{
									hidden: { opacity: 0, x: 20 },
									visible: { opacity: 1, x: 0 },
								}}
							>
								<Flex
									className="animate-pulse"
									gap={1}
									pl={2}
									pr={3}
									py={0.4}
									fontWeight="semibold"
									fontSize="sm"
									userSelect="none"
									alignItems="center"
									color="#fff"
								>
									<HiOutlineMicrophone />
									<Text>Listening ...</Text>
								</Flex>
							</ChakraBox>
						)}
					</AnimatePresence>
				</Flex>

				<Button
					colorScheme={isCopiedToClipboard ? 'green' : 'gray'}
					variant={isCopiedToClipboard ? 'solid' : 'outline'}
					ml="auto"
					px={2}
					py={1}
					fontSize={12}
					leftIcon={<BsFillClipboardFill />}
					isDisabled={listening || transcript === ''}
					onClick={() => handleCopyToClipboard(transcript)}
					size="xs"
				>
					{isCopiedToClipboard ? 'Copied!' : 'Copy to Clipboard'}
				</Button>
			</Stack>

			<Text
				fontWeight={selectedFontWeight}
				fontSize={selectedFontSize}
				pr={2}
				mx={2}
				textAlign="left"
				overflowY="auto"
			>
				{transcript}
			</Text>
		</Box>
	);
}

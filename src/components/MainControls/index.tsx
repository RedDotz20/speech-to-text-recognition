import { Box } from '@chakra-ui/react';

import LanguageSelector from './LanguageSelector';
import TranscriptStyles from './TranscriptStyles';
import SpeechControls from './SpeechControls';

export default function MainControls() {
	return (
		<Box
			py={3}
			px={4}
			bg="#ffffff"
			borderTopRightRadius="lg"
			borderBottomRightRadius="lg"
			minW="210px"
		>
			<LanguageSelector />
			<TranscriptStyles />
			<SpeechControls />
		</Box>
	);
}

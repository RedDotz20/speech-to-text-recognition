import { Stack, StackDivider } from '@chakra-ui/react';

import LanguageSelector from './LanguageSelector';
import TranscriptStyles from './TranscriptStyles';
import SpeechControls from './SpeechControls';

export default function MainControls() {
	return (
		<Stack
			divider={<StackDivider borderColor="gray.600" />}
			direction="column"
			justifyContent="space-between"
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
		</Stack>
	);
}

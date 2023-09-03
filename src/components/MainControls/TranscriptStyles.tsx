import { useContext } from 'react';
import { HStack, Icon, Select, Stack, Text, VStack } from '@chakra-ui/react';
import { AiOutlineFontSize } from 'react-icons/Ai';

import { TranscriptContext } from '../../context/TranscriptContext';
import { SpeechRecognitionContext } from '../../context/SpeechRecognitionContext';

export default function TranscriptStyles() {
	const { listening } = useContext<any>(SpeechRecognitionContext);
	const {
		selectedFontWeight,
		selectedFontSize,
		handleFontSizeChange,
		handleFontWeightChange,
	} = useContext(TranscriptContext);

	const customStyles = {
		fontWeight: [
			{ intensity: 'Thin', value: 300 },
			{ intensity: 'Normal', value: 400 },
			{ intensity: 'Medium', value: 500 },
			{ intensity: 'Bold', value: 600 },
		],
		fontSize: [
			{ size: 'Small', value: 'sm' },
			{ size: 'Medium', value: 'md' },
			{ size: 'Large', value: 'lg' },
			{ size: 'Huge', value: 'xl' },
		],
	};

	return (
		<Stack direction="column">
			<HStack alignItems="center">
				<Icon as={AiOutlineFontSize} />
				<Text
					fontSize="md"
					textAlign="left"
					fontWeight={500}
				>
					Transcript Styles
				</Text>
			</HStack>

			<HStack spacing={2}>
				<VStack spacing={0.25}>
					<Text
						alignSelf="flex-start"
						fontSize="xs"
						fontWeight={400}
					>
						Font Weight
					</Text>
					<Select
						width={100}
						id="font-weight"
						name="font-weight"
						variant="outline"
						size="sm"
						value={selectedFontWeight}
						onChange={handleFontWeightChange}
						isDisabled={listening}
					>
						{customStyles.fontWeight.map((weight) => {
							return (
								<option
									key={weight.value}
									value={weight.value}
								>
									{weight.intensity}
								</option>
							);
						})}
					</Select>
				</VStack>

				<VStack spacing={0.25}>
					<Text
						alignSelf="flex-start"
						fontSize="xs"
						fontWeight={400}
					>
						Font Size
					</Text>
					<Select
						width={100}
						variant="outline"
						id="font-size"
						name="font-size"
						size="sm"
						value={selectedFontSize}
						onChange={handleFontSizeChange}
						isDisabled={listening}
					>
						{customStyles.fontSize.map((font) => {
							return (
								<option
									key={font.value}
									value={font.value}
								>
									{font.size}
								</option>
							);
						})}
					</Select>
				</VStack>
			</HStack>
		</Stack>
	);
}

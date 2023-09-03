import { useState } from 'react';
import { HStack, Icon, Select, Stack, Text, VStack } from '@chakra-ui/react';
import { AiOutlineFontSize } from 'react-icons/Ai';

export default function TranscriptStyles() {
	const [selectedFontWeight, setSelectedFontWeight] = useState(400);
	const [selectedFontSize, setSelectedFontSize] = useState(12);

	const handleFontWeightChange = (event: any) => {
		setSelectedFontWeight(event.target.value);
	};

	const handleFontSizeChange = (event: any) => {
		setSelectedFontSize(event.target.value);
	};

	const customStyles = {
		fontWeight: [
			{ intensity: 'Normal', value: 400 },
			{ intensity: 'Medium', value: 500 },
			{ intensity: 'Semibold', value: 600 },
			{ intensity: 'Bold', value: 700 },
		],
		fontSize: [
			{ size: 'Small', value: 12 },
			{ size: 'Medium', value: 14 },
			{ size: 'Large', value: 16 },
			{ size: 'Huge', value: 18 },
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

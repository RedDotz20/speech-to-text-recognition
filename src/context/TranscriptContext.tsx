import { createContext, useState, useMemo } from 'react';

type ProviderProps = { children: React.ReactNode };

export const TranscriptContext = createContext<any>(undefined);

export default function TranscriptContextProvider({ children }: ProviderProps) {
	const [selectedFontWeight, setSelectedFontWeight] = useState(400);
	const [selectedFontSize, setSelectedFontSize] = useState('sm');

	const handleFontWeightChange = (event: any) => {
		setSelectedFontWeight(event.target.value);
	};

	const handleFontSizeChange = (event: any) => {
		setSelectedFontSize(event.target.value);
	};

	const transcriptContextValue = useMemo(
		() => ({
			selectedFontWeight,
			selectedFontSize,
			handleFontWeightChange,
			handleFontSizeChange,
		}),
		[
			selectedFontWeight,
			selectedFontSize,
			handleFontWeightChange,
			handleFontSizeChange,
		]
	);

	return (
		<TranscriptContext.Provider value={transcriptContextValue}>
			{children}
		</TranscriptContext.Provider>
	);
}

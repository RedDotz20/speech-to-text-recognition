import { createContext, useState, useMemo, useCallback } from "react";

type ProviderProps = { children: React.ReactNode };

export const TranscriptContext = createContext<any>(undefined);

export default function TranscriptContextProvider({ children }: ProviderProps) {
	const [selectedFontWeight, setSelectedFontWeight] = useState(400);
	const [selectedFontSize, setSelectedFontSize] = useState("sm");

	const handleFontWeightChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			setSelectedFontWeight(Number(event.target.value));
		},
		[]
	);

	const handleFontSizeChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			setSelectedFontSize(event.target.value);
		},
		[]
	);

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

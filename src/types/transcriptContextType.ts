export interface TranscriptContextType {
	selectedFontWeight: number;
	selectedFontSize: string;
	handleFontWeightChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
	handleFontSizeChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

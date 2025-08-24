import EnglishFlag from "../assets/gb.svg";
import FrenchFlag from "../assets/fr.svg";
import ItalianFlag from "../assets/it.svg";
import JapaneseFlag from "../assets/jp.svg";
import KoreanFlag from "../assets/kr.svg";
import LatinFlag from "../assets/ro.svg";
import MandarinChineseFlag from "../assets/cn.svg";
import MalaysianFlag from "../assets/my.svg";
import PortugueseFlag from "../assets/pt.svg";
import SpanishFlag from "../assets/es.svg";
import { languageTypes } from "../types/languageTypes";

export const languageSupported: (languageTypes & { flag: string })[] = [
	{ value: "en-US", name: "English", flag: EnglishFlag },
	{ value: "fr-FR", name: "French", flag: FrenchFlag },
	{ value: "it-IT", name: "Italian", flag: ItalianFlag },
	{ value: "ja", name: "Japanese", flag: JapaneseFlag },
	{ value: "ko", name: "Korean", flag: KoreanFlag },
	{ value: "la", name: "Latin", flag: LatinFlag },
	{ value: "zh-CN", name: "Chinese", flag: MandarinChineseFlag },
	{ value: "ms-MY", name: "Malaysian", flag: MalaysianFlag },
	{ value: "pt-PT", name: "Portuguese", flag: PortugueseFlag },
	{ value: "es-US", name: "Spanish", flag: SpanishFlag },
];

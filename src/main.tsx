import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
	fonts: {
		body: 'Roboto, sans-serif',
		heading: 'Roboto, sans-serif',
	},
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ChakraProvider theme={customTheme}>
			<App />
		</ChakraProvider>
	</React.StrictMode>
);

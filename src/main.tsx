import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import { ChakraProvider, Heading, extendTheme } from '@chakra-ui/react';
import ErrorBoundery from './ErrorBoundery.tsx';

const customTheme = extendTheme({
	fonts: {
		body: 'Roboto, sans-serif',
		heading: 'Roboto, sans-serif',
	},
	styles: {
		global: {
			'::-webkit-scrollbar': {
				width: '6px',
				height: '6px',
			},
			'::-webkit-scrollbar-thumb': {
				background: 'gray',
			},
		},
	},
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ErrorBoundery fallback={<Heading>An Error Has Occured</Heading>}>
			<ChakraProvider theme={customTheme}>
				<App />
			</ChakraProvider>
		</ErrorBoundery>
	</React.StrictMode>
);

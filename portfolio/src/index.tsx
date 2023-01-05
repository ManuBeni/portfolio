import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import theme from "./components/theme"
import { ChakraProvider,ColorModeScript } from '@chakra-ui/react'
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </React.StrictMode>
  </ChakraProvider>
);


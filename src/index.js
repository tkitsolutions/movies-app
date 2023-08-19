import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient,QueryClientProvider } from 'react-query';

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient=new QueryClient();
root.render(
  <React.StrictMode>
    <ChakraProvider>
    <QueryClientProvider client={queryClient}>
    <App />
    </QueryClientProvider>    
    </ChakraProvider>

  </React.StrictMode>
);



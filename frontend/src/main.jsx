import React, { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './i18n.js';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ContextProvider } from './contextApi/ContextProvider';

const queryClient = new QueryClient();
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense>
        <QueryClientProvider client={queryClient}>
          <ContextProvider>
            <App />
          </ContextProvider>
        </QueryClientProvider>
      </Suspense>
    </BrowserRouter>
  </StrictMode>
);

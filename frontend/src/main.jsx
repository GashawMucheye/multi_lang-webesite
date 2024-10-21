import React, { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './i18n.js';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback="loading">
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </Suspense>
    </BrowserRouter>
  </StrictMode>
);

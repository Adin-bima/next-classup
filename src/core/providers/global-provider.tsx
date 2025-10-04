'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import ThemeProvider from './theme-provider';

const queryClient = new QueryClient();

export default function GlobalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <ThemeProvider>{children}</ThemeProvider>
      </LocalizationProvider>
    </QueryClientProvider>
  );
}

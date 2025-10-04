import { useMemo } from 'react';

import { CssBaseline, GlobalStyles } from '@mui/material';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

import { useUIStore } from '../store/ui-store';
import { createCustomTheme } from '../theme/theme';

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const themeMode = useUIStore((state) => state.mode);

  const theme = useMemo(() => createCustomTheme(themeMode), [themeMode]);

  const globalStyles = useMemo(
    () => ({
      '*': {
        // Webkit scrollbar styles
        '&::-webkit-scrollbar': {
          width: '8px',
          height: '8px',
        },
        '&::-webkit-scrollbar-track': {
          background: theme.palette.background.neutral,
          borderRadius: '4px',
        },
        '&::-webkit-scrollbar-thumb': {
          background:
            theme.palette.mode === 'light'
              ? theme.palette.grey[400]
              : theme.palette.grey[600],
          borderRadius: '4px',
          border: `1px solid ${theme.palette.background.neutral}`,
          '&:hover': {
            background:
              theme.palette.mode === 'light'
                ? theme.palette.grey[500]
                : theme.palette.grey[500],
          },
          '&:active': {
            background:
              theme.palette.mode === 'light'
                ? theme.palette.grey[600]
                : theme.palette.grey[400],
          },
        },
        '&::-webkit-scrollbar-corner': {
          background: theme.palette.background.neutral,
        },
        // Firefox scrollbar styles
        scrollbarWidth: 'thin',
        scrollbarColor: `${
          theme.palette.mode === 'light'
            ? theme.palette.grey[400]
            : theme.palette.grey[600]
        } ${theme.palette.background.neutral}`,
      },
      // Specific scrollbar styles for different elements
      body: {
        scrollbarWidth: 'thin',
        scrollbarColor: `${
          theme.palette.mode === 'light'
            ? theme.palette.grey[400]
            : theme.palette.grey[600]
        } ${theme.palette.background.default}`,
      },
      // Custom scrollbar for code blocks and pre elements
      'pre, code': {
        '&::-webkit-scrollbar': {
          width: '6px',
          height: '6px',
        },
        '&::-webkit-scrollbar-thumb': {
          background:
            theme.palette.mode === 'light'
              ? theme.palette.grey[300]
              : theme.palette.grey[700],
          borderRadius: '3px',
        },
      },
      // Custom scrollbar for modal and dialog content
      '.MuiDialog-paper, .MuiModal-root': {
        '&::-webkit-scrollbar': {
          width: '6px',
        },
        '&::-webkit-scrollbar-thumb': {
          background:
            theme.palette.mode === 'light'
              ? theme.palette.grey[300]
              : theme.palette.grey[700],
          borderRadius: '3px',
        },
      },
    }),
    [theme]
  );

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={globalStyles} />
      {children}
    </MuiThemeProvider>
  );
}

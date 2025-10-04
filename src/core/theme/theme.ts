import { createTheme, PaletteMode } from '@mui/material/styles';

import { pallete } from './pallete';
import { customShadows } from './css/custom-shadows';

export function createCustomTheme(mode: PaletteMode) {
  const palette = pallete(mode);
  const shadows = customShadows(mode);

  return createTheme({
    palette: {
      mode,
      ...palette,
    },
    customShadows: shadows,
    components: {
      // Override Material-UI component defaults to use custom shadows
      MuiPaper: {
        styleOverrides: {
          root: {
            boxShadow: shadows.card,
          },
          elevation1: {
            boxShadow: shadows.l1,
          },
          elevation2: {
            boxShadow: shadows.l4,
          },
          elevation3: {
            boxShadow: shadows.l8,
          },
          elevation4: {
            boxShadow: shadows.l12,
          },
          elevation5: {
            boxShadow: shadows.l16,
          },
          elevation6: {
            boxShadow: shadows.l20,
          },
          elevation7: {
            boxShadow: shadows.l24,
          },
          elevation8: {
            boxShadow: shadows.l24,
          },
          elevation9: {
            boxShadow: shadows.l24,
          },
          elevation10: {
            boxShadow: shadows.l24,
          },
          elevation11: {
            boxShadow: shadows.l24,
          },
          elevation12: {
            boxShadow: shadows.l24,
          },
          elevation13: {
            boxShadow: shadows.l24,
          },
          elevation14: {
            boxShadow: shadows.l24,
          },
          elevation15: {
            boxShadow: shadows.l24,
          },
          elevation16: {
            boxShadow: shadows.l24,
          },
          elevation17: {
            boxShadow: shadows.l24,
          },
          elevation18: {
            boxShadow: shadows.l24,
          },
          elevation19: {
            boxShadow: shadows.l24,
          },
          elevation20: {
            boxShadow: shadows.l24,
          },
          elevation21: {
            boxShadow: shadows.l24,
          },
          elevation22: {
            boxShadow: shadows.l24,
          },
          elevation23: {
            boxShadow: shadows.l24,
          },
          elevation24: {
            boxShadow: shadows.l24,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            boxShadow: shadows.card,
          },
        },
      },
      MuiDialog: {
        styleOverrides: {
          paper: {
            boxShadow: shadows.dialog,
          },
        },
      },
      MuiPopover: {
        styleOverrides: {
          paper: {
            boxShadow: shadows.dropdown,
          },
        },
      },
      MuiMenu: {
        styleOverrides: {
          paper: {
            boxShadow: shadows.dropdown,
          },
        },
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            boxShadow: shadows.l4,
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none', // Disable uppercase transformation
            borderRadius: 4,
          },
          contained: {
            boxShadow: shadows.l1,
            '&:hover': {
              boxShadow: shadows.l4,
            },
            '&:active': {
              boxShadow: shadows.l1,
            },
          },
          outlined: {
            '&:hover': {
              boxShadow: shadows.l1,
            },
          },
        },
      },
      MuiFab: {
        styleOverrides: {
          root: {
            boxShadow: shadows.l4,
            '&:hover': {
              boxShadow: shadows.l8,
            },
            '&:active': {
              boxShadow: shadows.l1,
            },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            boxShadow: shadows.l1,
          },
        },
      },
      MuiAlert: {
        styleOverrides: {
          root: {
            boxShadow: shadows.l1,
          },
          standardSuccess: {
            boxShadow: shadows.success,
          },
          standardInfo: {
            boxShadow: shadows.info,
          },
          standardWarning: {
            boxShadow: shadows.warning,
          },
          standardError: {
            boxShadow: shadows.error,
          },
        },
      },
      MuiSnackbar: {
        styleOverrides: {
          root: {
            '& .MuiSnackbarContent-root': {
              boxShadow: shadows.l8,
            },
          },
        },
      },
    },
    shape: {
      borderRadius: 8, // Consistent border radius
    },
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      h1: {
        fontSize: '2.5rem',
        fontWeight: 600,
        lineHeight: 1.2,
      },
      h2: {
        fontSize: '2rem',
        fontWeight: 600,
        lineHeight: 1.3,
      },
      h3: {
        fontSize: '1.75rem',
        fontWeight: 600,
        lineHeight: 1.3,
      },
      h4: {
        fontSize: '1.5rem',
        fontWeight: 600,
        lineHeight: 1.4,
      },
      h5: {
        fontSize: '1.25rem',
        fontWeight: 600,
        lineHeight: 1.4,
      },
      h6: {
        fontSize: '1rem',
        fontWeight: 600,
        lineHeight: 1.5,
      },
      body1: {
        fontSize: '1rem',
        lineHeight: 1.5,
      },
      body2: {
        fontSize: '0.875rem',
        lineHeight: 1.5,
      },
      button: {
        fontSize: '0.875rem',
        fontWeight: 500,
        lineHeight: 1.5,
      },
    },
  });
}

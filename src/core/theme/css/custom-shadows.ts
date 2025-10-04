import { alpha, PaletteMode } from '@mui/material';

import {
  common,
  customRed,
  customGray,
  customTeal,
  customLime,
  customOrgange,
} from '../pallete';

interface CustomShadows {
  l1: string;
  l4: string;
  l8: string;
  l12: string;
  l16: string;
  l20: string;
  l24: string;
  //
  primary: string;
  secondary: string;
  info: string;
  success: string;
  warning: string;
  error: string;
  destructive: string;
  selected: string;
  //
  card: string;
  dialog: string;
  dropdown: string;
}

declare module '@mui/material/styles' {
  interface Theme {
    customShadows: CustomShadows;
  }
  interface ThemeOptions {
    customShadows?: CustomShadows;
  }
}

export function customShadows(mode: PaletteMode) {
  const isLight = mode === 'light';
  const color = isLight ? customGray[500] : common.black;

  return {
    // Level shadows (l1-l24) - for elevation
    l1: isLight
      ? `0 1px 2px 0 ${alpha(color, 0.12)}`
      : `0 1px 2px 0 ${alpha(color, 0.25)}`,

    l4: isLight
      ? `0 4px 6px -1px ${alpha(color, 0.12)}, 0 2px 4px -1px ${alpha(color, 0.06)}`
      : `0 4px 6px -1px ${alpha(color, 0.25)}, 0 2px 4px -1px ${alpha(color, 0.12)}`,

    l8: isLight
      ? `0 8px 10px -2px ${alpha(color, 0.12)}, 0 4px 6px -2px ${alpha(color, 0.06)}`
      : `0 8px 10px -2px ${alpha(color, 0.25)}, 0 4px 6px -2px ${alpha(color, 0.12)}`,

    l12: isLight
      ? `0 12px 16px -4px ${alpha(color, 0.12)}, 0 4px 6px -2px ${alpha(color, 0.06)}`
      : `0 12px 16px -4px ${alpha(color, 0.25)}, 0 4px 6px -2px ${alpha(color, 0.12)}`,

    l16: isLight
      ? `0 16px 24px -4px ${alpha(color, 0.12)}, 0 4px 6px -2px ${alpha(color, 0.06)}`
      : `0 16px 24px -4px ${alpha(color, 0.25)}, 0 4px 6px -2px ${alpha(color, 0.12)}`,

    l20: isLight
      ? `0 20px 25px -5px ${alpha(color, 0.12)}, 0 10px 10px -5px ${alpha(color, 0.06)}`
      : `0 20px 25px -5px ${alpha(color, 0.25)}, 0 10px 10px -5px ${alpha(color, 0.12)}`,

    l24: isLight
      ? `0 24px 38px 3px ${alpha(color, 0.12)}, 0 9px 46px 8px ${alpha(color, 0.06)}`
      : `0 24px 38px 3px ${alpha(color, 0.25)}, 0 9px 46px 8px ${alpha(color, 0.12)}`,

    // Color-based shadows
    primary: isLight
      ? `0 4px 14px 0 ${alpha(customTeal[500], 0.12)}`
      : `0 4px 14px 0 ${alpha(customTeal[400], 0.25)}`,

    secondary: isLight
      ? `0 4px 14px 0 ${alpha(customOrgange[500], 0.12)}`
      : `0 4px 14px 0 ${alpha(customOrgange[400], 0.25)}`,

    info: isLight
      ? `0 4px 14px 0 ${alpha(customTeal[400], 0.12)}`
      : `0 4px 14px 0 ${alpha(customTeal[300], 0.25)}`,

    success: isLight
      ? `0 4px 14px 0 ${alpha(customLime[500], 0.12)}`
      : `0 4px 14px 0 ${alpha(customLime[400], 0.25)}`,

    warning: isLight
      ? `0 4px 14px 0 ${alpha(customOrgange[500], 0.12)}`
      : `0 4px 14px 0 ${alpha(customOrgange[400], 0.25)}`,

    error: isLight
      ? `0 4px 14px 0 ${alpha(customRed[500], 0.12)}`
      : `0 4px 14px 0 ${alpha(customRed[400], 0.25)}`,

    destructive: isLight
      ? `0 4px 14px 0 ${alpha(customRed[500], 0.12)}`
      : `0 4px 14px 0 ${alpha(customRed[400], 0.25)}`,

    selected: isLight
      ? `0 0 0 2px ${customTeal[200]}, 0 2px 4px 0 ${alpha(customTeal[500], 0.12)}`
      : `0 0 0 2px ${customTeal[300]}, 0 2px 4px 0 ${alpha(customTeal[400], 0.25)}`,

    // Component-specific shadows
    card: isLight
      ? `0 1px 3px 0 ${alpha(color, 0.12)}, 0 1px 2px 0 ${alpha(color, 0.06)}`
      : `0 1px 3px 0 ${alpha(color, 0.25)}, 0 1px 2px 0 ${alpha(color, 0.12)}`,

    dialog: isLight
      ? `0 10px 15px -3px ${alpha(color, 0.12)}, 0 4px 6px -2px ${alpha(color, 0.06)}`
      : `0 10px 15px -3px ${alpha(color, 0.25)}, 0 4px 6px -2px ${alpha(color, 0.12)}`,

    dropdown: isLight
      ? `0 4px 6px -1px ${alpha(color, 0.12)}, 0 2px 4px -1px ${alpha(color, 0.06)}`
      : `0 4px 6px -1px ${alpha(color, 0.25)}, 0 2px 4px -1px ${alpha(color, 0.12)}`,
  };
}

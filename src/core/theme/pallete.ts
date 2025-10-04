import { PaletteMode } from '@mui/material';

export type ColorSchema =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'warning'
  | 'info'
  | 'success'
  | 'destructive';

declare module '@mui/material/styles' {
  interface SimplePaletteColorOptions {
    lighter: string;
    darker: string;
  }

  interface PaletteColor {
    lighter: string;
    darker: string;
  }

  interface TypeText {
    white: string;
    black: string;
    primary: string;
    secondary: string;
    success: string;
    error: string;
    disabled: string;
    button: string;
    textButton: string;
    metadata: string;
    placeholder: string;
    header: string;
    destructive: string;
    link: string;
  }

  interface TypeAction {
    disabled: string;
    disabledBackground: string;
    focus: string;
    hoverOpacity: number;
    disabledOpacity: number;
  }

  interface TypeBackground {
    default: string;
    paper: string;
    neutral: string;
    // layer at the bottom
    layer0: string;
    // layer inside layer0
    layer1: string;
    // layer inside layer1
    layer2: string;
    // layer inside layer2
    layer3: string;
    // layer inside layer3
    layer4: string;
  }

  interface TypeBackgroundOptions {
    default?: string;
    paper?: string;
    neutral?: string;
    layer0?: string;
    layer1?: string;
    layer2?: string;
    layer3?: string;
    layer4?: string;
  }

  interface Palette {
    text: TypeText;
    background: TypeBackground;
    divider: string;
    destructive: PaletteColor;
  }

  interface PaletteOptions {
    destructive?: PaletteColor;
  }
}

export const customWhite = {
  100: '#FFFFFF',
  75: 'rgba(255, 255, 255, 0.75)',
  50: 'rgba(255, 255, 255, 0.5)',
  25: 'rgba(255, 255, 255, 0.25)',
  10: 'rgba(255, 255, 255, 0.1)',
};

export const customBlack = {
  100: '#111827',
  75: 'rgba(17, 24, 39, 0.75)',
  50: 'rgba(17, 24, 39, 0.5)',
  25: 'rgba(17, 24, 39, 0.25)',
  10: 'rgba(17, 24, 39, 0.1)',
};

export const customGray = {
  '50': '#F9FAFB',
  '100': '#F3F4F6',
  '200': '#E5E7EB',
  '300': '#D1D5DB',
  '400': '#9CA3AF',
  '500': '#6B7280',
  '600': '#4B5563',
  '700': '#374151',
  '800': '#1F2937',
  '900': '#111827',
};

export const customTeal = {
  '50': '#CCFBF1',
  '100': '#99F6E4',
  '200': '#5EEAD4',
  '300': '#2DD4BF',
  '400': '#14B8A6',
  '500': '#0D9488',
  '600': '#0F766E',
  '700': '#115E59',
  '800': '#134E4A',
  '900': '#0A2927',
};

export const customLime = {
  '50': '#F0FDEA',
  '100': '#DCFCE7',
  '200': '#BBF7D0',
  '300': '#86EFAC',
  '400': '#4ADE80',
  '500': '#22C55E',
  '600': '#16A34A',
  '700': '#15803D',
  '800': '#166534',
  '900': '#14532D',
};

export const customOrgange = {
  '50': '#FFF8F1',
  '100': '#FEECDC',
  '200': '#FCD9BD',
  '300': '#FDBA74',
  '400': '#FB923C',
  '500': '#F97316',
  '600': '#EA580C',
  '700': '#BE4B0C',
  '800': '#932F0C',
  '900': '#7B2906',
};

export const customRed = {
  '50': '#FFF5F5',
  '100': '#FFE3E3',
  '200': '#FFC9C9',
  '300': '#FFA8A8',
  '400': '#FF8787',
  '500': '#FF6B6B',
  '600': '#FA5252',
  '700': '#F03E3E',
  '800': '#E03131',
  '900': '#C92A2A',
};

// Primary colors using customTeal
export const primaryLight = {
  main: customTeal[500], // #0D9488 - Main teal
  lighter: customTeal[100], // #99F6E4 - Light teal
  darker: customTeal[700], // #115E59 - Dark teal
  light: customTeal[200], // #5EEAD4 - Very light teal
  dark: customTeal[800], // #134E4A - Very dark teal
  contrastText: customWhite[100], // White text on teal
};

export const primaryDark = {
  main: customTeal[400], // #14B8A6 - Brighter teal for dark mode
  lighter: customTeal[200], // #5EEAD4 - Light teal for dark mode
  darker: customTeal[600], // #0F766E - Dark teal for dark mode
  light: customTeal[300], // #2DD4BF - Very light teal for dark mode
  dark: customTeal[700], // #115E59 - Very dark teal for dark mode
  contrastText: customBlack[100], // Dark text on teal
};

// Secondary colors using customOrange
export const secondaryLight = {
  main: customOrgange[500], // #F97316 - Main orange
  lighter: customOrgange[100], // #FEECDC - Light orange
  darker: customOrgange[700], // #BE4B0C - Dark orange
  light: customOrgange[200], // #FCD9BD - Very light orange
  dark: customOrgange[800], // #932F0C - Very dark orange
  contrastText: customWhite[100], // White text on orange
};

export const secondaryDark = {
  main: customOrgange[400], // #FB923C - Brighter orange for dark mode
  lighter: customOrgange[200], // #FCD9BD - Light orange for dark mode
  darker: customOrgange[600], // #EA580C - Dark orange for dark mode
  light: customOrgange[300], // #FDBA74 - Very light orange for dark mode
  dark: customOrgange[700], // #BE4B0C - Very dark orange for dark mode
  contrastText: customBlack[100], // Dark text on orange
};

// Success colors using customLime
export const successLight = {
  main: customLime[500], // #22C55E - Main lime green
  lighter: customLime[100], // #DCFCE7 - Light lime
  darker: customLime[700], // #15803D - Dark lime
  light: customLime[200], // #BBF7D0 - Very light lime
  dark: customLime[800], // #166534 - Very dark lime
  contrastText: customWhite[100], // White text on lime
};

export const successDark = {
  main: customLime[400], // #4ADE80 - Brighter lime for dark mode
  lighter: customLime[200], // #BBF7D0 - Light lime for dark mode
  darker: customLime[600], // #16A34A - Dark lime for dark mode
  light: customLime[300], // #86EFAC - Very light lime for dark mode
  dark: customLime[700], // #15803D - Very dark lime for dark mode
  contrastText: customBlack[100], // Dark text on lime
};

// Warning colors using customOrange variants
export const warningLight = {
  main: customOrgange[500], // #F97316 - Main orange for warnings
  lighter: customOrgange[50], // #FFF8F1 - Very light orange background
  darker: customOrgange[800], // #932F0C - Dark orange text
  light: customOrgange[100], // #FEECDC - Light orange
  dark: customOrgange[700], // #BE4B0C - Dark orange
  contrastText: customWhite[100], // White text on orange
};

export const warningDark = {
  main: customOrgange[400], // #FB923C - Brighter orange for dark mode
  lighter: customOrgange[100], // #FEECDC - Light orange for dark mode
  darker: customOrgange[900], // #7B2906 - Very dark orange for dark mode
  light: customOrgange[200], // #FCD9BD - Light orange for dark mode
  dark: customOrgange[700], // #BE4B0C - Dark orange for dark mode
  contrastText: customBlack[100], // Dark text on orange
};

// Info colors using customTeal variants
export const infoLight = {
  main: customTeal[400], // #14B8A6 - Lighter teal for info
  lighter: customTeal[50], // #CCFBF1 - Very light teal background
  darker: customTeal[700], // #115E59 - Dark teal text
  light: customTeal[100], // #99F6E4 - Light teal
  dark: customTeal[600], // #0F766E - Dark teal
  contrastText: customWhite[100], // White text on teal
};

export const infoDark = {
  main: customTeal[300], // #2DD4BF - Brighter teal for dark mode
  lighter: customTeal[100], // #99F6E4 - Light teal for dark mode
  darker: customTeal[600], // #0F766E - Dark teal for dark mode
  light: customTeal[200], // #5EEAD4 - Very light teal for dark mode
  dark: customTeal[500], // #0D9488 - Dark teal for dark mode
  contrastText: customBlack[100], // Dark text on teal
};

// Destructive colors using customRed
export const destructiveLight = {
  main: customRed[500], // #FF6B6B - Main red
  lighter: customRed[50], // #FFF5F5 - Very light red background
  darker: customRed[800], // #E03131 - Dark red
  light: customRed[100], // #FFE3E3 - Light red
  dark: customRed[700], // #F03E3E - Dark red
  contrastText: customWhite[100], // White text on red
};

export const destructiveDark = {
  main: customRed[400], // #FF8787 - Brighter red for dark mode
  lighter: customRed[100], // #FFE3E3 - Light red for dark mode
  darker: customRed[700], // #F03E3E - Dark red for dark mode
  light: customRed[200], // #FFC9C9 - Very light red for dark mode
  dark: customRed[600], // #FA5252 - Dark red for dark mode
  contrastText: customBlack[100], // Dark text on red
};

// Error colors (same as destructive for consistency)
export const errorLight = {
  main: customRed[500], // #FF6B6B - Main red
  lighter: customRed[50], // #FFF5F5 - Very light red background
  darker: customRed[800], // #E03131 - Dark red
  light: customRed[100], // #FFE3E3 - Light red
  dark: customRed[700], // #F03E3E - Dark red
  contrastText: customWhite[100], // White text on red
};

export const errorDark = {
  main: customRed[400], // #FF8787 - Brighter red for dark mode
  lighter: customRed[100], // #FFE3E3 - Light red for dark mode
  darker: customRed[700], // #F03E3E - Dark red for dark mode
  light: customRed[200], // #FFC9C9 - Very light red for dark mode
  dark: customRed[600], // #FA5252 - Dark red for dark mode
  contrastText: customBlack[100], // Dark text on red
};

export const textLight = {
  white: customWhite[100], // #FFFFFF - Pure white text
  black: customBlack[100], // #111827 - Pure black text
  primary: customTeal[700], // #115E59 - Dark teal for primary text
  secondary: customOrgange[700], // #BE4B0C - Dark orange for secondary text
  success: customLime[700], // #15803D - Dark lime for success text
  error: customRed[700], // #F03E3E - Red for error text
  disabled: customGray[400], // #9CA3AF - Gray for disabled text
  button: customWhite[100], // #FFFFFF - White text on colored buttons
  textButton: customTeal[600], // #0F766E - Teal text for text buttons
  metadata: customGray[600], // #4B5563 - Medium gray for metadata
  placeholder: customGray[400], // #9CA3AF - Light gray for placeholders
  header: customBlack[100], // #111827 - Black for headers
  destructive: customRed[700], // #F03E3E - Red for destructive text
  link: customTeal[600], // #0F766E - Teal for links
};

export const textDark = {
  white: customWhite[100], // #FFFFFF - Pure white text
  black: customBlack[100], // #111827 - Pure black text
  primary: customTeal[200], // #5EEAD4 - Light teal for primary text
  secondary: customOrgange[200], // #FCD9BD - Light orange for secondary text
  success: customLime[200], // #BBF7D0 - Light lime for success text
  error: customRed[300], // #FFA8A8 - Light red for error text
  disabled: customGray[500], // #6B7280 - Medium gray for disabled text
  button: customBlack[100], // #111827 - Dark text on light buttons
  textButton: customTeal[300], // #2DD4BF - Light teal for text buttons
  metadata: customGray[400], // #9CA3AF - Light gray for metadata
  placeholder: customGray[500], // #6B7280 - Medium gray for placeholders
  header: customWhite[100], // #FFFFFF - White for headers
  destructive: customRed[300], // #FFA8A8 - Light red for destructive text
  link: customTeal[300], // #2DD4BF - Light teal for links
};

export const backgroundLight = {
  default: customWhite[100], // #FFFFFF - Pure white background
  paper: customWhite[100], // #FFFFFF - Paper/card background
  neutral: customGray[50], // #F9FAFB - Very light gray for neutral areas
  layer0: customWhite[100], // #FFFFFF - Base layer (bottom)
  layer1: customGray[50], // #F9FAFB - First container layer
  layer2: customGray[100], // #F3F4F6 - Second container layer
  layer3: customGray[200], // #E5E7EB - Third container layer
  layer4: customGray[300], // #D1D5DB - Fourth container layer (top)
};

export const backgroundDark = {
  default: customBlack[100], // #111827 - Pure black background
  paper: customGray[800], // #1F2937 - Dark gray for paper/cards
  neutral: customGray[900], // #111827 - Very dark gray for neutral areas
  layer0: customBlack[100], // #111827 - Base layer (bottom)
  layer1: customGray[900], // #111827 - First container layer
  layer2: customGray[800], // #1F2937 - Second container layer
  layer3: customGray[700], // #374151 - Third container layer
  layer4: customGray[600], // #4B5563 - Fourth container layer (top)
};

export const actionLight = {
  disabled: customGray[300], // #D1D5DB - Light gray for disabled elements
  disabledBackground: customGray[100], // #F3F4F6 - Light gray background for disabled
  focus: customTeal[200], // #5EEAD4 - Light teal for focus states
  hoverOpacity: 0.08, // 8% opacity for hover effects
  disabledOpacity: 0.38, // 38% opacity for disabled elements
};

export const actionDark = {
  disabled: customGray[600], // #4B5563 - Medium gray for disabled elements
  disabledBackground: customGray[800], // #1F2937 - Dark gray background for disabled
  focus: customTeal[300], // #2DD4BF - Bright teal for focus states
  hoverOpacity: 0.12, // 12% opacity for hover effects (higher for dark mode)
  disabledOpacity: 0.38, // 38% opacity for disabled elements
};

export const common = {
  black: customBlack[100],
  white: customWhite[100],
};

export const paletteLight = {
  primary: primaryLight,
  secondary: secondaryLight,
  info: infoLight,
  success: successLight,
  warning: warningLight,
  error: errorLight,
  destructive: destructiveLight,
  black: customBlack,
  white: customWhite,
  common,
  action: actionLight,
  text: textLight,
  background: backgroundLight,
  divider: customGray[200], // #E5E7EB - Light gray for dividers
};

export const paletteDark = {
  primary: primaryDark,
  secondary: secondaryDark,
  info: infoDark,
  success: successDark,
  warning: warningDark,
  error: errorDark,
  destructive: destructiveDark,
  black: customBlack,
  white: customWhite,
  common,
  action: actionDark,
  text: textDark,
  background: backgroundDark,
  divider: customGray[700], // #374151 - Dark gray for dividers
};

export function pallete(mode: PaletteMode) {
  return mode === 'light' ? paletteLight : paletteDark;
}

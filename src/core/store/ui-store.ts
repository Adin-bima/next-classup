import { create } from 'zustand';

import { PaletteMode } from '@mui/material';

interface UIStore {
  mode: PaletteMode;
  setMode: (mode: PaletteMode) => void;
}

export const useUIStore = create<UIStore>((set) => ({
  mode: 'light',
  setMode: (mode) => set({ mode }),
}));

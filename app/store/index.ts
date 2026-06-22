import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    sidebarOpen: true,
    activeNav: 'Casino',
    casinoExpanded: true,
    liveCasinoExpanded: true,
  },
  reducers: {
    toggleSidebar: (state) => { state.sidebarOpen = !state.sidebarOpen; },
    setActiveNav: (state, action: PayloadAction<string>) => { state.activeNav = action.payload; },
    toggleCasino: (state) => { state.casinoExpanded = !state.casinoExpanded; },
    toggleLiveCasino: (state) => { state.liveCasinoExpanded = !state.liveCasinoExpanded; },
  },
});

export const { toggleSidebar, setActiveNav, toggleCasino, toggleLiveCasino } = uiSlice.actions;

export const store = configureStore({ reducer: { ui: uiSlice.reducer } });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
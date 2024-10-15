import { createSlice } from '@reduxjs/toolkit';

// ? Types
import type { PayloadAction } from '@reduxjs/toolkit';

export interface InventoryStoreState {
  currentStep: number;
}

const initialState: InventoryStoreState = {
  currentStep: 0,
};

export const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    setCurrentStep: (state, action: PayloadAction<number>) => {
      if (action.payload > 3 || action.payload < 0) return;
      state.currentStep = action.payload;
    },
  },
});

export const { setCurrentStep } = inventorySlice.actions;

export default inventorySlice;

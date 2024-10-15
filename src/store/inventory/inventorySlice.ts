import { createSlice } from '@reduxjs/toolkit';

// ? Types
import type { PayloadAction } from '@reduxjs/toolkit';
import type { InventoryAddress } from '@/modules/inventory/types';

export interface InventoryStoreState {
  currentStep: number;
  wizzardAddress?: InventoryAddress;
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

    resetInventoryWizzard: (state) => {
      state.currentStep = 0;
      state.wizzardAddress = undefined;
    },

    setInventoryWizzardAddress: (
      state,
      action: PayloadAction<InventoryAddress>
    ) => {
      state.wizzardAddress = action.payload;
    },
  },
});

export const {
  setCurrentStep,
  resetInventoryWizzard,
  setInventoryWizzardAddress,
} = inventorySlice.actions;

export default inventorySlice;

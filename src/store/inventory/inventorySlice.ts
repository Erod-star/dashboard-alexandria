import { createSlice } from '@reduxjs/toolkit';

// ? Types
import type { PayloadAction } from '@reduxjs/toolkit';
import type {
  InventoryAddress,
  InventoryDetails,
} from '@/modules/inventory/types';

export interface InventoryStoreState {
  currentStep: number;
  wizardAddress?: InventoryAddress;
  wizardDetails?: InventoryDetails;
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

    resetInventoryWizard: (state) => {
      state.currentStep = 0;
      state.wizardAddress = undefined;
    },

    setInventoryWizardAddress: (
      state,
      action: PayloadAction<InventoryAddress>
    ) => {
      state.wizardAddress = action.payload;
    },

    setInventoryWizardDetails: (
      state,
      action: PayloadAction<InventoryDetails>
    ) => {
      state.wizardDetails = action.payload;
    },
  },
});

export const {
  setCurrentStep,
  resetInventoryWizard,
  setInventoryWizardAddress,
  setInventoryWizardDetails,
} = inventorySlice.actions;

export default inventorySlice;

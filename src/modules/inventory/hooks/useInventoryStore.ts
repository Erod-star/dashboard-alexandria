// ? Store
import { useAppDispatch, useAppSelector } from '@/store/store-hooks';
import {
  setCurrentStep as setCurrentStepSlice,
  resetInventoryWizzard as resetInventoryWizzardSlice,
  setInventoryWizzardAddress as setInventoryWizzardAddressSlice,
} from '@/store/inventory/inventorySlice';

// ? Types
import type { InventoryAddress } from '../types';

export const useInventoryStore = () => {
  const { currentStep, wizzardAddress } = useAppSelector(
    (state) => state.inventory
  );
  const dispatch = useAppDispatch();

  const resetInventoryWizzard = () => {
    dispatch(resetInventoryWizzardSlice());
  };

  const setNextStep = () => {
    dispatch(setCurrentStepSlice(currentStep + 1));
  };

  const setPreviousStep = () => {
    dispatch(setCurrentStepSlice(currentStep - 1));
  };

  const setCurrentStep = (step: number) => {
    dispatch(setCurrentStepSlice(step));
  };

  const setInventoryWizzardAddress = (address: InventoryAddress) => {
    dispatch(setInventoryWizzardAddressSlice(address));
  };

  return {
    // ? Properties
    currentStep,
    wizzardAddress,

    // ? Methods
    resetInventoryWizzard,
    setCurrentStep,
    setInventoryWizzardAddress,
    setNextStep,
    setPreviousStep,
  };
};

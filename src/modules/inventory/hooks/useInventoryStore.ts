// ? Store
import { useAppDispatch, useAppSelector } from '@/store/store-hooks';
import {
  setCurrentStep as setCurrentStepSlice,
  resetInventoryWizard as resetInventoryWizardSlice,
  setInventoryWizardAddress as setInventoryWizardAddressSlice,
  setInventoryWizardDetails as setInventoryWizardDetailsSlice,
} from '@/store/inventory/inventorySlice';

// ? Types
import type { InventoryAddress, InventoryDetails } from '../types';

export const useInventoryStore = () => {
  const { currentStep, wizardAddress, wizardDetails } = useAppSelector(
    (state) => state.inventory
  );
  const dispatch = useAppDispatch();

  const resetInventoryWizard = () => {
    dispatch(resetInventoryWizardSlice());
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

  const setInventoryWizardAddress = (address: InventoryAddress) => {
    dispatch(setInventoryWizardAddressSlice(address));
  };

  const setInventoryWizardDetails = (details: InventoryDetails) => {
    dispatch(setInventoryWizardDetailsSlice(details));
  };

  return {
    // ? Properties
    currentStep,
    wizardAddress,
    wizardDetails,

    // ? Methods
    resetInventoryWizard,
    setCurrentStep,
    setNextStep,
    setPreviousStep,
    setInventoryWizardAddress,
    setInventoryWizardDetails,
  };
};

// ? Store
import { useAppDispatch, useAppSelector } from '@/store/store-hooks';
import { setCurrentStep as setCurrentStepSlice } from '@/store/inventory/inventorySlice';

export const useInventoryStore = () => {
  const { currentStep } = useAppSelector((state) => state.inventory);
  const dispatch = useAppDispatch();

  const setCurrentStep = (step: number) => {
    dispatch(setCurrentStepSlice(step));
  };

  return {
    // ? Properties
    currentStep,

    // ? Methods
    setCurrentStep,
  };
};

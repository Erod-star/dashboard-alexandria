// ? Store
import { useAppDispatch, useAppSelector } from '@/store/store-hooks';
import {
  setIsEventDetailModalOpen as setIsEventDetailModalOpenSlice,
  setSelectedEvent as setSelectedEventSlice,
} from '@/store/calendar/calendarSlice';

// ? Types
import type { AltaltiumEventForm } from '../types';

export const useCalendarStore = () => {
  const { selectedEvent, isEventDetailModalOpen } = useAppSelector(
    (state) => state.calendar
  );
  const dispatch = useAppDispatch();

  const setSelectedEvent = (event: AltaltiumEventForm | null) => {
    dispatch(setSelectedEventSlice(event));
  };

  const setIsEventDetailModalOpen = (isOpen: boolean) => {
    dispatch(setIsEventDetailModalOpenSlice(isOpen));
  };

  return {
    // ? Properties
    selectedEvent,
    isEventDetailModalOpen,

    // ? Methods
    setSelectedEvent,
    setIsEventDetailModalOpen,
  };
};

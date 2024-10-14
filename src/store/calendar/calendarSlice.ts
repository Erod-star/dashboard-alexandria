import { createSlice } from '@reduxjs/toolkit';

// ? Types
import type { PayloadAction } from '@reduxjs/toolkit';
import type { AltaltiumEventForm } from '@/modules/calendar/types/AltaltiumEvent';

export interface CalendarStoreState {
  selectedEvent: AltaltiumEventForm | null;
  isEventDetailModalOpen: boolean;
}

const initialState: CalendarStoreState = {
  selectedEvent: null,
  isEventDetailModalOpen: false,
};

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    setSelectedEvent: (
      state,
      action: PayloadAction<AltaltiumEventForm | null>
    ) => {
      state.selectedEvent = action.payload;
    },
    setIsEventDetailModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isEventDetailModalOpen = action.payload;
    },
  },
});

export const { setSelectedEvent, setIsEventDetailModalOpen } =
  calendarSlice.actions;

export default calendarSlice;

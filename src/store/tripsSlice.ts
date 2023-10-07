import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@/models';
import { Trip } from '@/entities/trip';

const tripsSlice = createSlice({
  name: 'trips',
  initialState: [] as Trip[],
  reducers: {
    addTrip(state, action: PayloadAction<Trip>) {
      state.push(action.payload);
    },
    removeTrip: (state, action: PayloadAction<string>) => {
      state = state.filter((trip) => trip.id !== action.payload);
    },
  },
});

export const { addTrip, removeTrip } = tripsSlice.actions;

export const { reducer: tripsReducer } = tripsSlice;

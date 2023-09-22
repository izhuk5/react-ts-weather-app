import { createSlice } from '@reduxjs/toolkit';
import { Trip } from '@/entities/trip';
import { PayloadAction } from '@/models';

const tripsSlice = createSlice({
  name: 'trips',
  initialState: {
    trips: [] as Trip[],
  },
  reducers: {
    addTrips(state, action: PayloadAction<Trip[]>) {
      state.trips = action.payload;
    },
    addTrip(state, action: PayloadAction<Trip>) {
      state.trips.push(action.payload);
    },
    removeTrip: (state, action: PayloadAction<string>) => {
      state.trips = state.trips.filter((trip) => trip.id !== action.payload);
    },
  },
});

export const { addTrips, addTrip, removeTrip } = tripsSlice.actions;

export const tripsReducer = tripsSlice.reducer;

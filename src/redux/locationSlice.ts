import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Location } from '../App';

interface LocationState {
  locations: Location[];
}

const initialState: LocationState = {
  locations: []
};

export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setLocations: (state, action: PayloadAction<Location[]>) => {
      state.locations = action.payload;
    }
  }
});

export const { setLocations } = locationSlice.actions;
export default locationSlice.reducer;
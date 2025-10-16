// src/hooks/useInitializeAppData.ts
import { useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import { useAppDispatch } from '../redux/hooks';
import { setLocations } from '../redux/locationSlice';
import { Period, Location } from '../App';

const periods: Period[] = [
  { id: '202301', name: 'January 2023' },
  { id: '202302', name: 'February 2023' },
  { id: '202303', name: 'March 2023' },
];

const locations: Location[] = [
  { id: 'loc1', name: 'Location 1' },
  { id: 'loc2', name: 'Location 2' },
  { id: 'loc3', name: 'Location 3' },
];

export function useInitializeAppData() {
  const { setPeriods } = useAppContext();
  const dispatch = useAppDispatch();

  useEffect(() => {
    setPeriods(periods);
    dispatch(setLocations(locations));
  }, [setPeriods, dispatch]);
}
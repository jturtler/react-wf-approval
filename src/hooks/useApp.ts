import { useEffect } from "react";
import { useAppContext } from "../context/AppContext";
import { useAppDispatch } from "../redux/hooks";

/*
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

export function useApp () {
	 const { setPeriods } = useAppContext();
	  const dispatch = useAppDispatch();
	
	  useEffect(() => {
		 console.log('App mounted');
	
		 // Simulating data retrieval with static data for now
		 setPeriods(periods);
		 dispatch(setLocations(locations));
	  }, [setPeriods, dispatch]);
}
	  */
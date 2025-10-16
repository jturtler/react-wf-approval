import { useEffect, useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import MainBody from './components/MainBody'

export interface Period {
  id: string
  name: string
}

export interface Location {
  id: string
  name: string
}

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

function App() {
  const [periodList, setPeriodList] = useState<Period[]>([]);
  const [locationList, setLocationList] = useState<Location[]>([]);

  useEffect(() => {
    console.log('App mounted');

    // Call retrievePeriods and retrieveLocations functions and set ContextApi for periods and locations
    // Simulating data retrieval with static data for now

    setPeriodList(periods);
    setLocationList(locations);
  }, []);
  

  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen">
      <Header/>
      <MainBody periodList={periodList} locationList={locationList} />
      <Footer />
    </div>
  )
}

export default App

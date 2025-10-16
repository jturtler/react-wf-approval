//import { useEffect } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import MainBody from './components/MainBody'
//import { useAppContext } from './context/AppContext'
//import { useAppDispatch } from './redux/hooks'
//import { setLocations } from './redux/locationSlice'
import { useInitializeAppData } from './hooks/useInitializeAppData'

export interface Period {
  id: string
  name: string
}

export interface Location {
  id: string
  name: string
}

/*const periods: Period[] = [
  { id: '202301', name: 'January 2023' },
  { id: '202302', name: 'February 2023' },
  { id: '202303', name: 'March 2023' },
];

const locations: Location[] = [
  { id: 'loc1', name: 'Location 1' },
  { id: 'loc2', name: 'Location 2' },
  { id: 'loc3', name: 'Location 3' },
];
*/

function App() {
  /*
  const { setPeriods } = useAppContext();
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log('App mounted');

    // Simulating data retrieval with static data for now
    setPeriods(periods);
    dispatch(setLocations(locations));
  }, [setPeriods, dispatch]);
  */

  useInitializeAppData();

  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen">
      <Header/>
      <MainBody />
      <Footer />
    </div>
  )
}

export default App

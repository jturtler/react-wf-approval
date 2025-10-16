import { createContext, useContext, ReactNode, useState } from 'react';
import { Period, Location } from '../App';

interface AppContextType {
  periods: Period[];
  setPeriods: (periods: Period[]) => void;
  locations: Location[];
  setLocations: (locations: Location[]) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [periods, setPeriods] = useState<Period[]>([]);
  const [locations, setLocations] = useState<Location[]>([]);

  return (
    <AppContext.Provider value={{ periods, setPeriods, locations, setLocations }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}

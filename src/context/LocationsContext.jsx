import React from 'react';
import { createContext } from 'react';
import { useFetchData } from '../hooks/useFetchData';
import { ENDPOINTS } from '../services/apiConstants';

const LocationsContext = createContext();

export const useLocationsContext = () => React.useContext(LocationsContext);

export const LocationsProvider = ({ children }) => {
  const { data: locationsData, isLoading, error } = useFetchData(ENDPOINTS.LOCATIONS);

  return (
    <LocationsContext.Provider value={{ locationsData, isLoading, error }}>
      {children}
    </LocationsContext.Provider>
  );
};

import React from 'react';
import { createContext } from 'react';
import { useFetchData } from '../hooks/useFetchData';
import { ENDPOINTS } from '../services/apiConstants';

const EpisodesContext = createContext();

export const useEpisodesContext = () => React.useContext(EpisodesContext);

export const EpisodesProvider = ({ children }) => {
  const { data: episodesData, isLoading, error } = useFetchData(ENDPOINTS.EPISODES);

  return (
    <EpisodesContext.Provider value={{ episodesData, isLoading, error }}>
      {children}
    </EpisodesContext.Provider>
  );
};

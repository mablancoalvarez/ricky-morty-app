import { Route, Routes, Navigate } from 'react-router-dom';
import { EpisodesProvider } from './context/EpisodesContext';
import { LocationsProvider } from './context/LocationsContext';
import EpisodeList from './screens/Episodes/EpisodeList';
import EpisodeDetails from './screens/Episodes/EpisodeDetails';
import NotFound from './components/UI/NotFound';
import LocationList from './screens/Locations/LocationList';
import LocationDetails from './screens/Locations/LocationDetails';
import Menu from './components/UI/Menu';

function App() {
  return (
    <div className='App'>
      <Menu />
      <Routes>
        <Route index element={<Navigate to='/episodes' />} />
        <Route
          path='/episodes'
          element={
            <EpisodesProvider>
              <EpisodeList />
            </EpisodesProvider>
          }
        />
        <Route
          path='/episodes/:id'
          element={
            <EpisodesProvider>
              <EpisodeDetails />
            </EpisodesProvider>
          }
        />
        <Route
          path='/locations'
          element={
            <LocationsProvider>
              <LocationList />
            </LocationsProvider>
          }
        />
        <Route
          path='/locations/:id'
          element={
            <LocationsProvider>
              <LocationDetails />
            </LocationsProvider>
          }
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

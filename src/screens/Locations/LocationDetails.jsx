import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLocationsContext } from '../../context/LocationsContext.jsx';
import Carrusel from '../../components/UI/Carrusel.jsx';
import BackLink from '../../components/UI/BackLink.jsx';
import Title from '../../components/UI/Title.jsx';
import Description from '../../components/UI/Description.jsx';
import { getMultiplesUrlsData } from '../../utils/helpers.js';
import { ROUTES } from '../../utils/constants.js';

const LocationDetails = () => {
  const { id } = useParams();
  const { locationsData } = useLocationsContext();
  const [residentData, setResidentData] = useState([]);
  const result = locationsData?.results[id];
  const { name, residents, dimension } = result || {};

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (residents) {
          const responseData = await getMultiplesUrlsData(residents);
          setResidentData(responseData);
        }
      } catch (error) {
        console.error('error', error);
      }
    };
    fetchData();
  }, [residents]);

  if (!locationsData) return <div> Loading...</div>;
  return (
    <div className='location-details'>
      <BackLink route={ROUTES.LOCATIONS} />
      <Title title={name} className='location-details__title' />
      <Description description={dimension} className='location-details__dimension' />
      <Carrusel items={residentData} />
    </div>
  );
};

export default LocationDetails;

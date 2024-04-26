import { useParams } from 'react-router-dom';
import { useEpisodesContext } from '../../context/EpisodesContext.jsx';
import Carrusel from '../../components/UI/Carrusel.jsx';
import BackLink from '../../components/UI/BackLink.jsx';
import { getMultiplesUrlsData } from '../../utils/helpers.js';
import { useEffect, useState } from 'react';
import Form from './Form.jsx';
import { ROUTES } from '../../utils/constants.js';

const EpisodeDetails = () => {
  const { id } = useParams();
  const { episodesData } = useEpisodesContext();
  const [charactersData, setCharacters] = useState([]);
  const result = episodesData?.results[id];
  const { episode, name, air_date, characters } = result || {};

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (characters) {
          const responseData = await getMultiplesUrlsData(characters);
          setCharacters(responseData);
        }
      } catch (error) {
        console.error('error', error);
      }
    };

    fetchData();
  }, [characters]);

  if (!episodesData) return <div> Loading...</div>;
  return (
    <div className='episode-details'>
      <BackLink route={ROUTES.EPISODES} />
      <h1 className='episode-details__title'>
        {episode} - {name}
      </h1>
      <p className='episode-details__date'>{air_date}</p>
      <Carrusel items={charactersData} />
      <Form />
    </div>
  );
};

export default EpisodeDetails;

import { useParams } from 'react-router-dom';
import { useEpisodesContext } from '../../context/EpisodesContext.jsx';
import Carrusel from '../../components/UI/Carrusel.jsx';
import BackLink from '../../components/UI/BackLink.jsx';
import Title from '../../components/UI/Title.jsx';
import Description from '../../components/UI/Description.jsx';
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
      <Title title={name} className='episode-details__title' />
      <Description description={air_date} className='episode-details__date' />
      <Carrusel items={charactersData} />
      <Form />
    </div>
  );
};

export default EpisodeDetails;

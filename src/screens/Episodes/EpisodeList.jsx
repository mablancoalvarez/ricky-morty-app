import { useEpisodesContext } from '../../context/EpisodesContext';
import ListItem from '../../components/UI/ListItem';
import Title from '../../components/UI/Title';

const EpisodeList = () => {
  const { episodesData } = useEpisodesContext();

  return (
    <>
      <Title title='Episodes' />
      <ul className='ly-main'>
        {episodesData?.results?.map((episode) => {
          const { name, air_date, id, episode: episodeNumber } = episode;
          return (
            <li className='item' key={episode.id}>
              <ListItem
                topText={episodeNumber}
                title={name}
                description={air_date}
                id={id}
                to={'episodes'}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default EpisodeList;

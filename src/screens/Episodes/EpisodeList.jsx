import { useEpisodesContext } from '../../context/EpisodesContext';
import ListItem from '../../components/UI/ListItem';

const EpisodeList = () => {
  const { episodesData } = useEpisodesContext();

  return (
    <ul className='ly-main'>
      <h1>Episodes</h1>
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
  );
};
export default EpisodeList;

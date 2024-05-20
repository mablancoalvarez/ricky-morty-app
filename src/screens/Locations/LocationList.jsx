import { useLocationsContext } from '../../context/LocationsContext';
import ListItem from '../../components/UI/ListItem';
import Title from '../../components/UI/Title';
const LocationsList = () => {
  const { locationsData } = useLocationsContext();
  if (!locationsData) return <div> Loading...</div>;
  return (
    <>
      <Title title='Locations' />
      <ul className='ly-main'>
        {locationsData.results?.map((location) => {
          const { name, type, dimension, id } = location;
          return (
            <li className='item' key={location.id}>
              <ListItem
                topText={type}
                title={name}
                description={dimension}
                id={id}
                to={'locations'}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default LocationsList;

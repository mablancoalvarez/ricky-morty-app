import { useLocationsContext } from '../../context/LocationsContext';
import ListItem from '../../components/UI/ListItem';
const LocationsList = () => {
  const { locationsData } = useLocationsContext();
  if (!locationsData) return <div> Loading...</div>;
  return (
    <ul className='ly-main'>
      <h1>Locations</h1>
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
  );
};
export default LocationsList;

import { NavLink } from 'react-router-dom';
const ListItem = ({ topText, title, description, id, to }) => {
  return (
    <NavLink className='item__link' to={`/${to}/${id}`}>
      <span className='item__type'>{topText.toUpperCase()}</span>
      <h3 className='item__name'>{title}</h3>
      <p className='item__dimension'>{description}</p>
    </NavLink>
  );
};

export default ListItem;

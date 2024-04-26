import { NavLink, Link } from 'react-router-dom';
import { ROUTES } from '../../utils/constants.js';
import image from '../../assets/logo.svg';

const Menu = () => {
  return (
    <div className='menu'>
      <Link to='/'>
        <img src={image} alt='Rick and Morty logo' className='menu__image' />
      </Link>
      <nav className='menu__nav'>
        <ul className='menu__list'>
          <li className='menu__item'>
            <NavLink
              to={ROUTES.EPISODES}
              className={({ isActive }) => (isActive ? 'menu__link active' : 'menu__link')}>
              Episodes
            </NavLink>
          </li>
          <li className='menu__item'>
            <NavLink
              to={ROUTES.LOCATIONS}
              className={({ isActive }) => (isActive ? 'menu__link active' : 'menu__link')}>
              Locations
            </NavLink>{' '}
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Menu;

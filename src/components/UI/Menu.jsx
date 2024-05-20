import { NavLink, Link } from 'react-router-dom';
import { ROUTES } from '../../utils/constants.js';
import image from '../../assets/logo.svg';

const Menu = () => {
  const getNavLinkClass = ({ isActive }) => (isActive ? 'menu__link active' : 'menu__link');

  const menuItems = [
    { route: ROUTES.EPISODES, label: 'Episodes' },
    { route: ROUTES.LOCATIONS, label: 'Locations' },
  ];

  return (
    <div className='menu'>
      <Link to='/'>
        <img src={image} alt='Rick and Morty logo' className='menu__image' />
      </Link>
      <nav className='menu__nav'>
        <ul className='menu__list'>
          {menuItems.map((item, index) => (
            <li key={index} className='menu__item'>
              <NavLink to={item.route} className={getNavLinkClass}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Menu;

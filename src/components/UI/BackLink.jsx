import { Link } from 'react-router-dom';
import { CaretLeft } from '@phosphor-icons/react';

const BackLink = ({ route }) => {
  return (
    <Link to={route}>
      <span className='back-link'>
        <CaretLeft size={16} />
        <span>Back</span>
      </span>
    </Link>
  );
};

export default BackLink;

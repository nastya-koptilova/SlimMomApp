import { Link } from 'react-router-dom';

// import logoPC from '../../images/logo/logoPC.svg';
import logotab from '../../images/logo/logotab.svg';

export const Logo = () => {
  return (
    <Link to="/">
      <img src={logotab} alt="SlimMom" />
    </Link>
  );
};

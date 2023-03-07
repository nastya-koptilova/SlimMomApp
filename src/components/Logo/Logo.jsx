import { Link } from 'react-router-dom';
import { useWindowSize } from 'react-use';

import logoPC from '../../images/logo/logoPC.svg';
import logotab from '../../images/logo/logotab.svg';
import logoMob from '../../images/logo/logoMob.svg';

export const Logo = () => {
  const { width } = useWindowSize();

  return (
    <Link to="/">
      <img
        src={width > 1279 ? logoPC : logotab && width < 768 ? logoMob : logotab}
        alt="SlimMom"
      />
    </Link>
  );
};

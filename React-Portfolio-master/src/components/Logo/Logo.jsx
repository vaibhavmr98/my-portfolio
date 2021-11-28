import s from './Logo.module.scss';
import { routes } from '../../routes/BaseRoutes';
import { Link } from 'react-router-dom';
import logoSrc from '../../../src/assets/headerLogo-bgnone.png';


const Logo = ({ className }) => {
  return (
    <div className={className}>
      <Link to={routes.HOME}>
        <img  src={logoSrc} alt="Logo"  style={{height: "55px"}} />
      </Link>
    </div>
  );
};

export default Logo;

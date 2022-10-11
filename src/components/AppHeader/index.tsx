import Logo from 'components/Logo';
import { Link as RouterLink } from 'react-router-dom';

interface AppHeaderProps {
  title: string;
  backgroundColor?: string;
  rootWight?: number | string;
  rootHeight?: number | string;
}

const AppHeader = (props: AppHeaderProps) => {
  return (
    <div className="container-fluid app-header">
      <div className="row">
        <div className="col-xs-2">
          <RouterLink to="/abc">
            <Logo />
          </RouterLink>
        </div>
        <div className="col-xs-8 app-header__title">
          <h3>{props.title}</h3>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;

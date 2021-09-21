import AppHeader from 'components/AppHeader';
import { Fragment } from 'react';

type MainLayoutProps = {
  children?: JSX.Element;
};

const MainLayout = (props: MainLayoutProps) => {
  return (
    <Fragment>
      <header>
        <AppHeader title="人口チャート" />
      </header>
      {props?.children}
    </Fragment>
  );
};

export { MainLayout };

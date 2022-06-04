import { useLocation } from 'react-router-dom';
import clsx from 'clsx';

import { paths } from 'constants/paths';
import styles from './header.module.scss';
import { Navbar } from 'components';

export const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className={clsx(styles.header, { [styles.hide]: pathname === paths.survey })}>
      <div className={styles.background}>&nbsp;</div>
      <Navbar />
    </header>
  );
};

import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

import styles from './sidebar.module.scss';
import { links } from 'constants/paths';
import { Footer } from 'components';

import sideBarPng from 'assets/images/sideBarPng.png';
import covid from 'assets/images/covid.png';

export const Sidebar = ({ className }) => {
  const { t } = useTranslation(['sidebar']);

  return (
    <aside className={clsx(styles.sidebar, className)}>
      <img src={covid} className={styles.img} />
      <nav className={styles.nav}>
        <ul className={styles.list}>
          {links.map(({ id, name, path }) => (
            <li key={id} className={styles.link}>
              <NavLink to={path} className={location.pathname === path ? styles.activeLink : styles.link}>
                {t(`name.${name}`)}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <img src={sideBarPng} />
      <Footer />
    </aside>
  );
};

Sidebar.prototype = {
  className: PropTypes.string,
};

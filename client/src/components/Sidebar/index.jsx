import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

import styles from './sidebar.module.scss';
import { links } from 'constants/paths';
import { Footer } from 'components';

export const Sidebar = ({ className }) => {
  return (
    <aside className={clsx(styles.sidebar, className)}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          {links.map(({ id, name, path }) => (
            <li key={id} className={styles.link}>
              <NavLink to={path} className={styles.link}>
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Footer />
    </aside>
  );
};

Sidebar.prototype = {
  className: PropTypes.string,
};

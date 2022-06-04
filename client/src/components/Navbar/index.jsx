import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

import { links } from 'constants/paths';
import styles from './navbar.module.scss';
import { ReactComponent as MenuIcon } from 'assets/icons/menu.svg';

export const Navbar = () => {
  const [show, setShow] = useState(false);
  const { t } = useTranslation();
  const linksStyle = clsx(styles.links, { [styles.show_links]: show });
  const linkStyle = ({ isActive }) => clsx({ [styles.link_active]: isActive });

  const toggleNav = () => setShow((prev) => !prev);
  const hideNav = () => setShow(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.header}>
        <Link to="/">
          <h3>{t`pageTitle`}</h3>
        </Link>
        <button className={styles.btn} onClick={toggleNav}>
          <MenuIcon />
        </button>
      </div>
      <ul className={linksStyle}>
        {links.map(({ id, name, path }) => (
          <li key={id} className={styles.link}>
            <NavLink to={path} className={linkStyle} onClick={hideNav}>
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

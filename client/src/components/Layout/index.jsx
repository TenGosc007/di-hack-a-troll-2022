import { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './layout.module.scss';
import { Sidebar } from 'components';

export const Layout = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const containerStyle = clsx(styles.container, { [styles.show]: showSidebar });

  const onSidebarToggle = () => setShowSidebar((prev) => !prev);

  return (
    <main className={styles.layout}>
      <div className={containerStyle}>
        <Sidebar />

        <div className={styles.right}>
          <section className={styles.content}>{children}</section>
          <button className={styles.btn} onClick={onSidebarToggle}>
            hide
          </button>
        </div>
      </div>
    </main>
  );
};

Layout.prototype = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.string]),
};

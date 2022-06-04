import React from 'react';

import styles from './progressBar.module.scss';

export const ProgressBar = ({ progress }) => {
  return (
    <div className={styles.container}>
      <div className={styles.child} style={{ width: `${progress}%` }}></div>
    </div>
  );
};

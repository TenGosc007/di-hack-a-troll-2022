import React from 'react';

import { Layout, Text } from 'components';
import styles from './statsPage.module.scss';

export const StatsPage = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <Text green>Statystyki dodanej strony</Text>
        <div>Tytuł:</div>
        <div>URL:</div>
      </div>
    </Layout>
  );
};

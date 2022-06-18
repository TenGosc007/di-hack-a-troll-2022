import React, { useState, useCallback, useEffect } from 'react';

import { Layout, Text } from 'components';
import styles from './statsPage.module.scss';
import { useGetArticleQuery } from 'reduxStore/services/articles';

export const StatsPage = () => {
  const id = '629c0279b0ed0506f68237dc';
  const { data } = useGetArticleQuery(id);

  return (
    <Layout>
      <div className={styles.container}>
        <>
          <Text green>Statystyki dodanej strony</Text>
          <div className={styles.container__text}>Tytuł: {data?.article?.title}</div>
          <div className={styles.container__text}>URL: {data?.article?.url}</div>
        </>
        ;
      </div>
    </Layout>
  );
};

import React, { useState, useCallback, useEffect } from 'react';

import { Layout, Text } from 'components';
import styles from './statsPage.module.scss';
import { useGetArticleMutation } from 'reduxStore/services/articles';

export const StatsPage = () => {
  const [getStatisticLinks] = useGetArticleMutation();
  const [statData, setStatData] = useState([]);
  const id = '629c0279b0ed0506f68237dc';
  const getStatisticData = useCallback(async () => {
    if (id) {
      const res = await getStatisticLinks(id);
      console.log('res', res.data);
      if (res.data) {
        setStatData(res.data);
      }
    }
  }, []);

  console.log('statData', statData);
  useEffect(() => {
    getStatisticData();
  }, [getStatisticData]);

  return (
    <Layout>
      <div className={styles.container}>
          <>
            <Text green>Statystyki dodanej strony</Text>
            <div className={styles.container__text}>Tytuł: {statData.article?.title}</div>
            <div className={styles.container__text}>URL: {statData.article?.url}</div>
          </>;
      </div>
    </Layout>
  );
};

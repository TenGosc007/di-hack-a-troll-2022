import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from './surveyMailPage.module.scss';
import { Text, Btn, Layout, Input } from 'components';

export const SurveyMailPage = () => {
  const { t } = useTranslation(['survey']);

  return (
    <Layout>
      <div className={styles.container}>
        <Text children={t`survey3.mailLabel`} />
        <Input placeholder={t`survey3.mailPlaceholder`} type="mail" />
        <div className={styles.container__small}>
          <Btn children={t`survey3.button`} type="submit" />
        </div>
      </div>
      <div className={styles.container__footer}>{t`survey3.footer`}</div>
    </Layout>
  );
};

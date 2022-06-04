import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from './surveyIntroPage.module.scss';
import { Text, Btn, Layout, Input } from 'components';

export const SurveyIntroPage = () => {
  const { t } = useTranslation(['survey']);
  return (
    <Layout>
      <div className={styles.container}>
        <Text children={t`survey1.linkLabel`} />
        <Input placeholder={t`survey1.linkPlaceholder`} type="url" name="url" id="url" pattern="https://.*" required />
        <Text children={t`survey1.categoryLabel`} />
        <div className={styles.container__categories}>
          <Btn children={t`survey1.culture`} outline />
          <Btn children={t`survey1.science`} outline />
          <Btn children={t`survey1.world`} outline />
          <Btn children={t`survey1.celebrities`} outline />
          <Btn children={t`survey1.politics`} outline />
          <Btn children={t`survey1.sport`} outline />
          <Btn children={t`survey1.finance`} outline />
          <Btn children={t`survey1.animals`} outline />
          <Btn children={t`survey1.children`} outline />
          <Btn children={t`survey1.other`} outline />
        </div>
        <Btn children={t`survey1.button`} />
      </div>
    </Layout>
  );
};

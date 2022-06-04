import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { paths } from '../../constants/paths';
import styles from './surveyInfoPage.module.scss';
import { Text, Btn, Layout } from 'components';

export const SurveyInfoPage = () => {
  const { t } = useTranslation(['survey']);
  const navigate = useNavigate();

  return (
    // jeśli user dodał nowy artykuł

    <Layout>
      <div className={styles.container}>
        <Text green children={t`survey4.ok.header`} />
        <Text children={t`survey4.ok.info`} />
        <div className={styles.container__buttons}>
          <Btn children={t`survey4.ok.button1`} onClick={() => navigate(paths.survey, { replace: true })} />
          <Btn children={t`survey4.ok.button2`} />
        </div>
      </div>
    </Layout>

    // jeśli user dodał artykuł ponownie

    // <Layout>
    //   <div className={styles.container}>
    //     <Text green children={t`survey4.notok.header`} />
    //     <Text children={t`survey4.notok.info`} />
    //     <div className={styles.container__buttons}>
    //       <Btn children={t`survey4.notok.button1`} onClick={() => navigate(paths.survey, { replace: true })} />
    //       <Btn children={t`survey4.notok.button2`} />
    //     </div>
    //   </div>
    // </Layout>
  );
};

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { paths } from '../../constants/paths';
import styles from './surveyIntroPage.module.scss';
import { Text, Btn, Layout, Input } from 'components';

export const SurveyIntroPage = () => {
  const { t } = useTranslation(['survey']);
  const navigate = useNavigate();
  const [link, setLink] = useState('');
  const [category, setCategory] = useState('');

  const onChange = (e) => {
    setLink(e.target.value);
  };

  const handleClick = (e) => {
    setCategory(e.target.value);
  };

  console.log(link);
  console.log(category);

  return (
    <Layout>
      <div className={styles.container}>
        <Text children={t`survey1.linkLabel`} />
        <Input placeholder={t`survey1.linkPlaceholder`} type="url" value={link} onChange={onChange} />
        <Text children={t`survey1.categoryLabel`} />
        <div className={styles.container__categories}>
          <Btn children={t`survey1.culture`} outline value={category} onClick={handleClick} />
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
        <div className={styles.container__small}>
          <Btn
            children={t`survey1.button`}
            type="submit"
            onClick={() => navigate(paths.surveyQuestions, { replace: true })}
          />
        </div>
      </div>
    </Layout>
  );
};

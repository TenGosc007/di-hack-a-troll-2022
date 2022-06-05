import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { paths } from 'constants/paths';
import styles from './surveyMailPage.module.scss';
import { useSentEmailMutation } from 'reduxStore/services/user';
import {
  selectCategoryId,
  selectUrl,
  calculateResults,
  selectResult,
  setSuccess,
  setEmailState,
} from 'reduxStore/articles';
import { Text, Btn, Layout, Input } from 'components';

export const SurveyMailPage = () => {
  const { t } = useTranslation(['survey']);
  const [email, setEmail] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [sentEmail, { isLoading }] = useSentEmailMutation();
  const url = useSelector(selectUrl);
  const categoryId = useSelector(selectCategoryId);
  const result = useSelector(selectResult);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(calculateResults());
  }, []);

  const handlEmail = ({ target: { value } }) => setEmail(value);

  const hadleClickBtn = async () => {
    console.log(email, result, url, categoryId);

    try {
      const user = await sentEmail({
        email: email,
        url: url,
        category: categoryId,
        result: result,
      });
      console.log(!!user.data.metaData);

      dispatch(setEmailState(email));
      dispatch(setSuccess(!!user.data.metaData));
      navigate(paths.surveyInfo);

      setErrorMsg('');
      if (user.error) setErrorMsg(user.error.data);
    } catch (err) {
      console.log(err);
      setErrorMsg('login error');
    }
  };

  return (
    <Layout>
      <div className={styles.container}>
        <Text children={t`survey3.mailLabel`} className={styles.text} />
        <Input placeholder={t`survey3.mailPlaceholder`} type="mail" value={email} onChange={handlEmail} />
        <div className={styles.container__small}>
          {!isLoading ? <Btn children={t`survey3.button`} type="submit" onClick={hadleClickBtn} /> : <p>...Loading</p>}
          {errorMsg && <p>{errorMsg}</p>}
        </div>
      </div>
      <div className={styles.container__footer}>{t`survey3.footer`}</div>
    </Layout>
  );
};

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { paths } from 'constants/paths';
import styles from './surveyInfoPage.module.scss';
import { selectCategoryId, selectEmail, selectResult, selectSuccess, selectUrl } from 'reduxStore/articles';
import { Text, Btn, Layout } from 'components';
import { useUpdateEmailMutation } from 'reduxStore/services/user';

export const SurveyInfoPage = () => {
  const { t } = useTranslation(['survey']);
  const navigate = useNavigate();
  const [sentEmail, { isLoading }] = useUpdateEmailMutation();
  const isSuccess = useSelector(selectSuccess);
  const url = useSelector(selectUrl);
  const categoryId = useSelector(selectCategoryId);
  const result = useSelector(selectResult);
  const myEmail = useSelector(selectEmail);
  const dispatch = useDispatch();

  const hadleClickBtn = async () => {
    console.log(myEmail, result, url, categoryId);

    try {
      const user = await sentEmail({
        email: myEmail,
        url: url,
        category: categoryId,
        result: result,
      });

      navigate(paths.surveyInfo);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {isSuccess ? (
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
      ) : (
        <Layout>
          <div className={styles.container}>
            <Text green children={t`survey4.notok.header`} />
            <Text children={t`survey4.notok.info`} />
            <div className={styles.container__buttons}>
              <Btn children={t`survey4.notok.button1`} onClick={() => navigate(paths.survey, { replace: true })} />
              <Btn children={t`survey4.notok.button2`} onClick={hadleClickBtn} />
            </div>
          </div>
        </Layout>
      )}
    </>
  );
};

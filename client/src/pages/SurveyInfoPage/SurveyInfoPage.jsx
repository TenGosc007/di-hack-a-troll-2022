import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { paths } from 'constants/paths';
import styles from './surveyInfoPage.module.scss';
import { selectSuccess } from 'reduxStore/articles';
import { selectResult } from 'reduxStore/articles';
// import { selectCategoryId, selectEmail, selectResult, selectSuccess, selectUrl } from 'reduxStore/articles';
import { Text, Btn, Layout } from 'components';
// import { useUpdateEmailMutation } from 'reduxStore/services/user';

import { ReactComponent as SadIcon } from 'assets/icons/sad.svg';
import { ReactComponent as SmileIcon } from 'assets/icons/smile.svg';

export const SurveyInfoPage = () => {
  const { t } = useTranslation(['survey']);
  const navigate = useNavigate();
  // const [sentEmail] = useUpdateEmailMutation();
  const isSuccess = useSelector(selectSuccess);
  // const url = useSelector(selectUrl);
  // const categoryId = useSelector(selectCategoryId);
  const result = useSelector(selectResult);
  // const myEmail = useSelector(selectEmail);

  // const hadleClickBtn = async () => {
  //   console.log(myEmail, result, url, categoryId);

  //   try {
  //     await sentEmail({
  //       email: myEmail,
  //       url: url,
  //       category: categoryId,
  //       result: result,
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  //   navigate(paths.linkBase);
  // };

  return (
    <>
      {isSuccess ? (
        <Layout>
          <div className={styles.container}>
            <Text green children={t`survey4.ok.header`} />
            <Text children={t`survey4.ok.info`} />
            <div className={styles.container__buttons}>
              <Btn children={t`survey4.ok.button1`} onClick={() => navigate(paths.survey, { replace: true })} />
              <Btn children={t`survey4.ok.button2`} onClick={() => navigate(paths.linksBase, { replace: true })} />
            </div>
          </div>
          <div style={{ transform: 'translateY(-100%)' }}>
            <div style={{ maring: 'auto', textAlign: 'center', fontSize: '2rem' }}>
              Wiarygodność podanej strony wynosi {result}%
            </div>
            <div
              style={{
                margin: '1rem auto',
                textAlign: 'center',
                fontSize: '4rem',
                transform: 'scale(1.6)',
              }}
            >
              {result < 50 ? <SadIcon /> : <SmileIcon />}
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
              <Btn children={t`survey4.notok.button2`} onClick={() => navigate(paths.linksBase, { replace: true })} />
            </div>
          </div>
          <div style={{ transform: 'translateY(-100%)' }}>
            <div style={{ maring: 'auto', textAlign: 'center', fontSize: '2rem' }}>
              Wiarygodność podanej strony wynosi {result}%
            </div>
            <div
              style={{
                margin: '1rem auto',
                textAlign: 'center',
                fontSize: '4rem',
                transform: 'scale(1.6)',
              }}
            >
              {result < 50 ? <SadIcon /> : <SmileIcon />}
            </div>
          </div>
        </Layout>
      )}
    </>
  );
};

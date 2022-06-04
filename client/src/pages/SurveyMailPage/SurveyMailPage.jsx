import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useSentEmailMutation } from 'reduxStore/services/user';
import styles from './surveyMailPage.module.scss';
import { Text, Btn, Layout, Input } from 'components';

export const SurveyMailPage = () => {
  const { t } = useTranslation(['survey']);
  const [email, setEmail] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const handlEemail = ({ target: { value } }) => setEmail(value);
  const [sentEmail, { isLoading }] = useSentEmailMutation();

  const hadleClickBtn = async () => {
    
    try {
      const user = await sentEmail({ email });
      console.log('sent', user);
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
        <Text children={t`survey3.mailLabel`} className={styles.text}/>
        <Input placeholder={t`survey3.mailPlaceholder`} type="mail" value={email} onChange={handlEemail} />
        <div className={styles.container__small}>
          {!isLoading ? <Btn children={t`survey3.button`} type="submit" onClick={hadleClickBtn} /> : <p>...Loading</p>}
          {errorMsg && <p>{errorMsg}</p>}
        </div>
      </div>
      <div className={styles.container__footer}>{t`survey3.footer`}</div>
    </Layout>
  );
};

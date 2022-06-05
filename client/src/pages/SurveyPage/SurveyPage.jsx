import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useCallback, useState, useEffect } from 'react';

import { paths } from '../../constants/paths';
import { objectMapArray } from 'utils';
import styles from './surveyPage.module.scss';
import { Btn, Layout, Text, ProgressBar } from 'components';
import {
  selectQuestions,
  next,
  selectActiveQuestion,
  toggle,
  selectMaxPoints,
  selectPoints,
} from 'reduxStore/survey/surveySlice';
import { useGetSurveyIdMutation } from 'reduxStore/services/survey';

export const SurveyPage = () => {
  const navigate = useNavigate();
  const maxLength = 10;
  const [getQuestion] = useGetSurveyIdMutation();
  const [activeQuestion, setActiveQuestion] = useState();
  const [lp, setLp] = useState(1);

  const handleToogle = () => async () => {
    
    setLp((lp) => lp + 1);

    if (lp < 10) {
      console.log('click', lp);
      if (lp) {
        const res = await getQuestion(lp);;
        if (res.data) setActiveQuestion(res.data);
      }
    } else {
      navigate(paths.surveyMail, { replace: true });
    }
  };

  const getActiveQuestion = useCallback(async () => {
    setActiveQuestion('');
    if (lp) {
      const res = await getQuestion(lp);
      console.log('res', res);
      if (res.data) setActiveQuestion(res.data);
    }
  }, []);

  useEffect(() => {
    getActiveQuestion();
  }, [getActiveQuestion]);

  return (
    <Layout>
      <div className={styles.survey}>
        <Text>{activeQuestion?.question}</Text>
        <div className={styles.buttons}>
          <Btn outline onClick={handleToogle()} className={styles.btn} children={'NIE'} value={-1} />
          <Btn outline onClick={handleToogle()} className={styles.btn} children={'NIE WIEM'} value={0} />
          <Btn outline onClick={handleToogle()} className={styles.btn} children={'TAK'} value={1} />
        </div>
        <div className={styles.progress}>
          {lp}/ {maxLength}
          <ProgressBar progress={(100 / maxLength) * lp} />
        </div>
      </div>
    </Layout>
  );
};

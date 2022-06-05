import { useNavigate } from 'react-router-dom';
import { useCallback, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { paths } from '../../constants/paths';
import styles from './surveyPage.module.scss';
import { Btn, Layout, Text, ProgressBar } from 'components';
import { useGetSurveyIdMutation } from 'reduxStore/services/survey';
import { addFake, addReal } from 'reduxStore/articles';

export const SurveyPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const maxLength = 10;
  const [getQuestion] = useGetSurveyIdMutation();
  const [activeQuestion, setActiveQuestion] = useState();
  const [lp, setLp] = useState(1);
  const [val, setValue] = useState();

  console.log('value', val);
  const handleToogle = () => async () => {
    console.log('value', val);
    console.log('active question', activeQuestion.answer);

    if (activeQuestion.answer === -1) {
      //
      dispatch(addFake());
    } else if (activeQuestion.answer !== 0) {
      dispatch(addReal());
    }

    setLp((lp) => lp + 1);

    if (lp < maxLength) {
      console.log('click', lp);
      if (lp) {
        const res = await getQuestion(lp);
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
          <Btn outline onClick={handleToogle()} className={styles.btn} children={'NIE'} value={() => setValue(-1)} />
          <Btn
            outline
            onClick={handleToogle()}
            className={styles.btn}
            children={'NIE WIEM'}
            value={() => setValue(0)}
          />
          <Btn outline onClick={handleToogle()} className={styles.btn} children={'TAK'} value={() => setValue(1)} />
        </div>
        <div className={styles.progress}>
          {lp}/ {maxLength}
          <ProgressBar progress={(100 / maxLength) * lp} />
        </div>
      </div>
    </Layout>
  );
};

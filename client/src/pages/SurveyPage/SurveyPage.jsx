import { useNavigate } from 'react-router-dom';
import { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { paths } from '../../constants/paths';
import styles from './surveyPage.module.scss';
import { Btn, Layout, Text, ProgressBar } from 'components';
import { useGetSurveyIdMutation } from 'reduxStore/services/survey';
import { addFake, addReal, selectList } from 'reduxStore/articles';

export const SurveyPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const list = useSelector(selectList);
  const [getQuestion] = useGetSurveyIdMutation();
  const [activeQuestion, setActiveQuestion] = useState({});
  const [lp, setLp] = useState(0);
  const maxLength = 10;

  const handleToogle = (val) => {
    if (activeQuestion.answer === val) {
      dispatch(addFake());
    } else if (activeQuestion.answer !== 0) {
      dispatch(addReal());
    }

    if (lp < maxLength - 1) {
      setLp((prev) => (prev += 1));
    } else {
      console.log('end');
      navigate(paths.surveyMail);
    }
  };

  const getActiveQuestion = useCallback(async () => {
    setActiveQuestion({});
    if (lp < maxLength) {
      const res = await getQuestion(list[lp]);
      if (res.data) setActiveQuestion(res.data);
    }
  }, [lp]);

  useEffect(() => {
    getActiveQuestion();
  }, [getActiveQuestion]);

  return (
    <Layout>
      <div className={styles.survey}>
        <Text>{activeQuestion?.question}</Text>
        <div className={styles.buttons}>
          <Btn outline onClick={() => handleToogle(-1)} className={styles.btn}>
            Nie
          </Btn>
          <Btn outline onClick={() => handleToogle(0)} className={styles.btn}>
            NIE WIEM
          </Btn>
          <Btn outline onClick={() => handleToogle(1)} className={styles.btn}>
            TAK
          </Btn>
        </div>
        <div className={styles.progress}>
          {lp + 1}/ {maxLength}
          <ProgressBar progress={(100 / maxLength) * (lp + 1)} />
        </div>
      </div>
    </Layout>
  );
};

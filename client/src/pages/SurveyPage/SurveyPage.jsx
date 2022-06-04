import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { paths } from '../../constants/paths';
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

export const SurveyPage = () => {
  const activeQuestion = useSelector(selectActiveQuestion);
  const questions = useSelector(selectQuestions);
  const dispatch = useDispatch();
  const maxPoints = useSelector(selectMaxPoints);
  const points = useSelector(selectPoints);
  const navigate = useNavigate();

  const handleToogle = (answerId) => () => {
    dispatch(toggle(answerId));
    if (questions[activeQuestion + 1]) {
      dispatch(next());
    } else {
      // TODO return to veryfity page

      console.log('finish, maxPoint', maxPoints);
      console.log('point', points);
      navigate(paths.surveyMail, { replace: true });
    }
  };

  return (
    <Layout>
      <div className={styles.survey}>
        <Text>{questions[activeQuestion].content}</Text>
        <ul>
          {questions[activeQuestion].answers.map((answer, index) => (
            <Btn outline key={index} onClick={handleToogle(index)} className={styles.btn}>
              <>
                {answer.content}
                <div
                  className={styles.buttons}
                  onClick={() => {
                    console.log('answer', answer.checked);
                    answer.checked;
                  }}
                  key={index}
                />
              </>
            </Btn>
          ))}
        </ul>
        <div className={styles.progress}>
          {activeQuestion + 1}/ {questions.length}
          <ProgressBar progress={(100 / questions.length) * activeQuestion} />
        </div>
      </div>
    </Layout>
  );
};

import { useSelector, useDispatch } from 'react-redux';

import styles from './surveyPage.module.scss';
import { Btn, Layout } from 'components';
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

  const handleToogle = (answerId) => () => {
    dispatch(toggle(answerId));
    if (questions[activeQuestion + 1]) {
      dispatch(next());
    } else {
      // TODO return to veryfity page
      console.log('finish, maxPoint', maxPoints);
      console.log('point', points);
    }
  };

  return (
    <Layout>
      <div className={styles.survey}>
        <p>
          {activeQuestion + 1}/ {questions.length}
        </p>
        <p>{questions[activeQuestion].content}</p>
        {/* pytania tu wyzej */}
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
      </div>
    </Layout>
  );
};

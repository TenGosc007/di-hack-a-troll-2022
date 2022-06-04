import { useSelector, useDispatch } from 'react-redux';
import ReactEcharts from 'echarts-for-react';

import styles from './surveyPage.module.scss';
import { Layout } from 'components';
import { Chart } from 'components/Chart';
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

  const handleNext = () => {
    if (questions[activeQuestion + 1]) {
      dispatch(next());
    } else {
      // TODO return to veryfity page
      console.log('finish, maxPoint', maxPoints);
      console.log('point', points);
    }
  };

  const handleToogle = (answerId) => () => {
    dispatch(toggle(answerId));
  };

  return (
    <Layout>
      <ReactEcharts option={Chart} className={styles.chart} />
      Survey
      <div>
        <p>
          {activeQuestion + 1}/ {questions.length}
        </p>
        <p>{questions[activeQuestion].content}</p>

        {questions[activeQuestion].answers.map((answer, index) => (
          <button key={index} onClick={handleToogle(index)}>
            <button
              onClick={() => {
                console.log('answer', answer.checked);
                answer.checked;
              }}
              key={index}
            />
            {answer.content}
          </button>
        ))}

        <button onClick={handleNext}>Next</button>
      </div>
    </Layout>
  );
};

import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ClipLoader } from 'react-spinners';

import { paths } from '../../constants/paths';
import styles from './surveyPage.module.scss';
import { Btn, Layout, Text, ProgressBar } from 'components';
import { useGetCategoryQuery } from 'reduxStore/services/categories';
import { addFake, addReal, selectCategoryId } from 'reduxStore/articles';

export const SurveyPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const categoryId = useSelector(selectCategoryId);
  const { data, isLoading } = useGetCategoryQuery(categoryId);
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
      navigate(paths.surveyMail);
    }
  };

  useEffect(() => {
    data?.details[lp] && setActiveQuestion(data.details[lp]);
  }, [data, lp]);

  return (
    <Layout>
      <article className={styles.survey}>
        <div className={styles.question}>
          <Text>{activeQuestion?.question}</Text>
        </div>
        <section className={styles.buttons}>
          <ClipLoader
            css={{
              position: 'absolute',
              top: '35%',
              left: '49%',
              transform: 'translate(-50%, -50%)',
            }}
            color="#11557a"
            size={40}
            loading={isLoading}
          />
          {!isLoading && (
            <>
              <Btn outline onClick={() => handleToogle(-1)} className={styles.btn}>
                Nie
              </Btn>
              <Btn outline onClick={() => handleToogle(0)} className={styles.btn}>
                NIE WIEM
              </Btn>
              <Btn outline onClick={() => handleToogle(1)} className={styles.btn}>
                TAK
              </Btn>
            </>
          )}
        </section>
        <div className={styles.progress}>
          {lp + 1}/ {maxLength}
          <ProgressBar progress={(100 / maxLength) * (lp + 1)} />
        </div>
      </article>
    </Layout>
  );
};

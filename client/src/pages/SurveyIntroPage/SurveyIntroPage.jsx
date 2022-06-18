import { useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

import { objectMapArray } from 'utils';
import { paths } from 'constants/paths';
import styles from './surveyIntroPage.module.scss';
import { Text, Btn, Layout, Input } from 'components';
import { setCategory } from 'reduxStore/articles';
import { useGetCategoriesQuery } from 'reduxStore/services/categories';

export const SurveyIntroPage = () => {
  const { t } = useTranslation(['survey']);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, isLoading } = useGetCategoriesQuery();
  const [link, setLink] = useState('');
  const [chooseCategory, setChooseCategory] = useState();

  const getCategoriesData = useMemo(
    () =>
      data &&
      objectMapArray(data, (val, key) => (
        <Btn
          key={key}
          children={val.name}
          active={chooseCategory?.name === val.name}
          outline
          onClick={() => setChooseCategory(val)}
        />
      )),
    [data, chooseCategory]
  );

  const onChange = (e) => {
    setLink(e.target.value);
  };

  const handleClick = () => {
    dispatch(
      setCategory({
        url: link,
        id: chooseCategory._id,
        list: chooseCategory.list,
      })
    );
    navigate(paths.surveyQuestions, { replace: true });
  };

  return (
    <Layout>
      <div className={styles.container}>
        <Text children={t`survey1.linkLabel`} />
        <Input placeholder={'http://example.com'} type="url" value={link} onChange={onChange} />
        <Text children={t`survey1.categoryLabel`} />
        <div className={styles.container__categories}>
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
          {!isLoading && getCategoriesData.map((element) => element)}
        </div>
        <div className={styles.container__small}>
          <Btn children={t`survey1.button`} type="submit" onClick={handleClick} />
        </div>
      </div>
    </Layout>
  );
};

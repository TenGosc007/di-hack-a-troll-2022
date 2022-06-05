import { useCallback, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { objectMapArray } from 'utils';
import { paths } from 'constants/paths';
import styles from './surveyIntroPage.module.scss';
import { Text, Btn, Layout, Input } from 'components';
import { setCategory } from 'reduxStore/articles';
import { useGetCategoriesMutation } from 'reduxStore/services/categories';

export const SurveyIntroPage = () => {
  const { t } = useTranslation(['survey']);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [getCategories] = useGetCategoriesMutation();
  const [link, setLink] = useState('');
  const [categories, setCategories] = useState([]);
  const [chooseCategory, setChooseCategory] = useState();

  const getCategoriesData = useCallback(async () => {
    const res = await getCategories();
    if (res.data) {
      setCategories(
        objectMapArray(res.data, (val, key) => (
          <Btn key={key} children={val.name} outline onClick={() => setChooseCategory(val)} />
        ))
      );
    }
  }, []);

  useEffect(() => {
    getCategoriesData();
  }, [getCategoriesData]);

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
        <div className={styles.container__categories}>{categories.map((element) => element)}</div>
        <div className={styles.container__small}>
          <Btn children={t`survey1.button`} type="submit" onClick={handleClick} />
        </div>
      </div>
    </Layout>
  );
};

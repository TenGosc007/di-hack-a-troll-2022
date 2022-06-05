import { Layout, LinkCard, SearchBar } from 'components';
import { paths } from 'constants/paths';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetAllArticlesMutation } from 'reduxStore/services/articles';
import { objectMapArray } from 'utils';

import styles from './linksBase.module.scss';

const links = [
  { url: 'www.facebook.com', categories: 'CELEBRYCI', results: 1.5 },
  { url: 'www.facebook.com/fake', categories: 'ŚWIAT', results: 2.5 },
  { url: 'www.facebook.com/fake-nesy', categories: 'ZWIERZĘTA', results: 5 },
  { url: 'www.facebook.com/fake-nesy', categories: 'ZWIERZĘTA', results: 4 },
];

export const LinksBase = () => {
  // const [links] = useGetAllArticlesMutation();
  const [data, setData] = useState([...links]);
  // const [data, setData] = useGetAllArticlesMutation();
  const [sortType, setSortType] = useState();
  const [query, setQuery] = useState('');

  const navigate = useNavigate();

  console.log(data);

  let mainSearchRegex = new RegExp(query, 'i');

  // const getArticleData = useCallback(async () => {
  //   setData(
  //     objectMapArray((val, key) => (
  //       <p>
  //         {key}: {val}
  //       </p>
  //     ))
  //   );
  // }, [links]);

  // useEffect(() => {
  //   getArticleData();
  // }, [getArticleData]);

  useEffect(() => {
    const sortArray = (type) => {
      const types = {
        max: 'results',
        min: 'results',
      };
      const sortProperty = types[type];
      let sorted;
      if (sortType === 'max') sorted = [...links].sort((a, b) => a[sortProperty] - b[sortProperty]);
      else sorted = [...links].sort((a, b) => b[sortProperty] - a[sortProperty]);
      setData(sorted);
    };
    sortArray(sortType);
  }, [sortType]);

  useEffect(() => {
    filterSearch();
  }, [query]);

  const navigateToLinkData = () => {
    navigate(paths.linkData);
  };

  const filterSearch = () => {
    if (query.length > 0) {
      let newSearch = [...links].filter((link) => mainSearchRegex.test(link.link));
      setData(newSearch);
    } else if (query.length === 0) {
      setData([...links]);
    }
  };

  return (
    <Layout>
      <div className={styles.linksBase}>
        <h1>Baza podejrzanych artykułów:</h1>
        <div className={styles.inputs}>
          <SearchBar query={query} setQuery={setQuery} />
          <select onChange={(e) => setSortType(e.target.value)} className={styles.sorting}>
            <option value="" hidden>
              Sortuj wg...
            </option>
            <option value="max">od najmniej zaufanych</option>
            <option value="min">od najbardziej zaufanych</option>
          </select>
        </div>
        <div className={styles.layout}>
          <p>Link</p>
          <p>Tagi</p>
          <p>Fejk</p>
        </div>

        {data.map((project) => (
          <div key={project.id}>
            <LinkCard
              score={project.results}
              fakelink={project.url}
              categories={project.categories}
              onClick={navigateToLinkData}
            />
          </div>
        ))}
      </div>
    </Layout>
  );
};

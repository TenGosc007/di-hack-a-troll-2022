import { Layout, LinkCard, SearchBar } from 'components';
import { paths } from 'constants/paths';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetAllArticlesMutation } from 'reduxStore/services/articles';

import styles from './linksBase.module.scss';

export const LinksBase = () => {
  const [getlinks] = useGetAllArticlesMutation();
  const [linkdata, setData] = useState([]);

  const [sortType, setSortType] = useState();
  const [query, setQuery] = useState('');

  const navigate = useNavigate();

  let mainSearchRegex = new RegExp(query, 'i');

  const getLinksData = useCallback(async () => {
    const res = await getlinks();
    if (res.data) {
      setData(res.data);
    }
  }, []);

  useEffect(() => {
    getLinksData();
  }, [getLinksData]);

  useEffect(() => {
    const sortArray = (type) => {
      const types = {
        max: 'results',
        min: 'results',
      };
      const sortProperty = types[type];
      let sorted;
      if (sortType === 'max') sorted = [...linkdata].sort((a, b) => a[sortProperty] - b[sortProperty]);
      else sorted = [...linkdata].sort((a, b) => b[sortProperty] - a[sortProperty]);
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
      let newSearch = [...linkdata].filter((link) => mainSearchRegex.test(link.link));
      setData(newSearch);
    } else if (query.length === 0) {
      setData([...linkdata]);
      console.log(linkdata);
    }
  };

  const resultsScale = (project) => {
    const sum = project.reduce((a, b) => a + b, 0);
    const avg = sum / project.length || 0;

    if (avg == 0) {
      return 5;
    }
    if (avg == 10) {
      return 4.5;
    }
    if (avg == 20) {
      return 4;
    }
    if (avg == 30) {
      return 3.5;
    }
    if (avg == 40) {
      return 3;
    }
    if (avg == 50) {
      return 2.5;
    }
    if (avg <= 60) {
      return 2;
    }
    if (avg == 70) {
      return 1.5;
    }
    if (avg == 80) {
      return 1;
    }
    if (avg == 90) {
      return 0.5;
    }
    if (avg == 100) {
      return 0;
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

        {linkdata.map((project) => (
          <div key={project.id}>
            <LinkCard
              score={resultsScale(project.results)}
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

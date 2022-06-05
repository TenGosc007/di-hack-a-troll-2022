import { Layout, LinkCard, SearchBar } from 'components';
import { paths } from 'constants/paths';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './linksBase.module.scss';

const links = [
  { link: 'www.facebook.com', categories: 'CELEBRYCI', score: 1.5 },
  { link: 'www.facebook.com/fake', categories: 'ŚWIAT', score: 2.5 },
  { link: 'www.facebook.com/fake-nesy', categories: 'ZWIERZĘTA', score: 5 },
  { link: 'www.facebook.com/fake-nesy', categories: 'ZWIERZĘTA', score: 4 },
];

export const LinksBase = () => {
  const [data, setData] = useState([...links]);
  const [sortType, setSortType] = useState();
  const [query, setQuery] = useState('');

  const navigate = useNavigate();

  let mainSearchRegex = new RegExp(query, 'i');

  useEffect(() => {
    const sortArray = (type) => {
      const types = {
        max: 'score',
        min: 'score',
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
              score={project.score}
              fakelink={project.link}
              categories={project.categories}
              onClick={navigateToLinkData}
            />
          </div>
        ))}
      </div>
    </Layout>
  );
};

import { Input, Layout } from 'components';
import { LinkCard } from 'components';
import { paths } from 'constants/paths';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './linksBase.module.scss';

const links = [
  { link: 'www.facebook.com', categories: 'CELEBRYCI', score: 3.5 },
  { link: 'www.facebook.com/fake', categories: 'ŚWIAT', score: 2.5 },
  { link: 'www.facebook.com/fake-nesy', categories: 'ZWIERZĘTA', score: 4 },
  { link: 'www.facebook.com/fake-nesy', categories: 'ZWIERZĘTA', score: 4 },
];

export const LinksBase = () => {
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState();

  const navigate = useNavigate();

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

  const navigateToLinkData = () => {
    navigate(paths.linkData);
  };

  return (
    <Layout>
      <div className={styles.linksBase}>
        <h1>Baza podejrzanych artykułów:</h1>
        <div className={styles.inputs}>
          <Input search />
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

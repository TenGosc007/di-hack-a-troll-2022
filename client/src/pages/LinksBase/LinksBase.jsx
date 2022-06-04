import { Input, Layout } from 'components';
<<<<<<< HEAD
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

=======
import { LinkCard } from 'components/LinkCard';
import styles from './linksBase.module.scss';

export const LinksBase = () => {
>>>>>>> 3813256f8d478014ac267a1e45984b745c747645
  return (
    <Layout>
      <div className={styles.linksBase}>
        <h1>Baza podejrzanych artykułów:</h1>
        <div className={styles.inputs}>
          <Input search />
<<<<<<< HEAD
          <select onChange={(e) => setSortType(e.target.value)} className={styles.sorting}>
            <option value="" hidden>
              Sortuj wg...
            </option>
            <option value="max">od najmniej zaufanych</option>
            <option value="min">od najbardziej zaufanych</option>
          </select>
=======
          <Input search />
>>>>>>> 3813256f8d478014ac267a1e45984b745c747645
        </div>
        <div className={styles.layout}>
          <p>Link</p>
          <p>Tagi</p>
          <p>Fejk</p>
        </div>
<<<<<<< HEAD

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
=======
        <LinkCard score={3.5} fakelink={'www.facebook.com'} categories={'ŚWIAT, CELEBRYCI'} />
        <LinkCard score={5} fakelink={'www.facebook.com/DDDDDD'} categories={'ŚWIAT, CELEBRYCI'} />
        <LinkCard score={2.5} fakelink={'www.facebook.com/GGGG'} categories={'ŚWIAT, CELEBRYCI'} />
        <LinkCard score={1.5} fakelink={'www.facebook.com/VCE'} categories={'ŚWIAT, CELEBRYCI'} />
>>>>>>> 3813256f8d478014ac267a1e45984b745c747645
      </div>
    </Layout>
  );
};

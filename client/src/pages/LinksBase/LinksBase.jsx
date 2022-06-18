import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

import styles from './linksBase.module.scss';
import { paths } from 'constants/paths';
import { Layout, LinkCard, SearchBar } from 'components';
import { useGetAllArticlesQuery } from 'reduxStore/services/articles';

export const LinksBase = () => {
  const { data, isLoading } = useGetAllArticlesQuery();
  const navigate = useNavigate();
  const [linkdata, setLinkdata] = useState(data || []);
  const [query, setQuery] = useState('');

  useEffect(() => {
    data && setLinkdata(data);
  }, [data]);

  useEffect(() => {
    if (query.length > 1) {
      const mainSearchRegex = new RegExp(query, 'i');
      const newSearch = linkdata.filter(({ url }) => mainSearchRegex.test(url));
      setLinkdata(newSearch);
    } else {
      data && setLinkdata(data);
    }
  }, [query]);

  const handleSelect = ({ target: { value } }) => {
    const sortedData = [...data];

    if (value > 0) sortedData.sort((a, b) => resultsScale(b.results) - resultsScale(a.results));
    if (value < 0) sortedData.sort((a, b) => resultsScale(a.results) - resultsScale(b.results));

    setLinkdata(sortedData);
  };

  const navigateToStatsPage = () => {
    navigate(paths.statsPage);
  };

  const resultsScale = (project) => {
    const sum = project.reduce((a, b) => a + b, 0);
    const avg = sum / project.length || 0;
    const result = (100 - avg) / 20;

    return result > 0.5 ? result : 0.5;
  };

  const mapCategories = (categories) => {
    const unique = [...new Set(categories.map((a) => a.name))];

    return <span>{unique.join(', ')} </span>;
  };

  return (
    <Layout>
      <article className={styles.linksBase}>
        <h1>Baza podejrzanych artykułów:</h1>
        <section className={styles.inputs}>
          <SearchBar query={query} setQuery={setQuery} />
          <select onChange={handleSelect} className={styles.sorting}>
            <option value="" hidden>
              Sortuj wg...
            </option>
            <option value={0}>domyślnie</option>
            <option value={-1}>od najmniej zaufanych</option>
            <option value={1}>od najbardziej zaufanych</option>
          </select>
        </section>

        <div className={styles.layout}>
          <p>Link</p>
          <p>Tagi</p>
          <p>Fejk</p>
        </div>

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

        {!isLoading &&
          linkdata.map((project) => (
            <div key={project._id}>
              <LinkCard
                score={resultsScale(project.results)}
                fakelink={project.url}
                categories={mapCategories(project.categories)}
                onClick={navigateToStatsPage}
              />
            </div>
          ))}
      </article>
    </Layout>
  );
};

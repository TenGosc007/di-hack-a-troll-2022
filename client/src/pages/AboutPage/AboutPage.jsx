import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { objectMapArray } from 'utils';
import styles from './aboutPage.module.scss';
import { useGetPokemonByNameQuery } from 'reduxStore/services/pokemon';
import { selectCurrentUser } from 'reduxStore/auth';
import { Login } from './Login';
import { useGetUserDataMutation } from 'reduxStore/services/auth';

export const AboutPage = () => {
  const { t } = useTranslation(['about']);
  const user = useSelector(selectCurrentUser);
  const [userData, setUserData] = useState([]);
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur');
  const [getUser] = useGetUserDataMutation();

  const getUserData = useCallback(async () => {
    setUserData('');
    if (user) {
      const res = await getUser(user);
      if (res.data)
        setUserData(
          objectMapArray(res.data, (val, key) => (
            <p>
              {key}: {val}
            </p>
          ))
        );
    }
  }, [user, getUser]);

  useEffect(() => {
    getUserData();
  }, [getUserData]);

  return (
    <main className={styles.about}>
      <h1>{t`about.title`}</h1>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </>
      ) : null}
      {userData.length ? userData.map((element) => element) : <Login />}
    </main>
  );
};

import { objectMapArray } from 'utils';

export const paths = {
  home: '/',
  about: '/about',
  contact: '/contact',
  survey: '/survey',
};

export const links = objectMapArray(paths, (value, key, index) => ({
  id: index,
  name: key,
  path: value,
}));

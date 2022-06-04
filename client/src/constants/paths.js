import { objectMapArray } from 'utils';

export const paths = {
  home: '/',
  about: '/about',
  contact: '/contact',
  survey: '/survey',
  linksBase: "/links-base"
};

export const links = objectMapArray(paths, (value, key, index) => ({
  id: index,
  name: key,
  path: value,
}));

import { objectMapArray } from 'utils';

export const paths = {
  home: '/',
  about: '/about',
  contact: '/contact',
  survey: '/survey',
  surveyQuestions: '/survey/questions',
  surveyMail: '/survey/mail',
  surveyInfo: '/survey/info',
};

export const links = objectMapArray(paths, (value, key, index) => ({
  id: index,
  name: key,
  path: value,
}));

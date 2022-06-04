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

const exclude = ['/contact', '/survey/questions', '/survey/mail', '/survey/info'];

export const links = objectMapArray(paths, (value, key, index) => ({
  id: index,
  name: key,
  path: value,
})).filter(({ path }) => !exclude.find((ex) => ex === path));

import { objectMapArray } from 'utils';

export const paths = {
  home: '/',
  about: '/about',
  contact: '/contact',
  survey: '/survey',
  surveyQuestions: '/survey/questions',
  surveyMail: '/survey/mail',
  surveyInfo: '/survey/info',

  linksBase: '/links-base',
  linkData: '/link-data',
  statsPage: '/statistics'
};

const exclude = ['/about', '/contact', '/survey/questions', '/survey/mail', '/survey/info', '/link-data', '/statistics'];

export const links = objectMapArray(paths, (value, key, index) => ({
  id: index,
  name: key,
  path: value,
})).filter(({ path }) => !exclude.find((ex) => ex === path));

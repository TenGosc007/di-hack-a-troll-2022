import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { paths } from 'constants/paths';
import { Loader } from 'components';
import {
  HomePage,
  NotFoundPage,
  SurveyIntroPage,
  SurveyPage,
  SurveyMailPage,
  SurveyInfoPage,
  LinksBase,
  StatsPage,
} from 'pages';

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={paths.home} element={<HomePage />} />
        <Route path={paths.survey} element={<SurveyIntroPage />} />
        <Route path={paths.surveyQuestions} element={<SurveyPage />} />
        <Route path={paths.surveyMail} element={<SurveyMailPage />} />
        <Route path={paths.surveyInfo} element={<SurveyInfoPage />} />
        <Route path={paths.linksBase} element={<LinksBase />} />
        <Route path={paths.statsPage} element={<StatsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

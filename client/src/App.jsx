import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { paths } from 'constants/paths';
import { Loader } from 'components';
import { AboutPage, HomePage, NotFoundPage, SurveyIntroPage, SurveyPage, SurveyMailPage, SurveyInfoPage } from 'pages';

export const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path={paths.home} element={<HomePage />} />
          <Route path={paths.about} element={<AboutPage />} />
          <Route path={paths.survey} element={<SurveyIntroPage />} />
          <Route path={paths.surveyQuestions} element={<SurveyPage />} />
          <Route path={paths.surveyMail} element={<SurveyMailPage />} />
          <Route path={paths.surveyInfo} element={<SurveyInfoPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
};

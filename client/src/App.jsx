import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { paths } from 'constants/paths';
import { Header, Loader } from 'components';
import { AboutPage, HomePage, NotFoundPage, SurveyPage } from 'pages';

export const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path={paths.home} element={<HomePage />} />
          <Route path={paths.about} element={<AboutPage />} />
          <Route path={paths.survey} element={<SurveyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
};

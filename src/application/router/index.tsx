import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';

import Header from '~/application/components/Header';
import Footer from '~/application/components/Footer';
import LoaderAnimation from '~/application/components/LoaderAnimation';

const CollectionsPopular = lazy(() => import('collections/Popular'));
const DetailsPage = lazy(() => import('details/Details'));
const FavoriteList = lazy(() => import('favorites/FavoriteList'));

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return null;
};

const Routes = (): JSX.Element => {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Suspense fallback={<LoaderAnimation />}>
        <Switch>
          <Route exact path='/' component={CollectionsPopular} />
          <Route exact path='/details/:mediaId' component={DetailsPage} />
          <Route exact path='/favorites' component={FavoriteList} />
        </Switch>
      </Suspense>
      <Footer />
    </Router>
  );
};

export default Routes;

/* eslint-disable max-len */
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import path from '../enums/path';
import MainLayout from '../layouts/MainLayout/MainLayout';
import Search from '../pages/Search/Search';

const Fallback = React.lazy(() => import('../components/Fallback/Fallback'));
const MovieDetails = React.lazy(() => import('../pages/MovieDetails'));
const Home = React.lazy(() => import('../pages/Home/Home'));

function AppRoutes() {
  return (
    <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path={path.home} element={(
              <Suspense fallback={<Fallback />}>
                <Home />
              </Suspense>
            )}/>
            <Route path={path.details} element={(
              <Suspense fallback={<Fallback />}>
                <MovieDetails />
              </Suspense>
              )}/>
            <Route path={path.search} element={(
              <Suspense fallback={<Fallback />}>
                <Search />
             </Suspense>
            )}/>
          </Routes>
        </MainLayout>
    </BrowserRouter>
  );
}

export default AppRoutes;

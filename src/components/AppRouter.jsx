import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './router/router';
import { AuthContext } from '../context';
import { useContext } from 'react';

const AppRouter = () => {
  const { isAuth } = useContext(AuthContext);
  return isAuth ? (
    <Routes>
      {privateRoutes.map((route, index) => (
        <Route element={route.element} path={route.path} key={index + 1} />
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route, index) => (
        <Route element={route.element} path={route.path} key={index + 1} />
      ))}
    </Routes>
  );
};

export default AppRouter;

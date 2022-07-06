import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/Home/Home';
import Login from '../pages/Login/Login';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<HomePage />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

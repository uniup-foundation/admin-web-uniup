import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from '../Components/Global/ProtectedRoute';
import AddBranch from '../pages/Branchs/AddBranch';
import ListBranch from '../pages/Branchs/ListBranch';
import Callback from '../pages/Callback';
import Home from '../pages/Home';
import { NotFoundPage } from '../pages/NotFound';
import Profile from '../pages/Profile';

export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute component={Home} />} />
        <Route
          path="/branchs"
          element={<ProtectedRoute component={ListBranch} />}
        />
        <Route
          path="/branchs/new"
          element={<ProtectedRoute component={AddBranch} />}
        />
        <Route
          path="/profile"
          element={<ProtectedRoute component={Profile} />}
        />
        <Route path="/callback" element={<Callback />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

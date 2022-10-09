import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ListBranch from './pages/Branchs/ListBranch';
import AddBranch from './pages/Branchs/AddBranch';
import { NotFoundPage } from './pages/NotFound';
import { ProtectedRoute } from './Components/Global/ProtectedRoute';
import { PageLoader } from './Components/Global/PageLoader';
import Callback from './pages/Callback';

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div>
        <PageLoader />
      </div>
    );
  }

  return (
    <div className="App">
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
          <Route path="/callback" element={<Callback />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

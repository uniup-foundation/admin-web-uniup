import React from 'react';
import './App.css';
import { useAuth0 } from '@auth0/auth0-react';

import { PageLoader } from './components/Global/PageLoader';
import Main from './Routes/Main';

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
      <Main />
    </div>
  );
}

export default App;

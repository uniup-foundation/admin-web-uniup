import React from 'react';
import './App.css';
import { useAuth0 } from '@auth0/auth0-react';

import { PageLoader } from './components/Global/PageLoader';
import Main from './routes/Main';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import jwt_decode, { JwtPayload } from 'jwt-decode';
import { useAuth } from './context/AuthContext';
import { LOCAL_STORAGE } from './config';

const queryClient = new QueryClient();

function App() {
  const { isLoading, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const { setPermissions } = useAuth();
  React.useEffect(() => {
    const getPermissions = async () => {
      if (isAuthenticated) {
        const token = await getAccessTokenSilently();
        const decoded = jwt_decode<JwtPayload & { permissions: string[] }>(
          token,
        );
        setPermissions(decoded.permissions);
        localStorage.setItem(
          LOCAL_STORAGE.PERMISSIONS_LIST,
          JSON.stringify(decoded.permissions),
        );
      }
    };
    getPermissions();
  }, [isAuthenticated]);

  if (isLoading) {
    return (
      <div>
        <PageLoader />
      </div>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Main />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;

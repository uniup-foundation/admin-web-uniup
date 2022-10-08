import { useNavigate } from 'react-router-dom';
import React from 'react'
import { AppState, Auth0Provider } from '@auth0/auth0-react';
interface IProps {
  children: JSX.Element;
}

const Auth0ProviderWithHistory = ({ children }: IProps) => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

  let navigate = useNavigate();

  const onRedirectCallback = (appState: AppState | undefined) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain ?? ''}
      clientId={clientId ?? ''}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;

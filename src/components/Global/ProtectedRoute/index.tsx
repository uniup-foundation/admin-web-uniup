import { withAuthenticationRequired } from '@auth0/auth0-react';
import React, { ComponentType } from 'react';
import { LOCAL_STORAGE } from '../../../config';

import { PageLoader } from '../PageLoader';

interface ProtectedRouteProps {
  component: ComponentType;
  permission?: string;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  component,
  permission,
}) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <PageLoader />,
    claimCheck: () => {
      const permissions = JSON.parse(
        localStorage.getItem(LOCAL_STORAGE.PERMISSIONS_LIST) ?? '[]',
      );
      return permission ? permissions.includes(permission) : true;
    },
  });

  return <Component />;
};

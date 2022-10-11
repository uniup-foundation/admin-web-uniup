import React from 'react';
import { useAuth } from '../context/AuthContext';

const withPermission = (Component: any, permission: string) => {
  const ComponentParent = (props: any) => {
    const { permissions } = useAuth();

    const hasPermission = permissions.includes(permission);
    return hasPermission ? <Component {...props} /> : <></>;
  };

  return ComponentParent;
};

export default withPermission;

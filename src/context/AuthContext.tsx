import React, { createContext, useContext, useState } from 'react';

export interface AuthContextInterface {
  permissions: Array<string>;
  setPermissions: React.Dispatch<React.SetStateAction<string[]>>;
}
export const authContextDefaults: AuthContextInterface = {
  permissions: [],
  setPermissions: () => [],
};
const authContext = createContext<AuthContextInterface>(authContextDefaults);

interface IProps {
  children: JSX.Element;
}
export const ProviderAuth = ({ children }: IProps) => {
  const [permissions, setPermissions] = useState<Array<string>>([]);

  const providerValues = {
    permissions,
    setPermissions,
  };

  return (
    <authContext.Provider value={providerValues}>
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => useContext(authContext);

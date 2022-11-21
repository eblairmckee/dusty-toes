import React, {
  useState,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
} from 'react';

export const AuthenticatedUserContext = createContext({
  setUser: undefined,
  user: null,
});

export const AuthenticatedUserProvider = ({ children }) => {
  const [user, setUser] = useState<string>(null);

  return (
    <AuthenticatedUserContext.Provider value={{ user, setUser }}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};

export const useAuthenticatedUserContext = () => {
  const context = useContext(AuthenticatedUserContext);
  return context;
};

import React, { FC, useState } from "react";

interface AuthContextData {
  userAuth: boolean;
  loginF: (callback?: () => void) => void;
  logoutF: (callback?: () => void) => void;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthContext = React.createContext({} as AuthContextData);

export const AuthContextProvider: FC<AuthProviderProps> = ({ children }) => {
  const [isUserAuth, setIsUserAuth] = useState(false);

  const logIn = (callback?: () => void) => {
    setIsUserAuth(true);
    // callback();
  };
  const logOut = (callback?: () => void) => {
    setIsUserAuth(false);
    // callback();
  };

  return (
    <AuthContext.Provider
      value={{ userAuth: isUserAuth, loginF: logIn, logoutF: logOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

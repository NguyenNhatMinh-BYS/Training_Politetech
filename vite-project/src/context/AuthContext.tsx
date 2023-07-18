import { ReactNode, createContext, useState } from "react";
interface AuthContextType {
  auth: any;
  setAuth: (auth: any) => void;
}

const AuthContext = createContext<AuthContextType>({
  auth: {},
  setAuth: () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}
const AuthProvider = ({ children }: AuthProviderProps) => {
  const [auth, setAuth] = useState({});
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };

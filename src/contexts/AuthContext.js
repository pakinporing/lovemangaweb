const { createContext } = require('react');

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  return (
    <AuthContext.Provider value={'Auth Context'}>
      {children}
    </AuthContext.Provider>
  );
}

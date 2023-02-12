import * as authApi from '../apis/auth-api';
import { getAccessToken, setAccessToken } from '../utils/local-storage';
const { createContext, useState } = require('react');

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authenticatedUser, setAuthenticatedUser] = useState(
    getAccessToken() ? true : null
  );

  const login = async (email, password) => {
    const res = await authApi.login({ email, password });
    setAccessToken(res.data.accessToken);
    setAuthenticatedUser(true);
  };

  return (
    <AuthContext.Provider
      value={{ authenticatedUser, login, setAuthenticatedUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}

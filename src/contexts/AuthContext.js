import jwtDecode from 'jwt-decode';

import axios from 'axios';
import * as authApi from '../apis/auth-api';
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken
} from '../utils/local-storage';
const { createContext, useState, useEffect } = require('react');

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authenticatedUser, setAuthenticatedUser] = useState(
    getAccessToken() ? true : null
  );

  useEffect(() => {
    const fetchAuthUser = async () => {
      try {
        const res = await axios.get('http://localhost:8888/auth/me');
        setAuthenticatedUser(res.data.user);
      } catch (err) {
        removeAccessToken();
      }
    };
    if (getAccessToken()) {
      fetchAuthUser();
    }
  }, []);

  const login = async (email, password) => {
    const res = await authApi.login({ email, password });
    setAccessToken(res.data.accessToken);
    setAuthenticatedUser(jwtDecode(res.data.accessToken));
  };

  return (
    <AuthContext.Provider
      value={{ authenticatedUser, login, setAuthenticatedUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}

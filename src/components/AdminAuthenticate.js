import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import jwtDecode from 'jwt-decode';

export default function AdminAuthenticate({ children }) {
  const { authenticatedUser } = useAuth();
  const payload = jwtDecode(localStorage.getItem('ACCESS_TOKEN'));

  if (payload.role !== 'ADMIN') {
    return <Navigate to={'/'} />;
  }
  return children;
}

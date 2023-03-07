import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export default function AdminAuthenticate({ children }) {
  const { authenticatedUser } = useAuth();

  if (authenticatedUser.role !== 'ADMIN') {
    return <Navigate to={'/'} />;
  }
  return children;
}

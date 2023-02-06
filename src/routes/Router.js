import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import AllMangaPage from '../pages/AllMangaPage';
import MangaPage from '../pages/MangaPage';
import ProfilePage from '../pages/ProfilePage';
import ReadPage from '../pages/ReadPage';
import RegisterPage from '../pages/RegisterPage';
import SearchPage from '../pages/SearchPage';
import HomePage from '../pages/HomePage';
import FavoritePage from '../pages/FavoritePage';

const router = createBrowserRouter([
  {
    path: '/loginpage',
    element: <LoginPage />
  },
  {
    path: '/allmangapage',
    element: <AllMangaPage />
  },
  {
    path: '/mangapage/:mangaId',
    element: <MangaPage />
  },
  {
    path: '/profilepage',
    element: <ProfilePage />
  },
  {
    path: '/read/:mangaId',
    element: <ReadPage />
  },
  {
    path: '/registerpage',
    element: <RegisterPage />
  },
  {
    path: '/searchpage',
    element: <SearchPage />
  },
  {
    path: '/',
    element: <HomePage />
  },
  { path: '/favoritpage', element: <FavoritePage /> }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}

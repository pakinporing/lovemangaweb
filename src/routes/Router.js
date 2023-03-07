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
import RedirectIfAuthenticate from '../components/RedirectIfAuthenticate';
import AdminPage from '../pages/AdminPage';
import UpMangaPage from '../pages/UpMangaPage';
import UpChapterPage from '../pages/UpChapterPage';
import CenterUpMangaPage from '../pages/CenterUpMangaPage';
import AdminAuthenticate from '../components/AdminAuthenticate';

const router = createBrowserRouter([
  {
    path: '/loginpage',
    element: (
      <RedirectIfAuthenticate>
        <LoginPage />
      </RedirectIfAuthenticate>
    )
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
    path: '/adminpage',
    element: (
      <AdminAuthenticate>
        <AdminPage />
      </AdminAuthenticate>
    )
  },
  {
    path: '/upmangapage',
    element: (
      <AdminAuthenticate>
        <UpMangaPage />
      </AdminAuthenticate>
    )
  },
  {
    path: '/centerupmangapage/:mangaId',
    element: (
      <AdminAuthenticate>
        <CenterUpMangaPage />
      </AdminAuthenticate>
    )
  },
  {
    path: '/upchapterpage/:mangaId',
    element: (
      <AdminAuthenticate>
        <UpChapterPage />
      </AdminAuthenticate>
    )
  },
  {
    path: '/',
    element: <HomePage />
  },
  { path: '/favoritpage', element: <FavoritePage /> },
  { path: '/favoritpage', element: <FavoritePage /> }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}

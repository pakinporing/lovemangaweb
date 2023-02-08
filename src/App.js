import { ToastContainer } from 'react-toastify';
import Spinner from './components/Spinner';
import useLoading from './hooks/useLoading';

import Router from './routes/Router';

function App() {
  const { loading } = useLoading();
  return (
    <>
      {loading && <Spinner />}
      <Router />
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;

import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import AppProvider from '@/utils/context';
import { basePath } from '@/services/constants';

import 'react-toastify/dist/ReactToastify.css';
import '@/styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Nefesh</title>
      </Head>
      <AppProvider>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <Component {...pageProps} />
      </AppProvider>
    </>
  );
}

export default MyApp;

import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import AppProvider from '@/utils/context';

import 'react-toastify/dist/ReactToastify.css';
import '@/styles/globals.css';
import Header from '@/components/Header/header';
import { basePath } from '@/services/constants';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Nefesh</title>
        <link rel="icon" href={`${basePath}/nefesh-icon.jpg`} />
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
        <main className="mainContainer">
          <Header />
          <Component {...pageProps} />
        </main>
      </AppProvider>
    </>
  );
}

export default MyApp;

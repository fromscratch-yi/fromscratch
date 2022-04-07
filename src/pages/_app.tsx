import 'styles/globals.scss';
import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';
import Meta from '@/components/meta';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Meta />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </>
  );
}

export default MyApp;

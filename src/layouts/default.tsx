import { motion } from 'framer-motion';
import { NextPage } from 'next';
import Head from 'next/head';
import Footer from '@/components/footer';
import Header from '@/components/header';
import SnsList from '@/components/snsList';
import { useLocale } from 'hooks/useLocale';
import styles from 'styles/layouts/Default.module.scss';
type Props = {
  children?: React.ReactNode;
};
const Layout: NextPage<Props> = ({ children }: Props) => {
  const { locale, t } = useLocale();
  return (
    <div>
      <motion.div
        initial={{ y: '100vh' }}
        animate={{ y: 0 }}
        exit={{ y: '100vh' }}
        onAnimationStart={() => {
          requestAnimationFrame(() => {
            const body: HTMLElement | null = document.querySelector('body');
            if (body) {
              body.style.position = 'static';
            }
          });
        }}
        transition={{ duration: 0.8 }}
        className={`${styles.layout_wrap} layout_motion`}
      >
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="" />
        </Head>
        <Header locale={locale}></Header>
        <main>{children}</main>
        <div className={styles.footer_contents}>
          <SnsList />
          <Footer />
        </div>
      </motion.div>
    </div>
  );
};
export default Layout;

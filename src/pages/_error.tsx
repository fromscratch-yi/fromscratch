import type { NextPage, NextPageContext } from 'next';
import Link from 'next/link';
import LogoImage from '@/components/logoImage';
import { useLocale } from 'hooks/useLocale';
import Layout from 'layouts/default';
import styles from 'styles/pages/Error.module.scss';

interface Props {
  statusCode: number;
  errorMessage: string;
}
const Error: NextPage<Props> = ({ statusCode, errorMessage }) => {
  const { locale, t } = useLocale();
  return (
    <Layout>
      <div className={styles.error_wrap}>
        <div className={styles.error_inner}>
          <p className={styles.img_wrap}>
            <LogoImage isBound={true} />
          </p>
          <h1>
            <span className={styles.status_cd}>{statusCode}</span>
            <span className={styles.status_msg}>{errorMessage}</span>
          </h1>
          <Link href="/" passHref>
            <a className={styles.back_home}>{t.backHome}</a>
          </Link>
        </div>
      </div>
    </Layout>
  );
};
Error.getInitialProps = async ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode ?? 500 : 404;
  const errorMessage = statusCode == 404 ? 'Page Not Found.' : 'Internal Server Error.';
  return { statusCode, errorMessage };
};

export default Error;

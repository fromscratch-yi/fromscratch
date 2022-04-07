import styles from 'styles/components/Footer.module.scss';
const Footer = (): JSX.Element => {
  const thisYear: number = new Date().getFullYear();
  return (
    <footer className={styles.default_footer}>
      <small>&copy;{thisYear} From Scratch All Rights Reserved</small>
    </footer>
  );
};
export default Footer;

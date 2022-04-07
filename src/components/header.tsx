import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import ActiveLink from '@/components/activeLink';
import LogoImage from '@/components/logoImage';
import styles from 'styles/components/Header.module.scss';
interface Props {
  locale?: string;
}
const Header = (props: Props): JSX.Element => {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const menuWrapClassName = isActive ? `${styles.active} ${styles.menu_wrap}` : styles.menu_wrap;
  const onMenuToggle = () => {
    setIsActive(!isActive);
    requestAnimationFrame(() => {
      const layout: HTMLElement | null = document.querySelector('.layout_motion');
      if (layout) {
        layout.style.transform = 'visible';
      }
      const body: HTMLElement | null = document.querySelector('body');
      const header: HTMLElement | null = document.querySelector('header');
      if (body && header) {
        body.style.position = isActive ? 'static' : 'fixed';
        if (isActive) {
          setTimeout(() => {
            header.style.zIndex = '45';
          }, 300);
        } else {
          header.style.zIndex = '999';
        }
      }
    });
  };
  const localeElement = router.locales
    ? router.locales.map((locale: string, idx: number): JSX.Element => {
        return (
          <div className={styles.lang_link} key={locale}>
            <Link href={router.pathname} locale={locale} passHref>
              <a className={locale == props.locale ? styles.current : ''} onClick={onMenuToggle}>
                {locale}
              </a>
            </Link>
          </div>
        );
      })
    : '';
  return (
    <header className={styles.default_header}>
      <div className={styles.header_inner}>
        <div className={styles.logo_box}>
          <Link href="/" passHref>
            <a className={styles.header_logo}>
              <LogoImage />
            </a>
          </Link>
          <h1>
            <small>Yuichi Ishiyama</small>
            <span>From Scratch</span>
          </h1>
        </div>
        <div className={menuWrapClassName}>
          <div className={styles.menu_icon} onClick={onMenuToggle}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <nav className={styles.menu_inner}>
            <ul>
              <li className={styles.top_link}>
                <Link href="/" passHref>
                  <a>
                    <LogoImage isBound={true} width={45} height={45} />
                  </a>
                </Link>
              </li>
              <li className={styles.page_link_wrap}>
                <ActiveLink href="/about" activeClassName={styles.current} passHref>
                  <a>
                    <span className={styles.initials}>A</span>bout
                  </a>
                </ActiveLink>
              </li>
              <li className={styles.page_link_wrap}>
                <ActiveLink href="/work" activeClassName={styles.current} passHref>
                  <a>
                    <span className={styles.initials}>W</span>ork
                  </a>
                </ActiveLink>
              </li>
              <li className={styles.page_link_wrap}>
                <ActiveLink href="/blog" activeClassName={styles.current} passHref>
                  <a>
                    <span className={styles.initials}>B</span>log
                  </a>
                </ActiveLink>
              </li>
              <li>
                <div className={styles.lang_wrap}>{localeElement}</div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
export default Header;

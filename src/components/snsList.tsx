import Image from 'next/image';
import Link from 'next/link';
import styles from 'styles/components/SnsList.module.scss';
const SnsList = (): JSX.Element => {
  return (
    <section className={styles.sns_list_wrap}>
      <h2>Contact &amp; Follow</h2>
      <ul>
        <li>
          <Link href="https://twitter.com/ishiyamayuichi" passHref>
            <a target="_blank" rel="noopener">
              <Image
                priority={true}
                width={40}
                height={40}
                src="/images/ico_twitter.png"
                alt="Twitter"
              />
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/yufrom" passHref>
            <a target="_blank" rel="noopener">
              <Image
                priority={true}
                width={40}
                height={40}
                src="/images/ico_github.png"
                alt="Twitter"
              />
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://www.pinterest.jp/yu123daa/" passHref>
            <a target="_blank" rel="noopener">
              <Image
                priority={true}
                width={40}
                height={40}
                src="/images/ico_pinterest.png"
                alt="Pinterest"
              />
            </a>
          </Link>
        </li>
        <li>
          <Link href="mailto:fromscratch.yi@gmail.com?subject=Contact From Portfolio" passHref>
            <a>
              <Image priority={true} width={40} height={40} src="/images/ico_mail.png" alt="Mail" />
            </a>
          </Link>
        </li>
      </ul>
    </section>
  );
};
export default SnsList;

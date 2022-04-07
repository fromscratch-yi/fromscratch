import Link from 'next/link';
import styles from 'styles/components/ArrowLink.module.scss';
interface Props {
  linkPath: string;
  text: string;
  arrow: string;
}
const ArrowLink = (props: Props) => {
  return (
    <div className={styles.arrow}>
      <Link href={props.linkPath} passHref>
        <a className={styles[props.arrow]}>{props.text}</a>
      </Link>
    </div>
  );
};
export default ArrowLink;

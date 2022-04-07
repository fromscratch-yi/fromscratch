import styles from 'styles/components/PageMainHead.module.scss';
interface Props {
  title: string;
}
const PageMainHead = (props: Props): JSX.Element => {
  return <h2 className={styles.page_main_head}>{props.title}</h2>;
};

export default PageMainHead;

import Image from 'next/image';
import styles from 'styles/components/LogoImage.module.scss';

interface Props {
  onClick?: () => void;
  isBound?: boolean;
  width?: number;
  height?: number;
}
const LogoImage = (props: Props): JSX.Element => {
  const className = props.isBound ? styles.bound : '';
  const width = props.width ?? 60;
  const height = props.height ?? 60;
  return (
    <div className={className}>
      <Image
        priority={true}
        src="/images/logo.png"
        alt="From Scratch Logo"
        width={width}
        height={height}
        onClick={props.onClick}
      />
    </div>
  );
};
export default LogoImage;

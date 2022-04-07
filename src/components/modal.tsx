import React, { Children } from 'react';
interface Props {
  children: any;
  class: string;
}
const Modal = ({ ...props }: Props): JSX.Element => {
  const child = Children.only(props.children);
  return (
    <div className="">
      <div className="">{React.cloneElement(child, props.class)}</div>
    </div>
  );
};
export default Modal;

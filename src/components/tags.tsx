interface Props {
  tags: string[];
  tagListClass: string;
}

const Tags = (props: Props): JSX.Element => {
  return (
    <ul className={props.tagListClass}>
      {props.tags.map((tag: string, idx: number): JSX.Element => {
        return <li key={idx}>{tag}</li>;
      })}
    </ul>
  );
};
export default Tags;

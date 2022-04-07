import TypewriterComponent from 'typewriter-effect';
import styles from 'styles/components/TerminalWindow.module.scss';

interface Props {
  command: string;
}
const TerminalWindow = (props: Props): JSX.Element => {
  return (
    <div className={styles.terminal_window}>
      <div className={styles.tool_bar}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <pre>
        <code>
          <TypewriterComponent
            onInit={(typewriter) => {
              typewriter.pauseFor(500).changeDelay(60).typeString(props.command).start();
            }}
          />
        </code>
      </pre>
    </div>
  );
};
export default TerminalWindow;

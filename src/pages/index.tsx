import type { NextPage } from 'next';
import Link from 'next/link';
import { useState } from 'react';
import TypewriterComponent from 'typewriter-effect';
import LogoImage from '@/components/logoImage';
import { useLocale } from 'hooks/useLocale';
import styles from 'styles/pages/Home.module.scss';

const Home: NextPage = () => {
  const [isBackOpen, setIsBackOpen] = useState(false);
  const containerClassName = isBackOpen
    ? `${styles.is_back_open} ${styles.container}`
    : styles.container;

  const { locale, t } = useLocale();
  return (
    <div className={containerClassName}>
      {/* Top Left Contents */}
      <div className={styles.front_wrap}>
        <div className={styles.front_box} onClick={() => setIsBackOpen(!isBackOpen)}>
          <h1>
            <span className={styles.noise_txt} data-text="Welcome">
              Welcome
            </span>
            <span className={styles.site_name}>From Scratch</span>
            <span className={styles.author}>Yuichi Ishiyama&#39;s</span>
            <span>{t.portfolio}</span>
          </h1>
        </div>
        {/* Top Right Contents */}
        <div className={styles.front_box} onClick={() => setIsBackOpen(!isBackOpen)}>
          <pre>
            <code>
              <TypewriterComponent
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(500)
                    .changeDelay(60)
                    .typeString(
                      '[Java]\npublic class HelloWorld {\n  public static void main(String[] args) {\n    System.out.println("Hello World.");\n  }\n}\n$ javac HelloWorld.java\n$ java HelloWorld\nHello World.\n\n[PHP]\n$ echo `<?php echo "Hello World."; ?>` > HelloWorld.php\n$ php HelloWorld.php\nHello World.\n\n[Python]\n$ echo `print("Hello World.")` > HelloWorld.py\n$ python HelloWorld.py\nHello World.\n$',
                    )
                    .start();
                }}
              />
            </code>
          </pre>
        </div>
        {/* Bottom Left Contents */}
        <div className={styles.front_box} onClick={() => setIsBackOpen(!isBackOpen)}>
          <pre>
            <code>
              <TypewriterComponent
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(500)
                    .changeDelay(60)
                    .typeString(
                      '$ docker-machine start\n\n                  ##         .\n            ## ## ##        ==\n         ## ## ## ## ##    ===\n     /"""""""""""""""""___/ ===\n~~~ {~~ ~~~~ ~~~\n~~~~ ~~~ ~ / ===- ~~~\n     ______ o           __/\n                    __/\n        ___________/\n\ndocker is configured to use the default machine with IP 192.168.99.100\n  docker is running.....\n$',
                    )
                    .start();
                }}
              />
            </code>
          </pre>
        </div>
        {/* Bottom Right Contents */}
        <div className={styles.front_box} onClick={() => setIsBackOpen(!isBackOpen)}>
          <div className={styles.front_box_inner}>
            <LogoImage isBound={true} />
            <span className={styles.tap_txt}>
              <TypewriterComponent
                onInit={(typewriter) => {
                  typewriter.pauseFor(2500).typeString('Tap').start();
                }}
              />
            </span>
          </div>
        </div>
      </div>

      {/* 背後コンテンツ（メニュー） */}
      <div className={styles.back_wrap}>
        <div className={styles.back_contents}>
          <LogoImage isBound={true} onClick={() => setIsBackOpen(!isBackOpen)} />

          <p className={styles.message}>
            Welcome to this site.
            <br />
            All will begin <strong>From Scratch</strong>
          </p>

          <nav>
            <ul>
              <li>
                <Link href="/about" passHref>
                  <a>About</a>
                </Link>
              </li>
              <li>
                <Link href="/work" passHref>
                  <a>Work</a>
                </Link>
              </li>
              <li>
                <Link href="/blog" passHref>
                  <a>Blog</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Home;

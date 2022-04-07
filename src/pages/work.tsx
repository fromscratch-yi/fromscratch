import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import nl2br from 'react-nl2br';
import SwipeableViews from 'react-swipeable-views';
import ArrowLink from '@/components/arrowLink';
import PageMainHead from '@/components/pageMainHead';
import Tags from '@/components/tags';
import TerminalWindow from '@/components/terminalWindow';
import { useLocale } from 'hooks/useLocale';
import Layout from 'layouts/default';
import styles from 'styles/pages/Work.module.scss';

interface tabType {
  [key: string]: string;
}
interface workType {
  title: string;
  overview: string;
  link: string | null;
  skillSet: string[];
  imgCount: number;
}
interface contentsType {
  [key: string]: {};
}
interface contentType {
  [key: string]: workType;
}

const Work: NextPage = () => {
  const { locale, t } = useLocale();
  const [tabIndex, setTabIndex] = useState(0);
  const pageData = t.work;
  const tabs = Object.keys(pageData.tabs).map((key, idx): JSX.Element => {
    const tab: tabType = pageData.tabs;
    return (
      <li
        key={key}
        className={tabIndex === idx ? styles.active : ''}
        onClick={() => setTabIndex(idx)}
      >
        {tab[key]}
      </li>
    );
  });

  const tabContents = Object.keys(pageData.contents).map((key, idx): JSX.Element => {
    const contents: contentsType = pageData.contents;
    const content: contentType = contents[key];
    const contentsInner = Object.keys(content).map((name): JSX.Element => {
      const contentInfo = content[name];
      const title = contentInfo.link ? (
        <Link href={contentInfo.link} passHref>
          <a
            target="_blank"
            rel="noopener"
            className={styles.ex_link}
            dangerouslySetInnerHTML={{ __html: contentInfo.title }}
          ></a>
        </Link>
      ) : (
        <span dangerouslySetInnerHTML={{ __html: contentInfo.title }}></span>
      );
      return (
        <li key={name}>
          <p className={styles.ttl}>{title}</p>
          <div className={styles.image_wrap}>
            {/* 画像数分 */}
            {[...Array(contentInfo.imgCount)].map((count, idx) => {
              console.log(key, name, idx);
              return (
                <Image
                  key={idx}
                  priority={true}
                  src={`/images/work/${key}/${name}${idx + 1}.png`}
                  alt={`${name} Image ${idx + 1}`}
                  layout="fill"
                  objectFit="contain"
                />
              );
            })}
          </div>
          <Tags tags={contentInfo.skillSet} tagListClass={styles.skill_tags} />
          <p
            className={styles.overview}
            dangerouslySetInnerHTML={{ __html: contentInfo.overview }}
          ></p>
        </li>
      );
    });
    return (
      <div key={key} className={`${styles.max_size_contents} ${styles.tab_contents_inner}`}>
        <ul className={styles.work_contents}>{contentsInner}</ul>
      </div>
    );
  });
  return (
    <Layout>
      <PageMainHead title="Work" />
      <div className={styles.max_size_contents}>
        <TerminalWindow command="$ cat ./work.txt<br />> This is my private works.<br />> I'm looking for work." />
      </div>
      <section className={styles.work_wrap}>
        <div className={styles.tab_wrap}>
          <ul className={styles.tab_btns}>{tabs}</ul>
          <SwipeableViews index={tabIndex}>{tabContents}</SwipeableViews>
        </div>
      </section>
      <div className={styles.max_size_contents}>
        <div className={styles.arrow_wrap}>
          <ArrowLink linkPath="/about" text="About" arrow="left"></ArrowLink>
          <ArrowLink linkPath="/blog" text="Blog" arrow="right"></ArrowLink>
        </div>
      </div>
    </Layout>
  );
};
export default Work;

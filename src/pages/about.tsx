import { NextPage } from 'next';
import Image from 'next/image';

import React, { useState } from 'react';
import nl2br from 'react-nl2br';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';
import ArrowLink from '@/components/arrowLink';
import PageMainHead from '@/components/pageMainHead';
import Tags from '@/components/tags';
import TerminalWindow from '@/components/terminalWindow';
import { useLocale } from 'hooks/useLocale';
import Layout from 'layouts/default';
import styles from 'styles/pages/About.module.scss';

interface skillType {
  frontend: {
    name: string;
    tags: string[];
  };
  backend: {
    name: string;
    tags: string[];
  };
  server: {
    name: string;
    tags: string[];
  };
  other: {
    name: string;
    tags: string[];
  };
}

const About: NextPage = () => {
  const { t } = useLocale();
  const [modalTarget, setModalTarget] = useState('');
  const pageData = t.about;

  const skillDataList = {
    frontend: [
      { name: 'HTML', point: 5 },
      { name: 'CSS', point: 4 },
      { name: 'Javascript', point: 4 },
      { name: 'jQuery', point: 4 },
      { name: 'typescript', point: 3 },
      { name: 'Vue', point: 3.2 },
      { name: 'React', point: 3.2 },
    ],
    backend: [
      { name: 'PHP', point: 4.5 },
      { name: 'Python', point: 3.3 },
      { name: 'Java', point: 3 },
      { name: 'Swift', point: 2 },
      { name: 'SQL', point: 3.2 },
      { name: 'NoSQL', point: 3.2 },
    ],
    server: [
      { name: 'GCP', point: 3 },
      { name: 'AWS', point: 3.2 },
      { name: 'Docker', point: 4 },
      { name: 'Vagrant', point: 4 },
      { name: 'Appach', point: 3.5 },
      { name: 'Nginx', point: 3.5 },
    ],
    other: [
      { name: 'Git', point: 4 },
      { name: 'SVN', point: 3.5 },
      { name: 'GA', point: 3.5 },
      { name: 'GTM', point: 4 },
      { name: 'FireBase', point: 3.5 },
      { name: 'SEO', point: 3.5 },
    ],
  };

  const skills = (Object.keys(pageData.skills) as (keyof skillType)[]).map((key): JSX.Element => {
    const skillData = pageData.skills[key];
    const title: string = skillData.name;
    const skillInfo = skillDataList[key];
    let backgroundColor: string, borderColor: string;
    switch (key) {
      case 'frontend':
        backgroundColor = 'rgba(237, 146, 159, 0.2)';
        borderColor = 'rgba(237, 146, 159, 1)';
        break;
      case 'backend':
        backgroundColor = 'rgba(121, 198, 182, 0.2)';
        borderColor = 'rgba(121, 198, 182, 1)';
        break;
      case 'server':
        backgroundColor = 'rgba(123, 235, 143, 0.2)';
        borderColor = 'rgba(123, 235, 143, 1)';
        break;
      default:
        backgroundColor = 'rgba(255, 195, 93, 0.2)';
        borderColor = 'rgba(255, 195, 93, 1)';
        break;
    }

    const openModal = (key: string): void => {
      requestAnimationFrame(() => {
        const layout: HTMLElement | null = document.querySelector('.layout_motion');
        if (layout) {
          layout.style.transform = '';
        }
      });
      setModalTarget(key);
    };
    const closeModal = (): void => {
      setModalTarget('');
    };

    return (
      <li className={styles.skill_info} key={key}>
        <h4>{title}</h4>
        <div className={styles.skill_img_wrap} onClick={() => openModal(key)}>
          <Image
            priority={true}
            src={`/images/ico_${key}.png`}
            alt={title}
            width={140}
            height={140}
            id={key}
          />
          <span className={styles.more_btn}>More...</span>
        </div>

        <div className={`${styles.modal_wrap} ${modalTarget == key ? styles.active : ''}`}>
          <div className={styles.modal_inner}>
            <p className={styles.modal_ttl}>{title}</p>
            <span className={styles.close_icon} onClick={closeModal}></span>
            <div className={styles.center_area}>
              <div className={styles.chart_box}>
                <ResponsiveContainer
                  width="100%"
                  height="100%"
                  aspect={1.5}
                  className={styles.chart_wrap}
                >
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillInfo}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="name" tick={{ fontSize: 13, fill: '#555' }} />
                    <PolarRadiusAxis domain={[0, 5]} axisLine={false} tick={false} scale="linear" />
                    <Radar
                      name={title}
                      dataKey="point"
                      stroke={backgroundColor}
                      fill={borderColor}
                      fillOpacity={0.6}
                    />
                  </RadarChart>
                </ResponsiveContainer>
                <Tags tags={skillData.tags} tagListClass={styles.skill_tags} />
              </div>
              <button type="button" className={styles.close_btn} onClick={closeModal}>
                {t.close}
              </button>
            </div>
          </div>
        </div>
      </li>
    );
  });

  const careerTblHead = pageData.careerTblHead.map((data, idx): JSX.Element => {
    return <th key={idx}>{data}</th>;
  });
  const careerTbl = pageData.career.map((data, idx): JSX.Element => {
    const kindClassName = data.kind == 1 ? styles.main : styles.sub;
    const kindText = data.kind == 1 ? pageData.main : pageData.sub;
    return (
      <tr key={idx}>
        <td className={`${styles.date} ${styles.nowrap}`}>
          {data.from}
          <br />~<br />
          {data.to}
        </td>
        <td>
          <div className={styles.title_wrap}>
            <span className={`${styles.skill_bat} ${kindClassName}`}>{kindText}</span>
            <p>{nl2br(data.title)}</p>
          </div>
        </td>
        <td>
          <Tags tags={data.skills} tagListClass={styles.career_skills} />
        </td>
      </tr>
    );
  });

  return (
    <Layout>
      <PageMainHead title="About" />
      <div className={styles.max_size_contents}>
        <TerminalWindow command="$ cat ./about.txt<br />> This is Yuichi Ishiyama&#39;s Profile.<br />> Who am I? Can I do?" />
      </div>
      <section className={styles.profile_wrap}>
        <div className={styles.flex_contents}>
          <div className={styles.name_and_hashtags}>
            <p className={styles.job_title}>{pageData.jobTitle}</p>
            <h2 className={styles.my_name} dangerouslySetInnerHTML={{ __html: pageData.name }}></h2>
            <Tags tags={pageData.hashTags} tagListClass={styles.hashtags} />
          </div>
          <div className={styles.img_area}>
            <figure className={styles.img_wrap}>
              <Image
                priority={true}
                src="/images/profile.jpg"
                alt="Yuichi Ishiyama"
                width={200}
                height={200}
              />
            </figure>
          </div>
        </div>
        <p className={styles.introduction}>{nl2br(pageData.introduction)}</p>
      </section>

      <section className={styles.skills_wrap}>
        <div className={styles.max_size_contents}>
          <h3 className={styles.sec_ttl}>Skills &amp; Tools</h3>
          <ul className={styles.skill_info_list}>{skills}</ul>
        </div>
      </section>

      <section className={styles.career_wrap}>
        <div className={styles.max_size_contents}>
          <h3 className={styles.sec_ttl}>Carrer</h3>
          <table className={styles.career_tbl}>
            <thead>
              <tr>{careerTblHead}</tr>
            </thead>
            <tbody>{careerTbl}</tbody>
          </table>
        </div>
      </section>

      <div className={`${styles.max_size_contents} ${styles.arrow_wrap}`}>
        <ArrowLink linkPath="/work" text="Work" arrow="right"></ArrowLink>
      </div>
    </Layout>
  );
};
export default About;

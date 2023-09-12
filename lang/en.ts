export default {
  keywordSearch: {
    title: 'Keyword Search',
    description:
      'Keyword Search. In Addition, I am a web engineer working in Osaka, Japan. I am posting a programming-related technical blog as well as tools and gadgets that help improve work efficiency and motivation.',
  },
  tagSearch: {
    title: 'Result',
    description:
      'Result. In Addition, I am a web engineer working in Osaka, Japan. I am posting a programming-related technical blog as well as tools and gadgets that help improve work efficiency and motivation.',
    searchTitle: 'Tag Search',
    listTitle: 'Tag List',
  },
  category: {
    programming: {
      title: "Programming Articles | FromScratch Blog - Yuichi Ishiyama's Blog",
      description:
        'I provide a wide range of programming information from infrastructure and server side to front end. I also provide information on tools for efficient development.',
      name: 'Programming',
      explain: 'Articles of programming languages and tips, etc.',
    },
    gadget: {
      title: "Gadget Articles | FromScratch Blog - Yuichi Ishiyama's Blog",
      description:
        'I deliver articles introducing & reviewing gadgets to improve work efficiency.We will also deliver the latest information on new gadgets.',
      name: 'Gadget Tips',
      explain: 'Articles of desk set-up and gadget, etc',
    },
    other: {
      title: "Useful Tips Articles | FromScratch Blog - Yuichi Ishiyama's Blog",
      description:
        'I distribute articles on human skills and my hobbies (movies, music, etc.) other than programming and gadgets.',
      name: 'Useful Tips',
      explain: 'Articles of motivational and other',
    },
  },
  top: {
    title: "FromScratch | Yuichi Ishiyama's Portfolio and Blog site. | Web developer",
    description:
      'I am Yuichi Ishiyama (FromScratch), a web developer in Osaka, Japan. Welcome to this site. This is my Portfolio site.',
  },
  about: {
    title:
      "Self Introduction, Background and Skills | FromScratch - Yuichi Ishiyama's Profile Site.",
    description:
      'I am Yuichi Ishiyama (FromScratch), a web developer in Osaka, Japan.  This is my profile page. I will introduce my history, carrier, and skill.',
    position: 'Web Developer',
    name: 'Yuichi Ishiyama',
    tags: [
      'Front-End',
      'Back-End',
      'mobile Apps',
      'Infrastructure construction',
      'Web Design',
      'Business Card Design',
    ],
    introduction:
      "I was born on January 23, 1993 in Osaka, Japan. After working as a bartender for four years, I have been working as a software engineer since 2014.<br />I like soccer, and programming. Recently, I want to communicate with software engineers around the world ha-ha. And I want to improve my English and programming skill as a software engineer.<br />That's about it. Thank you.",
    skills: {
      frontend: {
        name: 'Front-End',
        comment:
          'I have experience in various development projects from web design to coding, including HTML and CSS development using Pug and Scss, and Javascript development using jQuery, Vue, React, etc.',
      },
      backend: {
        name: 'Back-End',
        comment:
          'My most experienced language is PHP, and he has experience developing in various frameworks such as Laravel, Wordpress, and Yii2. I have also developed small API servers and tools using Python. Recently, I have been involved in iOS application development and am learning Swift.',
      },
      server: {
        name: 'Infrastructure',
        comment:
          'I have experience in building development environments using Docker, building rental and cloud servers, and other server redundancy and dead/dead monitoring.',
      },
      other: {
        name: 'Other & Tools',
        comment:
          'I mainly use Git (sometimes SVN) for version control and VSCode as our favorite editor. I also have experience in automated deployment using CircleCI and web marketing using Google Analytics and GCP.',
      },
    },
    careerTblHead: ['Term', 'Project', 'Skill-Set'],
    main: 'MAIN',
    sub: 'SUB',
    detail: 'Show Detail',
    careerList: [
      {
        from: '2023/3',
        to: '2023/6',
        title: 'Employee Management System (iOS version)',
        skills: ['SwiftUI', 'Swift', 'XCode', 'Firebase', 'XD'],
        kind: 'sub',
      },
      {
        from: '2022/3',
        to: '2023/6',
        title: 'Job Platform',
        skills: ['PHP', 'Laravel', 'MySQL', 'HTML', 'CSS', 'jQuery', 'Python'],
        kind: 'sub',
      },
      {
        from: '2022/12',
        to: '2023/8',
        title: 'Credit Card Apps',
        skills: ['SwiftUI', 'Swift', 'XCode', 'OpenAPI', 'Swagger', 'XD'],
        kind: 'main',
      },
      {
        from: '2022/3',
        to: '2022/11',
        title: 'Real estate portal site and Parking management site',
        skills: ['XD', 'AWS', 'HTML', 'CSS', 'Javascript'],
        kind: 'main',
      },
      {
        from: '2022/6',
        to: '2022/8',
        title: 'Apparel company website and ordering system',
        skills: ['PHP', 'Laravel', 'MySQL', 'HTML', 'CSS', 'jQuery', 'Figma'],
        kind: 'sub',
      },
      {
        from: '2022/2',
        to: '2022/9',
        title: 'Educational video app',
        skills: ['Swift', 'Objective-c', 'Open eDX'],
        kind: 'main',
      },
      {
        from: '2021/11',
        to: '2022/2',
        title: 'Food Factory Equipment Inspection System',
        skills: ['AWS', 'Java', 'SpringBoot', 'HTML', 'CSS', 'JavaScript', 'jQuery'],
        kind: 'main',
      },
      {
        from: '2021/11',
        to: '2021/1',
        title: 'Equipment Inspection Request System',
        skills: ['GAS(Google Apps Script)', 'HTML', 'CSS', 'JavaScript', 'jQuery'],
        kind: 'main',
      },
      {
        from: '2018/1',
        to: '2021/11',
        title: 'Product Comparison Portal Site',
        skills: [
          'PHP',
          'Yii2',
          'HTML',
          'CSS',
          'JavaScript',
          'jQuery',
          'Docker',
          'GCP',
          'GTM',
          'GA',
        ],
        kind: 'main',
      },
      {
        from: '2021/5',
        to: '2021/12',
        title: 'Welfare Facilities Search Portal Site',
        skills: ['PHP', 'Laravel', 'MySQL', 'HTML', 'CSS', 'jQuery', 'Python'],
        kind: 'sub',
      },
      {
        from: '2021/1',
        to: '2021/4',
        title: 'Worker management system (serverless ver)',
        skills: ['Vue.js', 'HTML', 'CSS', 'SCSS', 'Firebase', 'CircleCI'],
        kind: 'sub',
      },
      {
        from: '2020/12',
        to: '2021/3',
        title: 'Private Hospital Website Creation',
        skills: ['PHP', 'Wordpress', 'MySQL', 'HTML', 'CSS', 'jQuery'],
        kind: 'sub',
      },
      {
        from: '2020/6',
        to: '2020/10',
        title: 'Wastim (Hobby app)',
        skills: [
          'Vue.js',
          'Nuxt.js',
          'HTML',
          'CSS',
          'SCSS',
          'Bluma',
          'Firebase',
          'Contentful',
          'CircleCI',
        ],
        kind: 'sub',
      },
      {
        from: '2020/8',
        to: '2020/8',
        title: 'PDF Analysis and Diagnosis Tool',
        skills: ['Python', 'Flask', 'HTML', 'CSS', 'jQuery'],
        kind: 'sub',
      },
      {
        from: '2020/5',
        to: '2020/6',
        title: 'Renewal of the eel restaurant website',
        skills: ['HTML', 'Pug', 'CSS', 'SCSS', 'jQuery', 'BASE'],
        kind: 'sub',
      },
      {
        from: '2020/3',
        to: '2020/6',
        title: 'University Hospital Clinical Trial System Server Migration',
        skills: ['PHP', 'Laravel', 'MySQL', 'NTT EnterpriseCloud'],
        kind: 'sub',
      },
      {
        from: '2019/10',
        to: '2019/12',
        title: 'Portfolio Site Creation',
        skills: [
          'Vue.js',
          'Nuxt.js',
          'HTML',
          'CSS',
          'SCSS',
          'Bluma',
          'Firebase',
          'Contentful',
          'CircleCI',
        ],
        kind: 'sub',
      },
      {
        from: '2019/10',
        to: '2019/12',
        title: 'Automatic ad creation tool closing process',
        skills: ['PHP', 'Laravel', 'MySQL', 'GMO決済API'],
        kind: 'sub',
      },
      {
        from: '2019/3',
        to: '2019/6',
        title: 'Eel Restaurant Attendance System',
        skills: ['PHP', 'Laravel', 'MySQL', 'Docker', 'HTML', 'CSS', 'JavaScript', 'jQuery'],
        kind: 'sub',
      },
      {
        from: '2019/2',
        to: '2019/3',
        title: 'Eel restaurant website creation',
        skills: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
        kind: 'sub',
      },
      {
        from: '2019/1',
        to: '2019/5',
        title: 'Employee Management System',
        skills: ['PHP', 'Laravel', 'MySQL', 'Docker', 'AWS', 'HTML', 'CSS', 'JavaScript', 'jQuery'],
        kind: 'sub',
      },
      {
        from: '2018/3',
        to: '2018/4',
        title: 'Company website creation',
        skills: ['PHP', 'HTML', 'CSS', 'JavaScript', 'jQuery'],
        kind: 'sub',
      },
      {
        from: '2017/11',
        to: '2018/1',
        title: 'Driving Information Collection System',
        skills: ['AWS', 'MySQL', 'PHP'],
        kind: 'main',
      },
      {
        from: '2017/6',
        to: '2017/11',
        title: 'Power Server Research and Development',
        skills: [
          'Java',
          'Groovy',
          'Grails',
          'PostgreSQL',
          'OSGI',
          'AWS',
          'HAProxy',
          'Pacemaker+Crosync',
          'RabbitMQ',
          'ShellScript',
        ],
        kind: 'main',
      },
      {
        from: '2016/12',
        to: '2017/6',
        title: 'Speed measurement device management tool',
        skills: ['PHP', 'HTML', 'CSS', 'Canvas', 'JavaScript', 'jQuery'],
        kind: 'main',
      },
      {
        from: '2016/8',
        to: '2016/12',
        title: 'Multimedia Broadcasting Application Module Development',
        skills: ['PHP', 'PostgreSQL'],
        kind: 'main',
      },
      {
        from: '2016/7',
        to: '2016/8',
        title: 'Website application for dispensing pharmacies',
        skills: ['Android', 'PHP', 'Java', 'HTML'],
        kind: 'main',
      },
      {
        from: '2016/4',
        to: '2016/7',
        title: 'Xumo device VOD application',
        skills: ['Bright Script'],
        kind: 'main',
      },
      {
        from: '2016/2',
        to: '2016/4',
        title: 'Expressway video distribution system',
        skills: ['C#', 'ASP.net'],
        kind: 'main',
      },
    ],
    note: 'Note: To keep confidential, concrete expression is omitted.',
  },
  work: {
    title: "Production Results | FromScratch - Yuichi Ishiyama's Profile Site.",
    description:
      'I am Yuichi Ishiyama (FromScratch), a web developer in Osaka, Japan. This is my portfolio page. I will introduce my works such as Web App, WebSite, Business Card Design, etc.',
    explain:
      'Here are some of my creative works such as Web App, Website, Business Card, etc. that we have produced through personal development and commissioned projects.',
    tabs: {
      service: 'Services',
      web: 'Website',
      card: 'Card & Other',
    },
    works: {
      service: [
        {
          prefix: 'wastim',
          title: 'WasTim',
          subTitle: 'Self-help apps',
          overview:
            "I created WasTim, a self-help service that quantifies your day's evaluation and helps you raise awareness through awareness.<br />I had never done serverless Web App development before, so I created it using Google's Firebase. We were conscious of using the latest technologies such as Firebase, SSR (server-side-rendering), and PWA, and tried to design with UI/UX in mind.",
          kind: 'Web App',
          skillSet: [
            'HTML/CSS/JS',
            'PWA',
            'Vue.js',
            'Nuxt.js',
            'Pug',
            'Scss',
            'Firebase',
            'Authentication',
            'Firestore',
            'Hosting',
          ],
          link: null,
          imgCount: 6,
        },
        {
          prefix: 'medicare-partner',
          title: 'medicare-partner「メディケアパートナー」',
          subTitle: 'Job platform for medical, welfare and childcare',
          overview:
            'Job platform for medical, welfare and childcare. medicare-partner "Medicare Partner".<br />I developed the site from full scratch, from requirement definition and design, around infrastructure, design of the site, implementation and coding of the front area, server side implementation, and DB design.<br />The service is full of features such as chat, job application flow, and matching.',
          kind: 'Web App',
          skillSet: [
            'PHP',
            'Laravel',
            'Python',
            'HTML/CSS/JS',
            'jQuery',
            'Blade',
            'Docker',
            'MySQL',
            'XD',
            'Photoshop',
          ],
          link: 'https://medicare-partner.jp',
          imgCount: 1,
        },
        {
          prefix: 'care-base',
          title: 'care-base',
          subTitle: 'Portal Site for Children, Disabilities, and Caregiver Welfare',
          overview:
            'I did everything by myself, from requirements definition and design, to infrastructure, site design, implementation and coding of the front area, server-side implementation, and DB design.<br />In addition to the front screen, I also implemented all operational management and management screens for the offices listed on the site.<br />This was the first time I had developed a system of this scale by myself, so it was one of the projects that allowed me to grow a lot.',
          kind: 'Web App',
          skillSet: [
            'PHP',
            'Laravel',
            'Python',
            'HTML/CSS/JS',
            'jQuery',
            'Blade',
            'Docker',
            'MySQL',
            'XD',
            'Photoshop',
          ],
          link: 'https://care-base.jp',
          imgCount: 2,
        },
        {
          prefix: 'used',
          title: 'UseD',
          subTitle: 'Self-help app to recognize spending',
          overview:
            'I created a money spending management application called "UseD" to study native apps.<br>The application classifies expenses into three categories: "spending (expenses that are absolutely necessary, such as rent)," "waste (unnecessary expenses)," and "investment (meaningful expenses)," and helps users recognize how much they waste in their money usage.',
          kind: 'Mobile App',
          skillSet: ['Android Java', 'SQLite', 'Android Studio'],
          link: null,
          imgCount: 2,
        },
        {
          prefix: 'ems',
          title: 'Employee Management App (Serveless)',
          subTitle: 'SES company problem solver!',
          overview:
            'I renewed an employee management system created in the past in Laravel in a serverless manner. We also cleaned up the design, SPA, PWA support, and enabled Google login.',
          kind: 'Web App',
          skillSet: [
            'HTML/CSS/JS',
            'PWA',
            'Vue.js',
            'Nuxt.js',
            'Pug',
            'Scss',
            'Firebase',
            'Authentication',
            'Firestore',
            'Hosting',
          ],
          link: null,
          imgCount: 4,
        },
        {
          prefix: 'ems-old',
          title: 'Employee Management App',
          subTitle: 'SES company problem solver!',
          overview:
            'This is a web application created to solve the problem of employees\' faces and names not matching, which can occur in companies that operate as a SES (customer-employed service station).<br>All employees are required to register a photo of their face and can optionally register profile information. I have also implemented functions such as employee search by registered birthdays, programming languages they are proficient in, etc., and graphing of employee skill and age statistics.<br>In addition, through integration with Slack (a chat application), functions such as new employee registration notifications, error notifications, and direct Slack messages with a single click from the account screen have been implemented.<br><span class="attention">*Functions of the management screen are omitted.</span>',
          kind: 'Web App',
          skillSet: [
            'PHP',
            'Laravel',
            'HTML/CSS/JS',
            'jQuery',
            'Blade',
            'AWS',
            'Docker',
            'PostgreSQL',
          ],
          link: null,
          imgCount: 3,
        },
        {
          prefix: 'sms',
          title: 'Sales Management System',
          subTitle: 'Systematized Excel-based sales management',
          overview:
            'Sales management, which had been managed and totaled in Excel, was converted to a web system.<br>The design also took into account product master registration, discounts, and unit price (price) fluctuations.<br>In addition, the UI and UX are designed to allow operation using only the keyboard without using the mouse as much as possible to improve system input efficiency.',
          kind: 'Web App',
          skillSet: ['PHP', 'Laravel', 'HTML/CSS/JS', 'jQuery', 'Blade', 'Docker', 'MySQL'],
          link: null,
          imgCount: 3,
        },
        {
          prefix: 'kintai',
          title: 'Time and Attendance Management System',
          subTitle: 'Converting handwritten time cards to a web-based system',
          overview:
            'I have converted attendance management, which used to be handwritten and manually input and totaled attendance hours, into a web system.<br>To solve the problems of calculation errors, forgotten entries, and illegible handwritten time cards, we systematized the entire flow.<br>The system is designed to manage employees by store and provide an attendance input screen for each store, allowing employees to clock in and out with a single click from a device placed in the store before work, leading to a significant reduction in labor costs and improved management accuracy.',
          kind: 'Web App',
          skillSet: ['PHP', 'Laravel', 'HTML/CSS/JS', 'jQuery', 'Blade', 'Docker', 'MySQL'],
          link: null,
          imgCount: 2,
        },
      ],
      web: [
        {
          prefix: 'fromscratch',
          title: 'FromScratch',
          subTitle: 'My Portfolio Site.',
          overview:
            'The origin of FromScratch is that I am almost self-taught and have come this far from zero (with From Scratch), and also that I always strive for high quality, not just relying on templates and formats. From Scratch!" The name "From Scratch" was chosen because we are aware of the importance of "From Scratch" in our work.',
          kind: 'Website',
          skillSet: [
            'HTML/CSS/JS',
            'PWA',
            'Vue.js',
            'Nuxt.js',
            'Pug',
            'Scss',
            'Typescript',
            'Firebase',
            'Hosting',
            'Contentful',
          ],
          link: null,
          imgCount: 3,
        },
        {
          prefix: 'y2leather',
          title: "Y'2 LEATHER",
          subTitle: 'General leather manufacturer',
          overview:
            "We developed the website for Y'2 LEATHER, a general leather manufacturer, from the requirement definition to the design and development phases all by ourselves as a contractor.<br>We also built a reservation function linked to Google Calendar, product management, a blog, and an order system with dealers.",
          kind: 'Website',
          skillSet: [
            'PHP',
            'Laravel',
            'HTML/CSS/JS',
            'jQuery',
            'Blade',
            'Docker',
            'MySQL',
            'XD',
            'Photoshop',
          ],
          link: 'https://y-2leather.com',
          imgCount: 1,
        },
        {
          prefix: 'eryu',
          title: 'Medical Corporation Eryu Clinic',
          subTitle: 'Clinic Website',
          overview:
            'Website for medical corporation Eryu Clinic was created.<br />I did everything from design to development and implementation, created an original template in Wordpress, and implemented features such as an announcement blog and the ability to manage clinic dates and times.',
          kind: 'Website',
          skillSet: ['PHP', 'Wordpress', 'HTML/CSS/JS', 'jQuery', 'XD', 'Photoshop'],
          link: 'https://eryu-clinic.main.jp/',
          imgCount: 2,
        },
        {
          prefix: 'kyo-dpi',
          title: 'Production Company Kyo-dpi',
          subTitle: 'Corporate Website',
          overview:
            'I created a corporate website for kyo-dpi, a company specializing in creative production for marketing.',
          kind: 'Website',
          skillSet: ['PHP', 'Wordpress', 'HTML/CSS/JS', 'jQuery', 'XD'],
          link: null,
          imgCount: 2,
        },
        {
          prefix: 'pp',
          title: 'P&P Consulting Inc.',
          subTitle: 'Corporate Website',
          overview:
            'I created a corporate website for P&P Consulting, Inc. a consulting firm focused on influencer marketing.',
          kind: 'Website',
          skillSet: ['PHP', 'Wordpress', 'HTML/CSS/JS', 'jQuery', 'XD'],
          link: null,
          imgCount: 1,
        },
        {
          prefix: 'unaman',
          title: 'Eel Specialty Restaurant Unaman',
          subTitle: 'Restaurant Website',
          overview:
            'I did everything from planning to development and implementation of a website for an eel specialty store. The shopping site uses a SaaS called BASE. Incidentally, this is my first sideline project.',
          kind: 'Website',
          skillSet: ['HTML/CSS/JS', 'Pug', 'Scss', 'jQuery', 'XD', 'Photoshop'],
          link: 'http://unaman-d.com/',
          imgCount: 2,
        },
        {
          prefix: 'relation',
          title: 'relation Inc.',
          subTitle: 'IT Company Website',
          overview:
            'Created the website for relation, Inc.<br>I did everything from planning to development and implementation, and also implemented our own CMS for new information.',
          kind: 'Website',
          skillSet: ['HTML/CSS/JS', 'PHP', 'jQuery', 'Bootstrap'],
          link: null,
          imgCount: 2,
        },
        {
          prefix: 'hato',
          title: 'HatoKun GPS',
          subTitle: 'LandingPage',
          overview: 'I designed and coded the landing page for HatoKun GPS.',
          kind: 'LP',
          skillSet: ['HTML/CSS/JS', 'SCSS', 'jQuery'],
          link: 'https://hatokun.net/',
          imgCount: 1,
        },
      ],
      card: [
        {
          prefix: 'fromscratch',
          title: 'FromScratch',
          subTitle: null,
          overview:
            'This is my private Business Card.<br>Logo design and Business Card design were done. The concept of the logo is "FromScratch (from 0)," and the circle (zero) and the triangle (arrow) were created with the image of "FromScratch (from 0)" in mind.',
          kind: 'Business Card',
          skillSet: ['Logo design', 'Photoshop'],
          link: null,
          imgCount: 2,
        },
        {
          prefix: 'erm',
          title: 'e.r.m electricity',
          subTitle: null,
          overview:
            'Logo design and Business Card design for "e.r.m electricity", an air conditioning installation and electrical work company.',
          kind: 'Business Card',
          skillSet: ['Logo design', 'Photoshop'],
          link: null,
          imgCount: 2,
        },
        {
          prefix: 'nr',
          title: 'NR',
          subTitle: null,
          overview:
            'I designed a logo and personal Business Card for a classmate who is a sports instructor.',
          kind: 'Business Card',
          skillSet: ['Logo design', 'Photoshop'],
          link: null,
          imgCount: 1,
        },
        {
          prefix: 'ch-create',
          title: 'ch.create',
          subTitle: null,
          overview:
            'Logo design and Business Card design for electrical and construction company "ch.create".',
          kind: 'Business Card',
          skillSet: ['Logo design', 'Photoshop'],
          link: null,
          imgCount: 1,
        },
        {
          prefix: 'tz-auto',
          title: "T'z Auto",
          subTitle: null,
          overview:
            'Logo design and Business Card design for "T\'z Auto", a car maintenance company."',
          kind: 'Business Card',
          skillSet: ['Logo design', 'Photoshop'],
          link: null,
          imgCount: 2,
        },
      ],
    },
    note: 'Note: To keep confidential, concrete expression is omitted.',
  },
  blog: {
    title: "Blog | FromScratch - Yuichi Ishiyama's Blog of Programming.",
    description:
      'I am Yuichi Ishiyama (FromScratch), a web developer in Osaka, Japan. I am a web engineer working in Osaka, Japan. I am posting a programming-related technical blog as well as tools and gadgets that help improve work efficiency and motivation.',
    explain:
      'We distribute technical articles related to programming, as well as tools, gadgets, and other things that can improve work efficiency and motivation. Please take a look.',
    info: 'Please contact us via Twitter DM or email to discuss your job request!',
    noArticles: 'There are no articles available.',
    recommend: 'Recommend Articles',
    share: 'Share this article',
  },
};

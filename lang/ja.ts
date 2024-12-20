export default {
  keywordSearch: {
    title: 'キーワード検索',
    description:
      'キーワード検索です。その他にもプログラミング関連の技術ブログから、業務効率やモチベーションアップにつながるツールやガジェット関連などの配信をしております。',
  },
  tagSearch: {
    title: 'の検索結果',
    description:
      'の検索結果です。その他にもプログラミング関連の技術ブログから、業務効率やモチベーションアップにつながるツールやガジェット関連などの配信をしております。',
    searchTitle: 'ハッシュタグ検索',
    listTitle: 'ハッシュタグ一覧',
  },
  category: {
    programming: {
      title: 'プログラミング記事 | FromScratch Blog - 石山 雄一 (Yuichi Ishiyama) のブログ',
      description:
        'インフラ・サーバサイドから、フロントエンドまで、幅広いプログラミングに関する情報を配信しております。その他にも開発効率のためのツール紹介なども配信しております。',
      name: 'プログラミング',
      explain: 'プログラミング関連・Tipsなどの記事',
    },
    gadget: {
      title: 'ガジェット関連記事 | FromScratch Blog - 石山 雄一 (Yuichi Ishiyama) のブログ',
      description:
        '仕事効率UPのためのガジェットの紹介＆レビューなどの記事を配信しております。新たなガジェットなどの最新情報なども配信していきます。',
      name: 'ガジェット関連',
      explain: 'デスク周り・ガジェット関連の記事',
    },
    other: {
      title: 'お役立ちTips | FromScratch Blog - 石山 雄一 (Yuichi Ishiyama) のブログ',
      description:
        'プログラミング・ガジェット以外の、ヒューマンスキルに対する記事や、私の趣味（映画・音楽）などの記事を配信しております。',
      name: 'お役立ちTips',
      explain: 'モチベーション系・その他諸々の記事',
    },
  },
  top: {
    title: 'FromScratch | 石山雄一 (Yuichi Ishiyama) のポートフォリオサイト ',
    description:
      '大阪でWebエンジニアとして活動しております、FromScratch 石山 雄一 (Yuichi Ishiyama) です。そんな私のポートフォリオサイト。ぜひご覧ください。得意分野：Webアプリ開発・Webサイト制作・スマホアプリ開発',
  },
  about: {
    title:
      '自己紹介・経歴・スキル | FromScratch - 石山雄一 (Yuichi Ishiyama)のポートフォリオサイト',
    description:
      '大阪でWebエンジニアとして活動しております、FromScratch 石山 雄一 (Yuichi Ishiyama) です。私のプロフィール・スキルセット・経歴をご紹介。お仕事のご依頼はTwitterやメールにてお待ちしております！',
    position: 'Webエンジニア',
    name: '石山 雄一<small>(Yuichi Ishiyama)</small>',
    tags: [
      'フロントエンド',
      'バックエンド',
      'アプリ開発',
      'サーバー構築',
      'Webデザイン',
      '名刺デザイン',
    ],
    introduction:
      '1993年1月23日 大阪生まれ<br />4年間バーテンダーとして働いており、たまたま再放送でみた「リッチマンプアウーマン」という小栗旬主演のITベンチャーのドラマをきっかけに、2014年からWebエンジニアとして働いています🙈<br />要件定義から実装を含む、Webデザイン・フロントエンド・バックエンド・インフラ構築まで、幅広い分野に対応できるフルスタックエンジニアを目指して日々精進しています。<br />趣味はサッカー・フットサルです！よろしくお願いいたします！',
    skills: {
      frontend: {
        name: 'フロントエンド',
        comment:
          'Webデザインから、コーディング含め様々な開発案件を行なっています。HTML・CSSに関しては、PugやScssを用いた開発や、JavascriptはjQuery・Vue・Reactなどを用いた開発経験もあります。',
      },
      backend: {
        name: 'バックエンド',
        comment:
          '最も経験ある言語はPHPで、LaravelやWordpress、Yii2といった様々なフレームワークでの開発経験があります。その他小規模なAPIサーバや、ツール系ではPythonを使用した開発も行なっています。最近ではiOSアプリの開発に携わり、Swiftを学習しています。',
      },
      server: {
        name: 'インフラ・サーバ',
        comment:
          'Dockerを用いた開発環境構築、レンタルサーバやクラウドサーバ構築、その他サーバの冗長化・死活監視などの経験があります。',
      },
      other: {
        name: 'その他・ツール',
        comment:
          'バージョン管理は主にGit（たまにSVN）、好きなエディターはVSCode。その他CircleCIを用いた自動デプロイや、GoogleAnalytics・GCPを用いたWebマーケティングの経験もあります。',
      },
    },
    careerTblHead: ['期間', 'プロジェクト', 'スキルセット'],
    main: 'メイン',
    sub: 'サブ',
    detail: '詳しく見る',
    careerList: [
      {
        from: '2024/9',
        to: '2024/11',
        title: '施設検索ポータルサイトリニューアル',
        skills: ['React.js', 'Next.js', 'Contentful', 'Supabase', 'Figma'],
        kind: 'sub',
      },
      {
        from: '2024/3',
        to: '2024/9',
        title: 'ジム機器管理サイト',
        skills: ['Vue.js', 'AWS', 'GraphQL'],
        kind: 'main',
      },
      {
        from: '2023/9',
        to: '2023/12',
        title: '車両部品適用確認サイト',
        skills: ['PHP', 'Laravel', 'MySQL', 'HTML', 'CSS', 'jQuery', 'Figma'],
        kind: 'main',
      },
      {
        from: '2023/9',
        to: '2023/12',
        title: '施設検索ポータルサイト',
        skills: ['React.js', 'Next.js', 'Contentful', 'Firebase', 'XD'],
        kind: 'sub',
      },
      {
        from: '2023/3',
        to: '2023/6',
        title: '社員管理システム(iOS版)',
        skills: ['SwiftUI', 'Swift', 'XCode', 'Firebase', 'XD'],
        kind: 'sub',
      },
      {
        from: '2022/3',
        to: '2023/6',
        title: '求人プラットフォーム',
        skills: ['PHP', 'Laravel', 'MySQL', 'HTML', 'CSS', 'jQuery', 'Python'],
        kind: 'sub',
      },
      {
        from: '2022/12',
        to: '2023/8',
        title: 'クレジットカードアプリ',
        skills: ['SwiftUI', 'Swift', 'XCode', 'OpenAPI', 'Swagger', 'XD'],
        kind: 'main',
      },
      {
        from: '2022/2',
        to: '2022/11',
        title: '不動産ポータルサイト・駐車場管理サイトの設計・モック作成',
        skills: ['XD', 'AWS', 'HTML', 'CSS', 'Javascript'],
        kind: 'main',
      },
      {
        from: '2022/6',
        to: '2022/8',
        title: 'アパレル企業HP・受注システム',
        skills: ['PHP', 'Laravel', 'MySQL', 'HTML', 'CSS', 'jQuery', 'Figma'],
        kind: 'sub',
      },
      {
        from: '2022/2',
        to: '2022/9',
        title: '教育動画アプリ',
        skills: ['Swift', 'Objective-c', 'Open eDX'],
        kind: 'main',
      },
      {
        from: '2021/11',
        to: '2022/2',
        title: '食品工場機器点検システム',
        skills: ['AWS', 'Java', 'SpringBoot', 'HTML', 'CSS', 'JavaScript', 'jQuery'],
        kind: 'main',
      },
      {
        from: '2021/11',
        to: '2021/1',
        title: '装置点検依頼システム',
        skills: ['GAS(Google Apps Script)', 'HTML', 'CSS', 'JavaScript', 'jQuery'],
        kind: 'main',
      },
      {
        from: '2018/1',
        to: '2021/11',
        title: '商品比較ポータルサイト',
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
        title: '福祉施設検索ポータルサイト',
        skills: ['PHP', 'Laravel', 'MySQL', 'HTML', 'CSS', 'jQuery', 'Python'],
        kind: 'sub',
      },
      {
        from: '2021/1',
        to: '2021/4',
        title: '社員管理システム（サーバレスver）',
        skills: ['Vue.js', 'HTML', 'CSS', 'SCSS', 'Firebase', 'CircleCI'],
        kind: 'sub',
      },
      {
        from: '2020/12',
        to: '2021/3',
        title: '個人病院HP作成',
        skills: ['PHP', 'Wordpress', 'MySQL', 'HTML', 'CSS', 'jQuery'],
        kind: 'sub',
      },
      {
        from: '2020/6',
        to: '2020/10',
        title: 'Wastim（趣味アプリ）',
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
        title: 'PDF解析診断ツール',
        skills: ['Python', 'Flask', 'HTML', 'CSS', 'jQuery'],
        kind: 'sub',
      },
      {
        from: '2020/5',
        to: '2020/6',
        title: '鰻屋HPリニューアル',
        skills: ['HTML', 'Pug', 'CSS', 'SCSS', 'jQuery', 'BASE'],
        kind: 'sub',
      },
      {
        from: '2020/3',
        to: '2020/6',
        title: '大学病院治験システムサーバ移行',
        skills: ['PHP', 'Laravel', 'MySQL', 'NTT EnterpriseCloud'],
        kind: 'sub',
      },
      {
        from: '2019/10',
        to: '2019/12',
        title: 'ポートフォリオサイト作成',
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
        title: '広告自動作成ツール決算処理',
        skills: ['PHP', 'Laravel', 'MySQL', 'GMO決済API'],
        kind: 'sub',
      },
      {
        from: '2019/3',
        to: '2019/6',
        title: '鰻屋勤怠システム',
        skills: ['PHP', 'Laravel', 'MySQL', 'Docker', 'HTML', 'CSS', 'JavaScript', 'jQuery'],
        kind: 'sub',
      },
      {
        from: '2019/2',
        to: '2019/3',
        title: '鰻屋HP作成',
        skills: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
        kind: 'sub',
      },
      {
        from: '2019/1',
        to: '2019/5',
        title: '社員管理システム',
        skills: ['PHP', 'Laravel', 'MySQL', 'Docker', 'AWS', 'HTML', 'CSS', 'JavaScript', 'jQuery'],
        kind: 'sub',
      },
      {
        from: '2018/3',
        to: '2018/4',
        title: '自社HP作成',
        skills: ['PHP', 'HTML', 'CSS', 'JavaScript', 'jQuery'],
        kind: 'sub',
      },
      {
        from: '2017/11',
        to: '2018/1',
        title: '運転情報収集システム',
        skills: ['AWS', 'MySQL', 'PHP'],
        kind: 'main',
      },
      {
        from: '2017/6',
        to: '2017/11',
        title: '電力サーバ研究開発',
        skills: [
          'Java',
          'Groovy',
          'Grails',
          'PostgreSQL',
          'OSGI',
          'AWS',
          'HAProxy',
          'Pacemaker+Corosync',
          'RabbitMQ',
          'ShellScript',
        ],
        kind: 'main',
      },
      {
        from: '2016/12',
        to: '2017/6',
        title: '速度測定装置管理ツール',
        skills: ['PHP', 'HTML', 'CSS', 'Canvas', 'JavaScript', 'jQuery'],
        kind: 'main',
      },
      {
        from: '2016/8',
        to: '2016/12',
        title: 'マルチメディア放送アプリモジュール開発',
        skills: ['PHP', 'PostgreSQL'],
        kind: 'main',
      },
      {
        from: '2016/7',
        to: '2016/8',
        title: '調剤薬局向けサイトアプリ',
        skills: ['Android', 'PHP', 'Java', 'HTML'],
        kind: 'main',
      },
      {
        from: '2016/4',
        to: '2016/7',
        title: 'Xumo端末VODアプリ',
        skills: ['Bright Script'],
        kind: 'main',
      },
      {
        from: '2016/2',
        to: '2016/4',
        title: '高速道路映像配信システム',
        skills: ['C#', 'ASP.net'],
        kind: 'main',
      },
    ],
    note: '※守秘義務・機密情報保持の観点から、一部抽象的な表現あり',
  },
  work: {
    title: '制作実績 | FromScratch - 石山雄一 (Yuichi Ishiyama)のポートフォリオサイト',
    description:
      '大阪でWebエンジニアとして活動しております、FromScratch 石山 雄一 (Yuichi Ishiyama) です。個人開発・受託案件等で制作したWebアプリ・Webサイト・名刺など、私の作品集をご紹介。お仕事のご依頼はTwitterやメールにてお待ちしております！',
    explain:
      '個人開発・受託案件等で制作したWebアプリ・Webサイト・名刺などのクリエイティブをご紹介します。',
    tabs: {
      service: 'サービス',
      web: 'Webサイト',
      card: '名刺・その他',
    },
    works: {
      service: [
        {
          prefix: 'tattoo-ja',
          title: 'Tattoo Japan',
          subTitle: 'タトゥースタジオ・タトゥー・刺青がOKな施設の検索サイト',
          overview:
            '「日本におけるタトゥーの偏見を無くしたい！」<br />そんな想いで、タトゥースタジオ・タトゥー・刺青がOKな施設の検索サイト「Tattoo Japan」をリリースしました。<br />要件決めからデザイン、実装まですべて一人で行いました！<br/>今後もメンテナンスおよび機能追加を行っていきたいと考えています。',
          kind: 'Webアプリ',
          skillSet: [
            'HTML/CSS/JS',
            'PWA',
            'React.js',
            'Next.js',
            'Scss',
            'Firebase',
            'Authentication',
            'Firestore',
            'Vircel',
            'Contentful',
            'SSR',
          ],
          link: 'https://tattoo-ja.com',
          imgCount: 1,
        },
        {
          prefix: 'wastim',
          title: 'WasTim',
          subTitle: '自己啓発アプリ',
          overview:
            '自分の１日の評価を数値化し、気づきによる意識改革をサポートする自己啓発サービス「WasTim」を作成しました。<br />サーバレスなWebアプリ開発をしたことがなかったので、GoogleのFirebaseを使用し作成しました。現在進行形で開発中です。Firebase、SSR(server-side-rendering)、PWAなど、最新の技術を使うことを意識し、UI/UXを意識したデザインを心がけました。',
          kind: 'Webアプリ',
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
          subTitle: '医療・福祉・保育の求人プラットフォーム',
          overview:
            '医療・福祉・保育の求人プラットフォーム。medicare-partner「メディケアパートナー」<br />要件定義、設計から、インフラ周り、サイトのデザイン、フロント周りの実装・コーディング、サーバサイドの実装、DB設計など、フルスクラッチで開発しました。<br />チャット、求人応募フロー、マッチングなど、機能満載のサービスになっています。',
          kind: 'Webアプリ',
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
          title: 'care-base「ケアベース」',
          subTitle: '児童・障がい・介護福祉ポータルサイト',
          overview:
            '児童・障がい・介護福祉ポータルサイト care-base「ケアベース」。<br />要件定義、設計から、インフラ周り、サイトのデザイン、フロント周りの実装・コーディング、サーバサイドの実装、DB設計など、全てを一人で行いました。<br />また、フロント画面だけでなく、運営管理、掲載した事業所の管理画面もすべて実装しました。<br />この規模のシステム開発をひとりで行ったのは初めてだったので、とても成長できた案件のひとつです。',
          kind: 'Webアプリ',
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
          subTitle: '支出を認識する自己啓発アプリ',
          overview:
            'ネイティブアプリの勉強のため、「UseD」というお金の支出管理アプリ作成しました。<br>「支出（家賃などどうしても必要な出費）」、「浪費（無駄な出費）」、「投資（意味のある出費）」という3つの種別に分類し、いかに自分のお金の使い方に無駄が多いかということを認識するためのアプリです。',
          kind: 'スマホアプリ',
          skillSet: ['Android Java', 'SQLite', 'Android Studio'],
          link: null,
          imgCount: 2,
        },
        {
          prefix: 'ems',
          title: '社員管理アプリ（サーバレスVer）',
          subTitle: 'SES企業の課題解決！',
          overview:
            '過去Laravelで作成した社員管理システムを、サーバレスでリニューアルしました。また、デザインの一掃、SPA、PWA対応、Googleログインを可能にしました。',
          kind: 'Webアプリ',
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
          title: '社員管理アプリ',
          subTitle: 'SES企業の課題解決！',
          overview:
            'SES(客先常駐)で運営している会社などに起こりうる、社員の顔と名前が一致しないという問題を解決するために作成したWebアプリケーションです。<br>すべての社員に顔写真を登録してもらい、任意でプロフィール情報も登録できます。登録した誕生日や、得意プログラミング言語などで、社員検索や、社員のスキル統計・年代統計のグラフ化なども機能として実装しました。<br>また、Slack(チャットアプリ）との連携により、新入社員登録通知や、エラー通知、アカウント画面からワンクリックでSlackのダイレクトメッセージなどの機能も実装しました。<br><span class="attention">※管理画面の機能については割愛</span>',
          kind: 'Webアプリ',
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
          title: '売上管理システム',
          subTitle: 'エクセル管理の売上管理をシステム化',
          overview:
            '今までエクセルで管理、集計していた売上管理をWebシステム化しました。<br>商品マスタ登録・値引き・単価（物価）変動なども考慮した設計を行いました。<br>また、システムの入力効率化のためできるだけマウスを使用しないでキーボードのみで操作可能とするようなUI・UXも考慮した作りとなっております。',
          kind: 'Webアプリ',
          skillSet: ['PHP', 'Laravel', 'HTML/CSS/JS', 'jQuery', 'Blade', 'Docker', 'MySQL'],
          link: null,
          imgCount: 3,
        },
        {
          prefix: 'kintai',
          title: '勤怠管理システム',
          subTitle: '手書きタイムカードをWebシステム化',
          overview:
            '今まで手書きで入力し、人力で勤怠時間の集計などを行なっていた勤怠管理をWebシステム化しました。<br>手書きのタイムカードの集計による計算ミス、書き忘れ、読み取れないなどの課題を解決すべく、すべてのフローをシステム化しました。<br>店舗ごとの従業員管理や、店舗ごとの勤怠入力画面を用意し、勤務前に店舗に配置しているデバイスより1クリックで出勤・退勤を行えるような設計し、大幅な人件費の削減＆管理精度の向上につながりました。',
          kind: 'Webアプリ',
          skillSet: ['PHP', 'Laravel', 'HTML/CSS/JS', 'jQuery', 'Blade', 'Docker', 'MySQL'],
          link: null,
          imgCount: 2,
        },
      ],
      web: [
        {
          prefix: 'fromscratch',
          title: 'FromScratch',
          subTitle: 'ポートフォリオサイト',
          overview:
            '私のポートフォリオサイトです。FromScratchの由来は、ほぼほぼ独学で、０から(FromScratchで)ここまでやってきたということと、常にハイクオリティのものを追い求めていくべく、テンプレートやフォーマットに任せきりにならず、「0から(FromScratch)!」を意識するという想いから、この名前にしました。',
          kind: 'Webサイト',
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
          subTitle: '総合レザーメーカー',
          overview:
            "総合レザーメーカーの「Y'2 LEATHER」様のホームページを要件定義からデザインおよび開発フェーズを全て一人で請負にて開発しました。<br>Googleカレンダーと連携した予約機能および、商品管理、ブログ、ディーラー様との受注システムも構築しております。",
          kind: 'Webサイト',
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
          title: '医療法人 エリュウ医院',
          subTitle: '耳鼻科ホームページ',
          overview:
            '医療法人 エリュウ医院のWebサイトを作成しました。<br>デザインから開発、実装まですべてを行い、Wordpressにて独自テンプレートを作成し、お知らせブログ機能や、診療日時等を管理できる機能を実装しました。',
          kind: 'Webサイト',
          skillSet: ['PHP', 'Wordpress', 'HTML/CSS/JS', 'jQuery', 'XD', 'Photoshop'],
          link: 'https://eryu-clinic.main.jp/',
          imgCount: 2,
        },
        {
          prefix: 'kyo-dpi',
          title: '筐.dpi',
          subTitle: 'クリエイティブ制作会社',
          overview:
            'マーケティングにおけるクリエイティブ制作を専門に行う、筐.dpi様のコーポレートサイトを作成しました。',
          kind: 'Website',
          skillSet: ['PHP', 'Wordpress', 'HTML/CSS/JS', 'jQuery', 'XD'],
          link: null,
          imgCount: 2,
        },
        {
          prefix: 'pp',
          title: '株式会社P&Pコンサルティング',
          subTitle: 'コンサルティング会社',
          overview:
            'インフルエンサーマーケティングを中心としたコンサルティング会社「株式会社P&Pコンサルティング」のコーポレートサイトを作成しました。',
          kind: 'Website',
          skillSet: ['PHP', 'Wordpress', 'HTML/CSS/JS', 'jQuery', 'XD'],
          link: null,
          imgCount: 1,
        },
        {
          prefix: 'unaman',
          title: '江戸焼うなぎ専門店 鰻萬',
          subTitle: '飲食店ホームページ',
          overview:
            'うなぎ専門店舗のWebサイトの企画から開発、実装まですべてを行いました。通販サイトは、BASEというSaaSを使用しております。ちなみに私の副業案件第一号です。',
          kind: 'Webサイト',
          skillSet: ['HTML/CSS/JS', 'Pug', 'Scss', 'jQuery', 'XD', 'Photoshop'],
          link: 'http://unaman-d.com/',
          imgCount: 2,
        },
        {
          prefix: 'relation',
          title: '株式会社relation',
          subTitle: 'SES企業ホームページ',
          overview:
            '株式会社relationのWebサイトを作成しました。<br>企画から開発、実装まですべてを行い、新着情報用の独自CMSも実装しました。',
          kind: 'Webサイト',
          skillSet: ['HTML/CSS/JS', 'PHP', 'jQuery', 'Bootstrap'],
          link: null,
          imgCount: 2,
        },
        {
          prefix: 'hato',
          title: 'はと君GPS',
          subTitle: 'ランディングページ',
          overview: '「はと君GPS」のランディングページのデザイン＆コーディングを行いました。',
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
            '私のプライベート名刺です。<br>ロゴデザインと名刺デザインを行いました。ロゴのコンセプトはFromScratch(0から）で、円(ゼロ)と三角形(矢印)によりFromScratch(0から)をイメージして作成しております。',
          kind: '名刺',
          skillSet: ['ロゴデザイン', 'Photoshop'],
          link: null,
          imgCount: 2,
        },
        {
          prefix: 'erm',
          title: 'e.r.m electricity',
          subTitle: null,
          overview:
            'エアコン工事・電気工事会社 e.r.m electricityのロゴデザインと名刺デザインを行いました。',
          kind: '名刺',
          skillSet: ['ロゴデザイン', 'Photoshop'],
          link: null,
          imgCount: 2,
        },
        {
          prefix: 'nr',
          title: 'NR',
          subTitle: null,
          overview: 'スポーツインストラクターである同級生のロゴ・個人名刺デザインを行いました。',
          kind: '名刺',
          skillSet: ['ロゴデザイン', 'Photoshop'],
          link: null,
          imgCount: 1,
        },
        {
          prefix: 'ch-create',
          title: 'ch.create',
          subTitle: null,
          overview: '電気・施工会社 ch.createのロゴデザインと名刺デザインを行いました。',
          kind: '名刺',
          skillSet: ['ロゴデザイン', 'Photoshop'],
          link: null,
          imgCount: 1,
        },
        {
          prefix: 'tz-auto',
          title: "T'z Auto",
          subTitle: null,
          overview: "自動車整備会社 T'z Autoのロゴデザインと名刺デザインを行いました。",
          kind: '名刺',
          skillSet: ['ロゴデザイン', 'Photoshop'],
          link: null,
          imgCount: 2,
        },
      ],
    },
    note: '※守秘義務・機密情報保持の観点から、一部テストデータのキャプチャ含む',
  },
  blog: {
    title: 'ブログ | FromScratch - 石山雄一 (Yuichi Ishiyama)の技術ブログ',
    description:
      '大阪でWebエンジニアとして活動しております、FromScratch 石山 雄一 (Yuichi Ishiyama) です。プログラミング関連の技術ブログから、業務効率やモチベーションアップにつながるツールやガジェット関連などの配信をしております。',
    explain:
      'プログラミング関連の技術記事から、業務効率やモチベーションアップにつながるツール・ガジェット関連・その他諸々の配信をしております。是非ご覧ください。',
    info: 'お仕事のご依頼はTwitterのDMもしくは、メールにてご相談ください！',
    noArticles: '記事がありません。',
    recommend: 'おすすめコンテンツ',
    share: 'この記事をシェアする',
  },
};

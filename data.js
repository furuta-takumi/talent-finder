// data.js - 社員データと資格マスター

// --- 資格マスターデータ（PDF「奨励資格一覧」より抜粋・整理） ---
const officialCerts = [
    // --- 情報処理推進機構 (IPA) ---
    "ITパスポート試験(IP)",
    "情報セキュリティマネジメント試験(SG)",
    "基本情報技術者試験(FE)",
    "応用情報技術者試験(AP)",
    "ITストラテジスト試験(ST)",
    "システムアーキテクト試験(SA)",
    "プロジェクトマネージャ試験(PM)",
    "ネットワークスペシャリスト試験(NW)",
    "データベーススペシャリスト試験(DB)",
    "エンベデッドシステムスペシャリスト試験(ES)",
    "ITサービスマネージャ試験(SM)",
    "システム監査技術者試験(AU)",
    "情報処理安全確保支援士(SC)",

    // --- ベンダー資格 (AWS) ---
    "AWS Certified Solutions Architect - Professional",
    "AWS Certified DevOps Engineer - Professional",
    "AWS Certified Advanced Networking - Specialty",
    "AWS Certified Security - Specialty",
    "AWS Certified Machine Learning - Specialty",
    "AWS Certified Solutions Architect - Associate",
    "AWS Certified Developer - Associate",
    "AWS Certified SysOps Administrator - Associate",
    "AWS Certified Cloud Practitioner",

    // --- ベンダー資格 (Google Cloud) ---
    "Google Cloud Certified Professional Cloud Architect",
    "Google Cloud Certified Professional Data Engineer",
    "Google Cloud Certified Professional Cloud Developer",
    "Google Cloud Certified Professional Cloud DevOps Engineer",
    "Google Cloud Certified Professional Cloud Security Engineer",
    "Google Cloud Certified Professional Cloud Network Engineer",
    "Google Cloud Certified Associate Cloud Engineer",
    "Google Cloud Certified Cloud Digital Leader",

    // --- ベンダー資格 (Oracle / MySQL) ---
    "ORACLE MASTER Platinum DBA 2019",
    "ORACLE MASTER Gold DBA 2019",
    "ORACLE MASTER Silver DBA 2019",
    "ORACLE MASTER Bronze DBA 2019",
    "ORACLE MASTER Silver SQL 2019",
    "Oracle Certified Java Programmer, Gold SE 11",
    "Oracle Certified Java Programmer, Silver SE 11",
    "MySQL Database Administrator",
    "MySQL Developer",

    // --- ベンダー資格 (Microsoft / Azure) ---
    "Microsoft Certified: Azure Solutions Architect Expert",
    "Microsoft Certified: Azure Administrator Associate",
    "Microsoft Certified: Azure Developer Associate",
    "Microsoft Certified: Azure Fundamentals",
    "マイクロソフト関連の資格(上級)",
    "マイクロソフト関連の資格(中級)",
    "マイクロソフト関連の資格(初級)",

    // --- ベンダー資格 (その他: Cisco, LPI, Python, etc.) ---
    "CCIE Enterprise Infrastructure",
    "CCNP Enterprise",
    "CCNA",
    "LPIC レベル3",
    "LPIC レベル2",
    "LPIC レベル1",
    "LinuC レベル3",
    "LinuC レベル2",
    "LinuC レベル1",
    "Python エンジニア認定データ分析試験",
    "Python エンジニア認定基礎試験",
    "Salesforce 認定アドミニストレーター",
    "Salesforce 認定Sales Cloudコンサルタント",
    "ServiceNow Certified System Administrator",
    "ServiceNow Certified Application Developer",
    "UiPath Certified Professional Automation Developer Professional",

    // --- マネジメント・ビジネス・その他 ---
    "PMP",
    "CBAP",
    "ITコーディネータ",
    "中小企業診断士",
    "日商簿記(1級)",
    "日商簿記(2級)",
    "日商簿記(3級)",
    "ビジネス実務法務(1級)",
    "ビジネス実務法務(2級)",
    "TOEIC(900点以上)",
    "TOEIC(800点以上)",
    "TOEIC(700点以上)",
    "統計検定(1級)",
    "統計検定(2級)",
    "G検定 (JDLA Deep Learning for GENERAL)",
    "E資格 (JDLA Deep Learning for ENGINEER)",
    "ウェブデザイン技能検定(1級)",
    "ウェブデザイン技能検定(2級)"
];

// --- 社員データ（30名分：資格名をマスターに合わせて修正済み） ---
const users = [
    // --- BI事業部 ---
    {
        id: 1, name: "田中 太郎", kana: "タナカ タロウ",
        dept: "BI事業部", role: "部長 / 2010年入社",
        skills: ["データ戦略", "Python", "マネジメント"], 
        // Google Cloud PCA -> 正式名称へ, 統計検定1級 -> そのまま
        certs: ["Google Cloud Certified Professional Cloud Architect", "統計検定(1級)"],
        hobbies: ["ゴルフ", "サウナ"], comment: "データドリブンな意思決定を支援します。", bio: "長年データ分析基盤の構築に従事。現在は全社のデータ活用推進を担当。", email: "tanaka@example.com"
    },
    {
        id: 2, name: "渡辺 健一", kana: "ワタナベ ケンイチ",
        dept: "BI事業部", role: "リーダー / 2015年入社",
        skills: ["SQL", "BigQuery", "Tableau"], 
        // Google Cloud PDE, Oracle Master Gold -> 正式名称へ
        certs: ["Google Cloud Certified Professional Data Engineer", "ORACLE MASTER Gold DBA 2019"],
        hobbies: ["将棋", "読書"], comment: "数字の裏にあるストーリーを見つけるのが好きです。", bio: "前職はマーケティング会社でアナリストをしていました。", email: "watanabe.k@example.com"
    },
    {
        id: 3, name: "松本 あゆみ", kana: "マツモト アユミ",
        dept: "BI事業部", role: "メンバー / 2019年入社",
        skills: ["PowerBI", "Excel VBA", "数学"], 
        // MOS Expert -> マイクロソフト関連(上級)へ変更, 統計検定2級 -> そのまま
        certs: ["マイクロソフト関連の資格(上級)", "統計検定(2級)"],
        hobbies: ["カフェ巡り", "ピアノ"], comment: "ダッシュボードのデザインにもこだわってます。", bio: "可視化ツールの導入支援と社内研修の講師を担当。", email: "matsumoto.a@example.com"
    },
    {
        id: 4, name: "小川 亮太", kana: "オガワ リョウタ",
        dept: "BI事業部", role: "メンバー / 2021年入社",
        skills: ["Python", "機械学習", "AI"], 
        // G検定, E資格, Python認定 -> 正式名称へ
        certs: ["G検定 (JDLA Deep Learning for GENERAL)", "E資格 (JDLA Deep Learning for ENGINEER)", "Python エンジニア認定基礎試験"],
        hobbies: ["e-sports", "自作PC"], comment: "Kaggleでメダル目指して勉強中！", bio: "予測モデルの構築やAIエンジンの検証を行っています。", email: "ogawa@example.com"
    },
    {
        id: 5, name: "藤田 誠", kana: "フジタ マコト",
        dept: "BI事業部", role: "シニア / 2013年入社",
        skills: ["データ設計", "ETL", "AWS"], 
        // AWS SAP, GCP ACE -> 正式名称へ
        certs: ["AWS Certified Solutions Architect - Professional", "Google Cloud Certified Associate Cloud Engineer"],
        hobbies: ["釣り", "キャンプ"], comment: "週末は海にいます。", bio: "大規模データのパイプライン設計が得意です。", email: "fujita@example.com"
    },
    {
        id: 6, name: "原田 ナオ", kana: "ハラダ ナオ",
        dept: "BI事業部", role: "メンバー / 2023年入社",
        skills: ["R言語", "英語", "リサーチ"], 
        // TOEIC, 社会調査士(リスト外) -> 統計検定2級に変更
        certs: ["TOEIC(900点以上)", "統計検定(2級)"],
        hobbies: ["旅行", "写真"], comment: "新しい分析手法をキャッチアップ中です。", bio: "新卒入社。大学では社会統計学を専攻していました。", email: "harada@example.com"
    },
    // --- DI事業部 ---
    {
        id: 7, name: "佐藤 花子", kana: "サトウ ハナコ",
        dept: "DI事業部", role: "課長 / 2014年入社",
        skills: ["DX推進", "Scrum", "Jira"], 
        // PMP, Scrum Master(リスト外) -> PMP, ITコーディネータへ
        certs: ["PMP", "ITコーディネータ", "ServiceNow Certified System Administrator"],
        hobbies: ["ヨガ", "観葉植物"], comment: "アジャイルな開発組織を作っていきましょう。", bio: "複数のDXプロジェクトをマネジメントしています。", email: "sato@example.com"
    },
    {
        id: 8, name: "鈴木 一郎", kana: "スズキ イチロウ",
        dept: "DI事業部", role: "テックリード / 2016年入社",
        skills: ["Java", "Spring", "マイクロサービス"], 
        // Oracle Java Gold, AWS SAA -> 正式名称へ
        certs: ["Oracle Certified Java Programmer, Gold SE 11", "AWS Certified Solutions Architect - Associate"],
        hobbies: ["野球観戦", "個人開発"], comment: "技術的な相談はいつでもどうぞ。", bio: "レガシーシステムからのマイグレーション案件を主導。", email: "suzuki@example.com"
    },
    {
        id: 9, name: "高橋 優", kana: "タカハシ ユウ",
        dept: "DI事業部", role: "メンバー / 2020年入社",
        skills: ["React", "TypeScript", "UI/UX"], 
        // HTML5, Webデザイン -> ウェブデザイン技能検定へ
        certs: ["ウェブデザイン技能検定(1級)", "HTML5プロフェッショナル認定資格 Level2"],
        hobbies: ["映画鑑賞", "美術館"], comment: "使いやすいUIコンポーネントを整備中。", bio: "フロントエンド領域を専門としています。", email: "takahashi.y@example.com"
    },
    {
        id: 10, name: "中村 拓也", kana: "ナカムラ タクヤ",
        dept: "DI事業部", role: "メンバー / 2022年入社",
        skills: ["Go言語", "Docker", "Kubernetes"], 
        // CKA, GCP ACE -> 正式名称へ
        certs: ["Kubernetes管理者認定(CKA)", "Google Cloud Certified Associate Cloud Engineer"],
        hobbies: ["バイク", "サウナ"], comment: "コンテナ技術のことなら任せてください。", bio: "バックエンド開発とDevOps環境の整備を担当。", email: "nakamura@example.com"
    },
    {
        id: 11, name: "村上 舞", kana: "ムラカミ マイ",
        dept: "DI事業部", role: "メンバー / 2023年入社",
        skills: ["Flutter", "スマホアプリ", "Swift"], 
        // Android技術者, ServiceNow -> 正式名称へ
        certs: ["Android技術者認定試験 プロフェッショナル", "ServiceNow Certified Application Developer"],
        hobbies: ["ダンス", "Tiktok"], comment: "モバイルアプリ開発が楽しいです！", bio: "iOS/Androidのクロスプラットフォーム開発に挑戦中。", email: "murakami@example.com"
    },
    {
        id: 12, name: "西田 健司", kana: "ニシダ ケンジ",
        dept: "DI事業部", role: "シニア / 2012年入社",
        skills: ["アーキテクチャ", "クラウド", "ServiceNow"], 
        // ServiceNow CTA, GCP PCA, AWS SAP -> 正式名称へ
        certs: ["ServiceNow Certified Technical Architect (CTA)", "Google Cloud Certified Professional Cloud Architect", "AWS Certified Solutions Architect - Professional"],
        hobbies: ["登山", "ワイン"], comment: "堅牢で拡張性の高い設計を心がけています。", bio: "金融機関向けシステム開発のPMを歴任。", email: "nishida@example.com"
    },
    // --- SS事業部 ---
    {
        id: 13, name: "伊藤 大輔", kana: "イトウ ダイスケ",
        dept: "SS事業部", role: "部長 / 2008年入社",
        skills: ["プロジェクト管理", "顧客折衝", "要件定義"], 
        // PM, システム監査 -> 正式名称へ
        certs: ["プロジェクトマネージャ試験(PM)", "システム監査技術者試験(AU)"],
        hobbies: ["マラソン", "歴史小説"], comment: "お客様の課題解決が第一です。", bio: "官公庁向けの大規模システム導入プロジェクトを統括。", email: "ito@example.com"
    },
    {
        id: 14, name: "山本 さくら", kana: "ヤマモト サクラ",
        dept: "SS事業部", role: "リーダー / 2017年入社",
        skills: ["C#", ".NET", "SQL Server"], 
        // Oracle Silver, FE -> 正式名称へ
        certs: ["ORACLE MASTER Silver DBA 2019", "基本情報技術者試験(FE)"],
        hobbies: ["パン作り", "ガーデニング"], comment: "丁寧なヒアリングを心がけています。", bio: "業務系アプリケーションの設計・開発リーダー。", email: "yamamoto@example.com"
    },
    {
        id: 15, name: "加藤 翔太", kana: "カトウ ショウタ",
        dept: "SS事業部", role: "メンバー / 2019年入社",
        skills: ["Linux", "サーバー構築", "ネットワーク"], 
        // LinuC 2, CCNA, NW -> 正式名称へ
        certs: ["LinuC レベル2", "CCNA", "ネットワークスペシャリスト試験(NW)"],
        hobbies: ["フットサル", "キャンプ"], comment: "インフラ周りのトラブルシューティングはお任せを。", bio: "オンプレミスからクラウドへの移行案件を担当。", email: "kato@example.com"
    },
    {
        id: 16, name: "木村 美咲", kana: "キムラ ミサキ",
        dept: "SS事業部", role: "メンバー / 2021年入社",
        skills: ["テスト設計", "品質管理", "Selenium"], 
        // JSTQB, ITパスポート -> 正式名称へ
        certs: ["JSTQB認定テスト技術者 (Foundation Level)", "ITパスポート試験(IP)"],
        hobbies: ["ネイル", "韓国ドラマ"], comment: "バグは見逃しません！", bio: "QAエンジニアとして品質保証プロセスを改善中。", email: "kimura@example.com"
    },
    {
        id: 17, name: "山口 達也", kana: "ヤマグチ タツヤ",
        dept: "SS事業部", role: "メンバー / 2022年入社",
        skills: ["PHP", "Laravel", "MySQL"], 
        // PHP認定, Oracle Bronze -> 正式名称へ
        certs: ["PHP技術者認定資格 初級試験", "ORACLE MASTER Bronze DBA 2019"],
        hobbies: ["ギター", "ライブ"], comment: "Webシステムの改修を担当しています。", bio: "ECサイトのバックエンド開発に従事。", email: "yamaguchi@example.com"
    },
    {
        id: 18, name: "森田 浩二", kana: "モリタ コウジ",
        dept: "SS事業部", role: "シニア / 2011年入社",
        skills: ["セキュリティ", "監査", "リスク管理"], 
        // SC, CISA(リスト外) -> SC, システム監査へ
        certs: ["情報処理安全確保支援士(SC)", "システム監査技術者試験(AU)"],
        hobbies: ["ロードバイク", "DIY"], comment: "セキュリティ対策の相談受付中です。", bio: "社内外のセキュリティ監査対応や脆弱性診断を担当。", email: "morita@example.com"
    },
    // --- 事業推進部 ---
    {
        id: 19, name: "小林 エリカ", kana: "コバヤシ エリカ",
        dept: "事業推進部", role: "マネージャー / 2015年入社",
        skills: ["マーケティング", "広報", "ブランディング"], 
        // マーケ検定, Google Analytics IQ -> マーケティング・ビジネス実務検定(B級)
        certs: ["マーケティング・ビジネス実務検定(B級)", "ウェブ解析士"],
        hobbies: ["海外旅行", "ワイン"], comment: "自社の魅力を社外に発信しています。", bio: "オウンドメディアの立ち上げと運営を担当。", email: "kobayashi.e@example.com"
    },
    {
        id: 20, name: "斎藤 剛", kana: "サイトウ ツヨシ",
        dept: "事業推進部", role: "リーダー / 2018年入社",
        skills: ["新規事業", "企画書作成", "営業"], 
        // 中小企業診断士, ST -> そのまま
        certs: ["中小企業診断士", "ITストラテジスト試験(ST)"],
        hobbies: ["サウナ", "筋トレ"], comment: "新しいビジネスの種を探しています。", bio: "パートナー企業とのアライアンス提携を推進。", email: "saito@example.com"
    },
    {
        id: 21, name: "井上 玲奈", kana: "イノウエ レナ",
        dept: "事業推進部", role: "メンバー / 2020年入社",
        skills: ["SNS運用", "ライティング", "デザイン"], 
        // 色彩検定(リスト外), Illustrator -> ウェブデザイン検定2級へ
        certs: ["ウェブデザイン技能検定(2級)", "マーケティング・ビジネス実務検定(C級)"],
        hobbies: ["インスタ", "カフェ"], comment: "公式Twitterの中の人です。", bio: "SNSマーケティングとイベント企画を担当。", email: "inoue@example.com"
    },
    {
        id: 22, name: "長谷川 純", kana: "ハセガワ ジュン",
        dept: "事業推進部", role: "メンバー / 2022年入社",
        skills: ["インサイドセールス", "CRM", "Salesforce"], 
        // Salesforce Admin -> 正式名称へ
        certs: ["Salesforce 認定アドミニストレーター"],
        hobbies: ["バスケ", "スニーカー"], comment: "お客様との最初の接点を大切にしています。", bio: "見込み顧客へのアプローチと商談設定を担当。", email: "hasegawa@example.com"
    },
    {
        id: 23, name: "岡田 真理", kana: "オカダ マリ",
        dept: "事業推進部", role: "メンバー / 2023年入社",
        skills: ["市場調査", "英語", "資料作成"], 
        // TOEIC 850, 秘書検定 -> リストに合わせて
        certs: ["TOEIC(800点以上)", "秘書検定(準1級)"],
        hobbies: ["料理", "紅茶"], comment: "マーケットリサーチを担当しています。", bio: "競合調査や資料作成のサポートを行っています。", email: "okada@example.com"
    },
    {
        id: 24, name: "金子 裕介", kana: "カネコ ユウスケ",
        dept: "事業推進部", role: "メンバー / 2019年入社",
        skills: ["動画編集", "PremierePro", "YouTube"], 
        // Adobe認定(リスト外), ドローン(リスト外) -> ウェブデザイン検定等に置換
        certs: ["ウェブデザイン技能検定(2級)", "ITパスポート試験(IP)"],
        hobbies: ["ドローン", "キャンプ"], comment: "採用動画の編集もやってます。", bio: "プロモーションビデオの制作ディレクションを担当。", email: "kaneko@example.com"
    },
    // --- 管理部 ---
    {
        id: 25, name: "吉田 愛", kana: "ヨシダ アイ",
        dept: "管理部", role: "課長 / 2010年入社",
        skills: ["人事", "労務", "メンタルヘルス"], 
        // 社労士, 衛生管理者 -> 正式名称へ
        certs: ["社会保険労務士", "第一種衛生管理者"],
        hobbies: ["ヨガ", "猫"], comment: "社員が働きやすい環境を作ります。", bio: "人事評価制度の設計と運用を担当。", email: "yoshida.a@example.com"
    },
    {
        id: 26, name: "三浦 健太", kana: "ミウラ ケンタ",
        dept: "管理部", role: "リーダー / 2016年入社",
        skills: ["経理", "決算", "財務分析"], 
        // 簿記1級, 税理士(リスト外) -> 簿記1級, 2級
        certs: ["日商簿記(1級)", "日商簿記(2級)"],
        hobbies: ["麻雀", "ラーメン"], comment: "経費精算はお早めにお願いします！", bio: "月次・年次決算業務と監査対応を担当。", email: "miura@example.com"
    },
    {
        id: 27, name: "佐々木 希", kana: "ササキ ノゾミ",
        dept: "管理部", role: "メンバー / 2018年入社",
        skills: ["総務", "備品管理", "イベント運営"], 
        // 秘書検定, 防火管理者(リスト外) -> 秘書検定1級, 衛生管理者2種
        certs: ["秘書検定(1級)", "第二種衛生管理者"],
        hobbies: ["手芸", "お菓子作り"], comment: "オフィスの備品で欲しいものがあれば言ってください。", bio: "ファシリティマネジメントと社内イベント運営を担当。", email: "sasaki@example.com"
    },
    {
        id: 28, name: "工藤 慎吾", kana: "クドウ シンゴ",
        dept: "管理部", role: "メンバー / 2021年入社",
        skills: ["法務", "契約書チェック", "コンプライアンス"], 
        // 行政書士(リスト外), ビジネス実務法務 -> ビジネス実務法務1級へ
        certs: ["ビジネス実務法務(1級)", "宅地建物取引士"],
        hobbies: ["将棋", "歴史"], comment: "契約周りの相談はチャットでどうぞ。", bio: "契約審査と社内規定の整備を担当。", email: "kudo@example.com"
    },
    {
        id: 29, name: "野口 明美", kana: "ノグチ アケミ",
        dept: "管理部", role: "メンバー / 2014年入社",
        skills: ["採用", "新卒研修", "キャリアカウンセラー"], 
        // キャリアコンサルタント, 産業カウンセラー -> 正式名称へ
        certs: ["キャリアコンサルタント", "産業カウンセラー"],
        hobbies: ["テニス", "温泉"], comment: "新入社員の成長を見るのが楽しみです。", bio: "新卒・中途採用の実務と研修プログラム企画。", email: "noguchi@example.com"
    },
    {
        id: 30, name: "橋本 哲也", kana: "ハシモト テツヤ",
        dept: "管理部", role: "メンバー / 2023年入社",
        skills: ["情シス", "PCセットアップ", "ヘルプデスク"], 
        // ITパスポート, Google IT Support(リスト外) -> ITパスポート, CompTIA
        certs: ["ITパスポート試験(IP)", "CompTIA (A+)"],
        hobbies: ["ゲーム", "アニメ"], comment: "PCの調子が悪い時は声をかけてください。", bio: "社内IT機器の管理とアカウント発行業務を担当。", email: "hashimoto@example.com"
    }
];

// 共通関数
function getUserIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}
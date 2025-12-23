// data.js - 社員データ（30名分）
const users = [
    // --- BI事業部 ---
    {
        id: 1, name: "田中 太郎", kana: "タナカ タロウ",
        dept: "BI事業部", role: "部長 / 2010年入社",
        skills: ["データ戦略", "Python", "マネジメント"], certs: ["Google Cloud PCA", "統計検定1級"],
        hobbies: ["ゴルフ", "サウナ"], comment: "データドリブンな意思決定を支援します。", bio: "長年データ分析基盤の構築に従事。現在は全社のデータ活用推進を担当。", email: "tanaka@example.com"
    },
    {
        id: 2, name: "渡辺 健一", kana: "ワタナベ ケンイチ",
        dept: "BI事業部", role: "リーダー / 2015年入社",
        skills: ["SQL", "BigQuery", "Tableau"], certs: ["Google Cloud PDE", "Oracle Master Gold"],
        hobbies: ["将棋", "読書"], comment: "数字の裏にあるストーリーを見つけるのが好きです。", bio: "前職はマーケティング会社でアナリストをしていました。", email: "watanabe.k@example.com"
    },
    {
        id: 3, name: "松本 あゆみ", kana: "マツモト アユミ",
        dept: "BI事業部", role: "メンバー / 2019年入社",
        skills: ["PowerBI", "Excel VBA", "数学"], certs: ["MOS Expert", "統計検定2級"],
        hobbies: ["カフェ巡り", "ピアノ"], comment: "ダッシュボードのデザインにもこだわってます。", bio: "可視化ツールの導入支援と社内研修の講師を担当。", email: "matsumoto.a@example.com"
    },
    {
        id: 4, name: "小川 亮太", kana: "オガワ リョウタ",
        dept: "BI事業部", role: "メンバー / 2021年入社",
        skills: ["Python", "機械学習", "AI"], certs: ["G検定", "E資格", "Python 3 エンジニア認定"],
        hobbies: ["e-sports", "自作PC"], comment: "Kaggleでメダル目指して勉強中！", bio: "予測モデルの構築やAIエンジンの検証を行っています。", email: "ogawa@example.com"
    },
    {
        id: 5, name: "藤田 誠", kana: "フジタ マコト",
        dept: "BI事業部", role: "シニア / 2013年入社",
        skills: ["データ設計", "ETL", "AWS"], certs: ["AWS SAP", "Google Cloud ACE"],
        hobbies: ["釣り", "キャンプ"], comment: "週末は海にいます。", bio: "大規模データのパイプライン設計が得意です。", email: "fujita@example.com"
    },
    {
        id: 6, name: "原田 ナオ", kana: "ハラダ ナオ",
        dept: "BI事業部", role: "メンバー / 2023年入社",
        skills: ["R言語", "英語", "リサーチ"], certs: ["TOEIC 900点", "社会調査士"],
        hobbies: ["旅行", "写真"], comment: "新しい分析手法をキャッチアップ中です。", bio: "新卒入社。大学では社会統計学を専攻していました。", email: "harada@example.com"
    },
    // --- DI事業部 ---
    {
        id: 7, name: "佐藤 花子", kana: "サトウ ハナコ",
        dept: "DI事業部", role: "課長 / 2014年入社",
        skills: ["DX推進", "Scrum", "Jira"], certs: ["PMP", "Certified Scrum Master", "ServiceNow CSA"],
        hobbies: ["ヨガ", "観葉植物"], comment: "アジャイルな開発組織を作っていきましょう。", bio: "複数のDXプロジェクトをマネジメントしています。", email: "sato@example.com"
    },
    {
        id: 8, name: "鈴木 一郎", kana: "スズキ イチロウ",
        dept: "DI事業部", role: "テックリード / 2016年入社",
        skills: ["Java", "Spring", "マイクロサービス"], certs: ["Oracle Certified Java Gold", "AWS SAA"],
        hobbies: ["野球観戦", "個人開発"], comment: "技術的な相談はいつでもどうぞ。", bio: "レガシーシステムからのマイグレーション案件を主導。", email: "suzuki@example.com"
    },
    {
        id: 9, name: "高橋 優", kana: "タカハシ ユウ",
        dept: "DI事業部", role: "メンバー / 2020年入社",
        skills: ["React", "TypeScript", "UI/UX"], certs: ["HTML5プロフェッショナル", "ウェブデザイン技能士"],
        hobbies: ["映画鑑賞", "美術館"], comment: "使いやすいUIコンポーネントを整備中。", bio: "フロントエンド領域を専門としています。", email: "takahashi.y@example.com"
    },
    {
        id: 10, name: "中村 拓也", kana: "ナカムラ タクヤ",
        dept: "DI事業部", role: "メンバー / 2022年入社",
        skills: ["Go言語", "Docker", "Kubernetes"], certs: ["CKA (Kubernetes)", "Google Cloud ACE"],
        hobbies: ["バイク", "サウナ"], comment: "コンテナ技術のことなら任せてください。", bio: "バックエンド開発とDevOps環境の整備を担当。", email: "nakamura@example.com"
    },
    {
        id: 11, name: "村上 舞", kana: "ムラカミ マイ",
        dept: "DI事業部", role: "メンバー / 2023年入社",
        skills: ["Flutter", "スマホアプリ", "Swift"], certs: ["Android技術者認定", "ServiceNow CAD"],
        hobbies: ["ダンス", "Tiktok"], comment: "モバイルアプリ開発が楽しいです！", bio: "iOS/Androidのクロスプラットフォーム開発に挑戦中。", email: "murakami@example.com"
    },
    {
        id: 12, name: "西田 健司", kana: "ニシダ ケンジ",
        dept: "DI事業部", role: "シニア / 2012年入社",
        skills: ["アーキテクチャ", "クラウド", "ServiceNow"], certs: ["ServiceNow CTA", "Google Cloud PCA", "AWS SAP"],
        hobbies: ["登山", "ワイン"], comment: "堅牢で拡張性の高い設計を心がけています。", bio: "金融機関向けシステム開発のPMを歴任。", email: "nishida@example.com"
    },
    // --- SS事業部 ---
    {
        id: 13, name: "伊藤 大輔", kana: "イトウ ダイスケ",
        dept: "SS事業部", role: "部長 / 2008年入社",
        skills: ["プロジェクト管理", "顧客折衝", "要件定義"], certs: ["プロジェクトマネージャ試験", "システム監査技術者"],
        hobbies: ["マラソン", "歴史小説"], comment: "お客様の課題解決が第一です。", bio: "官公庁向けの大規模システム導入プロジェクトを統括。", email: "ito@example.com"
    },
    {
        id: 14, name: "山本 さくら", kana: "ヤマモト サクラ",
        dept: "SS事業部", role: "リーダー / 2017年入社",
        skills: ["C#", ".NET", "SQL Server"], certs: ["Oracle Master Silver", "基本情報技術者"],
        hobbies: ["パン作り", "ガーデニング"], comment: "丁寧なヒアリングを心がけています。", bio: "業務系アプリケーションの設計・開発リーダー。", email: "yamamoto@example.com"
    },
    {
        id: 15, name: "加藤 翔太", kana: "カトウ ショウタ",
        dept: "SS事業部", role: "メンバー / 2019年入社",
        skills: ["Linux", "サーバー構築", "ネットワーク"], certs: ["LinuC Level 2", "Cisco CCNA", "ネットワークスペシャリスト"],
        hobbies: ["フットサル", "キャンプ"], comment: "インフラ周りのトラブルシューティングはお任せを。", bio: "オンプレミスからクラウドへの移行案件を担当。", email: "kato@example.com"
    },
    {
        id: 16, name: "木村 美咲", kana: "キムラ ミサキ",
        dept: "SS事業部", role: "メンバー / 2021年入社",
        skills: ["テスト設計", "品質管理", "Selenium"], certs: ["JSTQB (テスト技術者)", "ITパスポート"],
        hobbies: ["ネイル", "韓国ドラマ"], comment: "バグは見逃しません！", bio: "QAエンジニアとして品質保証プロセスを改善中。", email: "kimura@example.com"
    },
    {
        id: 17, name: "山口 達也", kana: "ヤマグチ タツヤ",
        dept: "SS事業部", role: "メンバー / 2022年入社",
        skills: ["PHP", "Laravel", "MySQL"], certs: ["PHP技術者認定", "Oracle Master Bronze"],
        hobbies: ["ギター", "ライブ"], comment: "Webシステムの改修を担当しています。", bio: "ECサイトのバックエンド開発に従事。", email: "yamaguchi@example.com"
    },
    {
        id: 18, name: "森田 浩二", kana: "モリタ コウジ",
        dept: "SS事業部", role: "シニア / 2011年入社",
        skills: ["セキュリティ", "監査", "リスク管理"], certs: ["情報処理安全確保支援士", "CISA (公認情報システム監査人)"],
        hobbies: ["ロードバイク", "DIY"], comment: "セキュリティ対策の相談受付中です。", bio: "社内外のセキュリティ監査対応や脆弱性診断を担当。", email: "morita@example.com"
    },
    // --- 事業推進部 ---
    {
        id: 19, name: "小林 エリカ", kana: "コバヤシ エリカ",
        dept: "事業推進部", role: "マネージャー / 2015年入社",
        skills: ["マーケティング", "広報", "ブランディング"], certs: ["マーケティング検定", "Google Analytics IQ"],
        hobbies: ["海外旅行", "ワイン"], comment: "自社の魅力を社外に発信しています。", bio: "オウンドメディアの立ち上げと運営を担当。", email: "kobayashi.e@example.com"
    },
    {
        id: 20, name: "斎藤 剛", kana: "サイトウ ツヨシ",
        dept: "事業推進部", role: "リーダー / 2018年入社",
        skills: ["新規事業", "企画書作成", "営業"], certs: ["中小企業診断士", "ITストラテジスト"],
        hobbies: ["サウナ", "筋トレ"], comment: "新しいビジネスの種を探しています。", bio: "パートナー企業とのアライアンス提携を推進。", email: "saito@example.com"
    },
    {
        id: 21, name: "井上 玲奈", kana: "イノウエ レナ",
        dept: "事業推進部", role: "メンバー / 2020年入社",
        skills: ["SNS運用", "ライティング", "デザイン"], certs: ["色彩検定2級", "Illustratorクリエイター能力認定"],
        hobbies: ["インスタ", "カフェ"], comment: "公式Twitterの中の人です。", bio: "SNSマーケティングとイベント企画を担当。", email: "inoue@example.com"
    },
    {
        id: 22, name: "長谷川 純", kana: "ハセガワ ジュン",
        dept: "事業推進部", role: "メンバー / 2022年入社",
        skills: ["インサイドセールス", "CRM", "Salesforce"], certs: ["Salesforce 認定アドミニストレーター"],
        hobbies: ["バスケ", "スニーカー"], comment: "お客様との最初の接点を大切にしています。", bio: "見込み顧客へのアプローチと商談設定を担当。", email: "hasegawa@example.com"
    },
    {
        id: 23, name: "岡田 真理", kana: "オカダ マリ",
        dept: "事業推進部", role: "メンバー / 2023年入社",
        skills: ["市場調査", "英語", "資料作成"], certs: ["TOEIC 850点", "秘書検定準1級"],
        hobbies: ["料理", "紅茶"], comment: "マーケットリサーチを担当しています。", bio: "競合調査や資料作成のサポートを行っています。", email: "okada@example.com"
    },
    {
        id: 24, name: "金子 裕介", kana: "カネコ ユウスケ",
        dept: "事業推進部", role: "メンバー / 2019年入社",
        skills: ["動画編集", "PremierePro", "YouTube"], certs: ["アドビ認定プロフェッショナル", "ドローン操縦士"],
        hobbies: ["ドローン", "キャンプ"], comment: "採用動画の編集もやってます。", bio: "プロモーションビデオの制作ディレクションを担当。", email: "kaneko@example.com"
    },
    // --- 管理部 ---
    {
        id: 25, name: "吉田 愛", kana: "ヨシダ アイ",
        dept: "管理部", role: "課長 / 2010年入社",
        skills: ["人事", "労務", "メンタルヘルス"], certs: ["社会保険労務士", "衛生管理者"],
        hobbies: ["ヨガ", "猫"], comment: "社員が働きやすい環境を作ります。", bio: "人事評価制度の設計と運用を担当。", email: "yoshida.a@example.com"
    },
    {
        id: 26, name: "三浦 健太", kana: "ミウラ ケンタ",
        dept: "管理部", role: "リーダー / 2016年入社",
        skills: ["経理", "決算", "財務分析"], certs: ["日商簿記1級", "税理士科目合格(簿・財)"],
        hobbies: ["麻雀", "ラーメン"], comment: "経費精算はお早めにお願いします！", bio: "月次・年次決算業務と監査対応を担当。", email: "miura@example.com"
    },
    {
        id: 27, name: "佐々木 希", kana: "ササキ ノゾミ",
        dept: "管理部", role: "メンバー / 2018年入社",
        skills: ["総務", "備品管理", "イベント運営"], certs: ["秘書検定1級", "防火管理者"],
        hobbies: ["手芸", "お菓子作り"], comment: "オフィスの備品で欲しいものがあれば言ってください。", bio: "ファシリティマネジメントと社内イベント運営を担当。", email: "sasaki@example.com"
    },
    {
        id: 28, name: "工藤 慎吾", kana: "クドウ シンゴ",
        dept: "管理部", role: "メンバー / 2021年入社",
        skills: ["法務", "契約書チェック", "コンプライアンス"], certs: ["行政書士", "ビジネス実務法務検定1級"],
        hobbies: ["将棋", "歴史"], comment: "契約周りの相談はチャットでどうぞ。", bio: "契約審査と社内規定の整備を担当。", email: "kudo@example.com"
    },
    {
        id: 29, name: "野口 明美", kana: "ノグチ アケミ",
        dept: "管理部", role: "メンバー / 2014年入社",
        skills: ["採用", "新卒研修", "キャリアカウンセラー"], certs: ["キャリアコンサルタント", "産業カウンセラー"],
        hobbies: ["テニス", "温泉"], comment: "新入社員の成長を見るのが楽しみです。", bio: "新卒・中途採用の実務と研修プログラム企画。", email: "noguchi@example.com"
    },
    {
        id: 30, name: "橋本 哲也", kana: "ハシモト テツヤ",
        dept: "管理部", role: "メンバー / 2023年入社",
        skills: ["情シス", "PCセットアップ", "ヘルプデスク"], certs: ["ITパスポート", "Google IT Support Pro"],
        hobbies: ["ゲーム", "アニメ"], comment: "PCの調子が悪い時は声をかけてください。", bio: "社内IT機器の管理とアカウント発行業務を担当。", email: "hashimoto@example.com"
    }
];

// 共通関数
function getUserIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}
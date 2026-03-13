import { PortfolioData } from "@/types";

export const portfolioData: PortfolioData = {
    en: {
        profile: {
            name: "Takaaki Nagoshi (Ayato)",
            role: "AI Researcher / ML Solutions Engineer",
            tagline: "Architecting the Symphony of Intelligence.",
            sub_tagline: "Skilled AI/ML engineer with experience in both model building and real-world application of AI to drive digital transformation. Championed the AI/ML community as a Google AI Student Lead Ambassador and GDG contributor.",
            location: "Tokyo, Japan",
            links: {
                github: "https://github.com/Ayato964",
                linkedin: "https://www.linkedin.com/in/nagoshidayo/",
                email: "nagoshi@kthrlab.jp"
            }
        },
        about: {
            title: "About Me",
            summary: "I hold a multi-faceted identity as a researcher, software/ML engineer, and creator, dedicated to exploring the intersection of logic and artistic expression. As a researcher at Nihon University, I developed 'MORTM,' a foundation model for symbolic music. In parallel, as an engineer, my core strength is my \"implementation power (SWE)\"—the ability to transform state-of-the-art AI research into robust, production-ready products. From architecting B2B automation agents at InfoDeliver to building beautiful, high-performance web applications with Next.js/Vite and orchestrating model deployments, I bridge the gap between complex logic and reliable software through my full-stack expertise. Underpinning all these efforts is a deep-seated passion for \"expression.\" Whether self-producing music for my unit \"Yofukashi-san wa Hakuchumu wo Miru\" or creating AI-integrated games, I focus on shaping new aesthetics using technology as my medium. Striving to conduct a \"Symphony of Intelligence,\" I continue to push boundaries across these diverse fields."
        },
        projects: {
            title: "Featured Projects",
            items: [
                {
                    "title": "MORTM (Music Oriented Rhythmic Transformer)",
                    "description": "A foundation model for symbolic music generation. Designed the theoretical architecture and implemented the entire pipeline from tokenization to deployment.",
                    "tech_stack": ["PyTorch", "Transformer", "MoE", "FlashAttention", "ALiBi", "RLHF/RLDF"],
                    "highlight": "Achieved high-fidelity melody generation using a custom GAN-style architecture and Mel spectrogram reconstruction."
                }
            ]
        },
        publications: {
            title: "Activities",
            items: [

                {
                    type: 'AI',
                    title: "ConcertAI: What kind of music does MORTM generate? (Demo)",
                    url: "https://ayato964.github.io/ConcertAI/",
                    description: "An interactive demo platform where you can try out the fine-tuned models yourself.",
                    thumbnail: "/images/concertai-thumb.png",
                    slug: "concertai",
                    content: [
                        { type: 'text', value: "ConcertAI is an interactive demo platform leveraging the capabilities of MORTM. Users can generate and listen to music in real-time." },
                        { type: 'image', value: "/images/concertai-thumb.png", caption: "ConcertAI Interface" },
                        { type: 'link', url: "https://ayato964.github.io/ConcertAI/", value: "ConcertAI" },
                        { type: "text", value: "Note: Depending on computational resources, the app may be unable to use during machine learning (training phases). Thank you for your understanding." },
                        { type: "text", value: "ConcertAI features three modes to help you shape your inspiration:" },
                        {
                            type: "list", listType: "unordered", items: [
                                "DEMO Mode: Experience 'Context-Aware' generation. Upload an existing MIDI file, select 'Continue from here,' and the AI perfectly understands the surrounding context to generate natural phrases.",
                                "VS Mode: Compare and generate using two models simultaneously. View them side-by-side on a piano roll and choose the perfect model for your song.",
                                "Podcast Mode: Generates music indefinitely in real-time. Ideal for background music at work or for finding new seeds of inspiration."
                            ]
                        },
                        { type: "text", value: "Key Features and Characteristics:" },
                        {
                            type: "list", listType: "unordered", items: [
                                "Advanced Piano Roll: Visually confirm generated melodies and edit them as needed on the spot.",
                                "Chord Progression Support: Supports music generation that follows specified chord progressions.",
                                "Multi-Instrument: Instantly preview with various timbres, from piano to drums.",
                                "Browser-Native: No installation required. A fast and beautiful UI built with Vite + React transforms your browser into a studio."
                            ]
                        },
                        { type: "text", value: "Here are some actual generation examples:" },
                        { type: "video", value: "https://www.youtube.com/embed/S1AmZg1AFFM", caption: "Example 1: Jazz-style music generated in Cm scale" },
                        { type: "video", value: "https://www.youtube.com/embed/vQFJgQQNzFM", caption: "Example 2: Ghibli-style music generated in Cm scale" },
                        { type: "video", value: "https://www.youtube.com/embed/k3Dmav89HKc", caption: "Example 3: Ballad-style music generated in Dm scale" },
                    ]
                },
                {
                    type: 'Creativity',
                    title: "RunMeMe",
                    url: "https://ayato964.github.io/RunMeMe/",
                    description: "A game developed as a Google AI Student Lead Ambassador activity. Texture generation demo using Gemini Nano.",
                    thumbnail: "/images/runmeme-thumb.png",
                    slug: "runmeme",
                    content: [
                        { type: 'text', value: "Hello everyone!\nToday, I'm introducing 'RunMeMe,' a new web game exploring new possibilities in AI and game development." },
                        { type: 'text', value: "This game was born with a special mission: to demonstrate how 'Gemini Nano Banana' can contribute to game texture generation and to showcase its charm." },
                        { type: 'text', value: "With retro-pop, vibrant textures and rhythmic action, it offers a brand-new experience where AI-generated visuals blend with addictive 'just one more time' gameplay!" },
                        { type: 'text', value: "What kind of game is RunMeMe?" },
                        { type: 'text', value: "'RunMeMe' is an endless run-action game where you compete to see how far you can go and how high you can score while jumping over obstacles." },
                        { type: 'image', value: "/images/runmeme-thumb.png", caption: "Title screen. Where the legend begins!" },
                        { type: 'link', value: "Play RunMeMe", url: "https://ayato964.github.io/RunMeMe/" },
                        { type: 'text', value: "Basic controls are just this!" },
                        {
                            type: 'list', listType: 'unordered', items: [
                                "For PC: Press Space to jump",
                                "For Mobile/Tablet: Tap the JUMP button on the screen"
                            ]
                        },
                        { type: 'text', value: "Items that color the game" },
                        { type: 'text', value: "Delicious-looking items (?) are scattered along the course to help you. Catching them effectively is key to a high score!" },
                        {
                            type: 'list', listType: 'unordered', items: [
                                "Onigiri: Speed Down. Helps you control excessive speed.",
                                "Ice Cream: Bonus Score. Get 500 points at once!",
                                "Star: Extra Jump. Allows you to jump even higher in mid-air."
                            ]
                        },
                        { type: 'image', value: "/images/run_item.png", caption: "Don't miss these items!" },
                        { type: 'text', value: "Rules and Strategy Points" },
                        { type: 'text', value: "1. Adapt to Speed Changes!" },
                        { type: 'text', value: "As the game progresses, your running speed increases. As the level goes up, the interval for speed-ups shortens, so eat 'Onigiri' to regain your composure." },
                        { type: 'text', value: "2. Avoid Obstacles!" },
                        { type: 'text', value: "Watch out for thorns growing from the ground and bottomless pits. Touching or falling into them once means Game Over." },
                        { type: 'text', value: "3. Reach the Top of World Rankings!" },
                        { type: 'text', value: "You can save your score by registering your name. Compete with players worldwide for the top spot. Aim for Rank #1!" },
                        { type: 'image', value: "/images/run_gameover.png", caption: "A frustrating Game Over! You'll go further next time." },
                        { type: 'text', value: "Play Now!" },
                        { type: 'text', value: "'RunMeMe' is available to play now in your browser.\nPerfect for short breaks or score competitions with friends.\nCome on, run with 'Me Me' on the road that goes on forever!" },
                        { type: 'link', value: "Play RunMeMe", url: "https://ayato964.github.io/RunMeMe/" },
                    ]
                },
                {
                    type: 'Creativity',
                    title: "Music Unit - Yofukashi-san wa Hakuchumu wo Miru",
                    url: "https://eggs.mu/artist/Ayato964",
                    description: "A music project expressing a dreamlike, illusory world-view like the silence of the night or a daydream. Self-produced from composition to mixing.",
                    thumbnail: "/images/music.png",
                    slug: "music",
                    content: [
                        { type: 'text', value: "Yofukashi-san wa Hakuchumu wo Miru (Stay up late and Daydream) is a music project that expresses introspective emotions and conflicts through pop-rock sounds." },
                        { type: 'text', value: "Concept:" },
                        { type: 'text', value: "As the name suggests, the project's theme is dreams seen in the silence of the night or an illusory world-view one might suddenly stumble into during the day. It sublimates human inner depths and ambiguous, fleeting emotions into music." },
                        { type: 'text', value: "Members and Roles:" },
                        {
                            type: 'list', listType: 'unordered', items: [
                                "AYATO.: Keyboard, Piano, Lyrics, Composition, Arrangement, Concept Design, Recording, Mixing",
                                "Karinatsu: Vocals"
                            ]
                        },
                        { type: 'text', value: "Major Songs:" },
                        { type: 'image', value: "/images/byousin_to_somato.png", caption: "Byoushin to Soumatou: An image expressing a narrative and profound world-view" },
                        { type: 'text', value: "・Byoushin to Soumatou: A representative song where heavy storytelling and a sense of speed coexist." },
                        { type: 'image', value: "/images/inainaiwa.png", caption: "Inainaiwa: Delicate piano and dramatic emotional flux" },
                        { type: 'text', value: "・Inainaiwa: A song depicting human conflict through delicate piano and dynamic performance." },
                        { type: 'image', value: "/images/kimi_wo_sagashiteiru.png", caption: "Kimi wo Sagashiteiru.: A creative work featuring Kasane Teto with a futuristic world-view" },
                        { type: 'text', value: "・Kimi wo Sagashiteiru. (feat. Kasane Teto): A creative and ambitious work blending digital and analog." },
                        { type: 'image', value: "/images/music.png", caption: "Yofukashi-san wa Hakuchumu wo Miru Key Visual" },
                        { type: 'link', value: "Listen on YouTube Music", url: "https://music.youtube.com/channel/UCCjMQqIZxQ5JuWHoZgiSIJA" },
                        { type: 'link', value: "Visit YouTube Channel", url: "https://www.youtube.com/channel/UCCjMQqIZxQ5JuWHoZgiSIJA" }
                    ]
                },
                {
                    type: 'Paper',
                    title: "Proposal of a Music Generation Model Incorporating Metrical Relationships",
                    venue: "IPSJ Interaction 2025 (ID: 3B-17)",
                    date: "Feb 2025",
                    url: "https://www.interaction-ipsj.org/proceedings/2025/data/pdf/3B-17.pdf",
                    description: "Published Feb 23, 2025."
                },
                {
                    type: 'Paper',
                    title: "MORTM: MoE-Optimized Rhythmic Transformer Model for Symbolic MIDI Generation",
                    venue: "APSIPA ASC 2025 (ID: P496)",
                    date: "Oct 2025",
                    url: "http://www.apsipa.org/proceedings/2025/papers/APSIPA2025_P496.pdf",
                    description: "Dates: Oct 22-24, 2025"
                }
            ]
        },
        experience: {
            title: "Experience",
            items: [
                {
                    "company": "InfoDeliver AI Lab",
                    "role": "Machine Learning Solutions Engineer Intern",
                    "period": "April 2025 - Present",
                    "details": "Developing AI agents for document automation and B2B solutions."
                },
                {
                    "company": "Google",
                    "role": "Google AI Student Lead Ambassador",
                    "period": "Present",
                    "details": "Demo Presenter at GDG DevFest Tokyo 2025. Community building."
                },
                {
                    "company": "Nihon University",
                    "role": "Research Assistant",
                    "period": "June 2024 - Dec 2025",
                    "details": "Developed research applications using Java and Gradle."
                }
            ]
        },
        skills: {
            title: "Skills",
            items: {
                "Machine Learning": ["PyTorch", "TensorFlow", "Transformer", "MoE", "LoRA", "Reinforcement Learning (PPO)"],
                "Audio/Music": ["torchaudio", "Mel Spectrogram", "HiFi-GAN", "Music Theory"],
                "Development": ["Python", "Docker", "GCP/AWS", "Git", "Next.js"],
                "Languages": ["Japanese (Native)", "English (CEFR B1/A2)"]
            }
        },
        connection: {
            title: "Connection",
            text: "I am always open to discussing new research opportunities and collaborations. Please feel free to reach out via email or LinkedIn."
        },
        footer: {
            copyright: "© 2026 Takaaki Nagoshi. All rights reserved."
        }
    },
    ja: {
        profile: {
            name: "名越 崇晃 (Ayato)",
            role: "AI Researcher / ML Engineer",
            tagline: "Architecting the Symphony of Intelligence.",
            sub_tagline: "基盤モデルの設計から事前学習、RLHFまでを一貫して実装できるMLエンジニア。大学院ではTransformer独自の音楽生成モデルをゼロから開発。MoE等の最新技術を駆使し、LLM開発の全工程を深く理解する即戦力人材を目指す。",
            location: "東京, 日本",
            links: {
                github: "https://github.com/Ayato964",
                linkedin: "https://www.linkedin.com/in/nagoshidayo/",
                email: "nagoshi@kthrlab.jp"
            }
        },
        about: {
            title: "自己紹介",
            summary: "研究者、ソフトウェア/MLエンジニア、そしてクリエイターという多角的なアイデンティティを持ち、論理と表現の融合を探求しています。研究者としては、日本大学大学院にて記号音楽基盤モデル『MORTM』を開発。並行してエンジニアとして、最先端のAI研究を堅牢なプロダクトへと昇華させる「実装力（SWE）」を強みとしています。InfoDeliverでのB2B向け自動化エージェントのアーキテクチャ設計から、Next.js/Viteを用いた美しく高速なWebアプリ開発、そしてモデルのデプロイまで。複雑なロジックを信頼性の高いソフトウェアとして届けるフルスタックな技術で社会実装を具現化します。これらの根底には『表現』への情熱があり、音楽ユニット『夜更かしさんは白昼夢を見る』での作編曲やAIを活用したゲーム制作など、技術を手段として新たな美学を形にすることに心血を注いでいます。常に「知能の交響楽（Symphony of Intelligence）」を紡ぎ出すことを目指し、私は領域を横断し続けます。"
        },
        projects: {
            title: "主要プロジェクト",
            items: [
                {
                    "title": "MORTM (Music Oriented Rhythmic Transformer)",
                    "description": "シンボリック音楽生成のための基盤モデル。理論アーキテクチャの設計からトークナイゼーション、デプロイまでの全パイプラインを実装。",
                    "tech_stack": ["PyTorch", "Transformer", "MoE", "FlashAttention", "ALiBi", "RLHF/RLDF"],
                    "highlight": "独自のGANスタイルアーキテクチャとメルスペクトログラム再構成により、高忠実度なメロディ生成を実現。"
                }
            ]
        },
        publications: {
            title: "アクティビティ",
            items: [

                {
                    type: 'AI',
                    title: "ConcertAI: MORTMはどんな音楽を生成するの？(デモ紹介)",
                    url: "https://ayato964.github.io/ConcertAI/",
                    description: "実際にチューニングしたモデルを試すことができるインタラクティブデモサイト。",
                    thumbnail: "/images/concertai-thumb.png",
                    slug: "concertai",
                    content: [
                        { type: 'text', value: "ConcertAIは、MORTMの機能を活用したインタラクティブなデモプラットフォームです。ユーザーはリアルタイムで音楽を生成し、試聴することができます。" },
                        { type: 'image', value: "/images/concertai-thumb.png", caption: "ConcertAIのインターフェース" },
                        { type: 'link', url: "https://ayato964.github.io/ConcertAI/", value: "ConcertAI" },
                        { type: "text", value: "※計算資源の都合上、機械学習（学習フェーズ）を行っている間はアプリをご利用できない場合があります。あらかじめご了承ください。" },
                        { type: "text", value: "ConcertAIには、あなたのインスピレーションを形にするための3つのモードがあります。" },
                        {
                            type: "list", listType: "unordered", items: [
                                "DEMOモード: 既存のMIDIファイルをアップロードして「ここから先を繋げてほしい」と選ぶだけで、AIが前後の文脈を完璧に理解して自然なフレーズを生成する「Context-Aware」機能を体験できます。",
                                "VSモード: 2つのモデルを同時に比較生成し、ピアノロールで並べて確認できます。自分の曲に最適なモデルを納得いくまで選ぶことが可能です。",
                                "Podcastモード: 音楽をリアルタイムで無限に生成し続けます。作業用BGMとして流したり、新しい曲のアイデア（種）探しに最適です。"
                            ]
                        },
                        { type: "text", value: "主な機能と特徴：" },
                        {
                            type: "list", listType: "unordered", items: [
                                "高機能ピアノロール: 生成されたメロディをその場で視覚的に確認し、必要に応じて編集可能。",
                                "コード進行対応: 指定したコード進行に沿った音楽生成をサポート。",
                                "マルチインストゥルメント: ピアノからドラムまで、多彩な音色で即座にプレビュー。",
                                "ブラウザ完結: 面倒なインストールは不要。Vite + Reactによる高速で美しいUIが、ブラウザをスタジオに変えます。"
                            ]
                        },
                        { type: "text", value: "ここでは実際の生成例をいくつか紹介します。" },
                        { type: "video", value: "https://www.youtube.com/embed/S1AmZg1AFFM", caption: "生成例1: Cmのスケールで生成されたジャズ風の音楽" },
                        { type: "video", value: "https://www.youtube.com/embed/vQFJgQQNzFM", caption: "生成例2: Cmのスケールで生成されたジブリ風の音楽" },
                        { type: "video", value: "https://www.youtube.com/embed/k3Dmav89HKc", caption: "生成例3: Dmのスケールで生成されたバラード風の音楽" },
                    ]
                },
                {
                    type: 'Creativity',
                    title: "RunMeMe",
                    url: "https://ayato964.github.io/RunMeMe/",
                    description: "Google AI Student Lead Ambassadorとして開発・活動したゲーム。Gemini Nanoによるテクスチャ生成デモ。",
                    thumbnail: "/images/runmeme-thumb.png",
                    slug: "runmeme",
                    content: [
                        { type: 'text', value: "皆さん、こんにちは！\n今日は、AIとゲーム開発の新しい可能性を秘めた新作Webゲーム『RunMeMe』をご紹介します。" },
                        { type: 'text', value: "実はこのゲーム、「Gemini Nano Banana」がいかにゲームのテクスチャ生成に貢献できるかを実証し、その魅力を伝えるという特別なミッションを持って誕生しました。" },
                        { type: 'text', value: "レトロポップで鮮やかなテクスチャ、テンポの良いアクション。AIの力で生み出されたビジュアルと、つい「もう一回！」とプレイしてしまう中毒性が融合した、全く新しい体験が待っています！" },
                        { type: 'text', value: "RunMeMeってどんなゲーム？" },
                        { type: 'text', value: "『RunMeMe』は、迫りくる障害物をジャンプで避けながら、どこまで遠くへ行けるか、どれだけ高いスコアを出せるかを競うエンドレス・ランアクションゲームです。" },
                        { type: 'image', value: "/images/runmeme-thumb.png", caption: "タイトル画面。ここから全ての伝説が始まる！" },
                        { type: 'link', value: "『RunMeMe』をプレイする", url: "https://ayato964.github.io/RunMeMe/" },
                        { type: 'text', value: "基本操作はこれだけ！" },
                        {
                            type: 'list', listType: 'unordered', items: [
                                "パソコンの場合: スペースキーでジャンプ",
                                "スマホ・タブレットの場合: 画面上のJUMPボタンをタップ"
                            ]
                        },
                        { type: 'text', value: "ゲームを彩るアイテムたち" },
                        { type: 'text', value: "コース上には、攻略を助けてくれる美味しそうなアイテム（？）が落ちています。これらをいかに上手く拾うかが高スコアの鍵です！" },
                        {
                            type: 'list', listType: 'unordered', items: [
                                "おにぎり: スピードダウン。速くなりすぎた速度を抑えてくれます。",
                                "アイスクリーム: ボーナススコア。一気に500点ゲット！",
                                "スター: 二段ジャンプ追加。空中でさらに跳べるようになります。"
                            ]
                        },
                        { type: 'image', value: "/images/run_item.png", caption: "これらのアイテムを逃さずゲットしよう！" },
                        { type: 'text', value: "ルールと攻略のポイント" },
                        { type: 'text', value: "1. 速度変化に対応せよ！" },
                        { type: 'text', value: "ゲームが進むにつれて、走るスピードがどんどん上がっていきます。レベルが上がると更にスピードアップの間隔が短くなるので、「おにぎり」を食べて冷静さを取り戻しましょう。" },
                        { type: 'text', value: "2. 障害物を回避せよ！" },
                        { type: 'text', value: "地面から生えているトゲトゲ（Thorn）や、足場のない奈落は要注意。一度でも触れたり落ちたりしたらゲームオーバーです。" },
                        { type: 'text', value: "3. ランキングで世界の頂点へ！" },
                        { type: 'text', value: "自分のスコアは名前を登録して保存可能。世界中のプレイヤーとランキングで競い合うことができます。目指せ、ランキング1位！" },
                        { type: 'image', value: "/images/run_gameover.png", caption: "悔しいゲームオーバー！次はもっと先へ行けるはず。" },
                        { type: 'text', value: "今すぐプレイ！" },
                        { type: 'text', value: "『RunMeMe』はブラウザで今すぐプレイ可能です。\nちょっとした隙間時間や、友達とのスコア競走に最適。\nさあ、あなたも「Me Me」と一緒に、どこまでも続く道を駆け抜けましょう！" },
                        { type: 'link', value: "『RunMeMe』をプレイする", url: "https://ayato964.github.io/RunMeMe/" },
                    ]
                },
                {
                    type: 'Creativity',
                    title: "音楽ユニット「夜更かしさんは白昼夢を見る」",
                    url: "https://eggs.mu/artist/Ayato964",
                    description: "夜の静けさや白昼夢のような幻想的な世界観を表現する音楽プロジェクト。作編曲からミキシングまでセルフプロデュース。",
                    thumbnail: "/images/music.png",
                    slug: "music",
                    content: [
                        { type: 'text', value: "夜更かしさんは白昼夢を見る（Yofukashi-san wa Hakuchumu wo Miru）は、内省的な感情や葛藤をポップ・ロックサウンドに乗せて表現する音楽プロジェクトです。" },
                        { type: 'text', value: "コンセプト：" },
                        { type: 'text', value: "ユニット名が示す通り、夜の静けさの中で見る夢や、白昼にふと迷い込む幻想的な世界観をテーマにしています。人間の内面を深く掘り下げた、曖昧で移ろいやすい心情を楽曲に昇華させています。" },
                        { type: 'text', value: "メンバーと役割：" },
                        {
                            type: 'list', listType: 'unordered', items: [
                                "AYATO.: キーボード、ピアノ、作詞、作曲、編曲、コンセプト設計、レコーディング・ミキシング",
                                "刈夏 (Karinatsu): ボーカル"
                            ]
                        },
                        { type: 'text', value: "主な楽曲：" },
                        { type: 'image', value: "/images/byousin_to_somato.png", caption: "秒針と走馬灯：物語性と重厚な世界観を表現したイメージ" },
                        { type: 'text', value: "・秒針と走馬灯: 重厚な物語性と疾走感が同居する代表曲" },
                        { type: 'image', value: "/images/inainaiwa.png", caption: "いないないわ：繊細なピアノとドラマチックな感情の揺れ" },
                        { type: 'text', value: "・いないないわ: 人間の葛藤を繊細なピアノとダイナミックな演奏で描く楽曲" },
                        { type: 'image', value: "/images/kimi_wo_sagashiteiru.png", caption: "君を探している。：重音テトをフィーチャーした近未来的な世界観" },
                        { type: 'text', value: "・君を探している。 (feat. 重音テト): デジタルとアナログが融合した独創的な意欲作" },
                        { type: 'image', value: "/images/music.png", caption: "「夜更かしさんは白昼夢を見る」キービジュアル" },
                        { type: 'link', value: "Youtube Music で楽曲を聴く", url: "https://music.youtube.com/channel/UCCjMQqIZxQ5JuWHoZgiSIJA" },
                        { type: 'link', value: "YouTube チャンネルを見る", url: "https://www.youtube.com/channel/UCCjMQqIZxQ5JuWHoZgiSIJA" }
                    ]
                },
                {
                    type: 'Paper',
                    title: "拍節関係を取り入れた音楽生成モデルの提案",
                    venue: "情報処理学会 インタラクション2025 (論文ID: 3B-17)",
                    date: "2025年2月",
                    url: "https://www.interaction-ipsj.org/proceedings/2025/data/pdf/3B-17.pdf",
                    description: "2025年2月23日発行"
                },
                {
                    type: 'Paper',
                    title: "MORTM: MoE-Optimized Rhythmic Transformer Model for Symbolic MIDI Generation",
                    venue: "APSIPA ASC 2025 (論文ID: P496)",
                    date: "2025年10月",
                    url: "http://www.apsipa.org/proceedings/2025/papers/APSIPA2025_P496.pdf",
                    description: "開催日: 2025年10月22日〜24日"
                },
            ]
        },
        experience: {
            title: "経歴",
            items: [
                {
                    "company": "InfoDeliver AI Lab",
                    "role": "Machine Learning Solutions Engineer Intern",
                    "period": "2025年4月 - 現在",
                    "details": "ドキュメント自動化およびB2BソリューションのためのAIエージェント開発。"
                },
                {
                    "company": "Google",
                    "role": "Google AI Student Lead Ambassador",
                    "period": "現在",
                    "details": "GDG DevFest Tokyo 2025でのデモ発表およびコミュニティビルディング。"
                },
                {
                    "company": "日本大学",
                    "role": "リサーチアシスタント",
                    "period": "2024年6月 - 2025年12月",
                    "details": "JavaとGradleを使用した研究用アプリケーションの開発など。"
                }
            ]
        },
        skills: {
            title: "スキル",
            items: {
                "Machine Learning": ["PyTorch", "TensorFlow", "Transformer", "MoE", "LoRA", "Reinforcement Learning (PPO)"],
                "Audio/Music": ["torchaudio", "Mel Spectrogram", "HiFi-GAN", "Music Theory"],
                "Development": ["Python", "Docker", "GCP/AWS", "Git", "Next.js"],
                "Languages": ["Japanese (Native)", "English (CEFR B1/A2)"]
            }
        },
        connection: {
            title: "Connection",
            text: "研究・開発に関するご相談やコラボレーションについては、EmailまたはLinkedInよりお気軽にご連絡ください。"
        },
        footer: {
            copyright: "© 2026 Takaaki Nagoshi. All rights reserved."
        }
    }
};

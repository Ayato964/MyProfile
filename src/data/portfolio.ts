import { PortfolioData } from "@/types";
import { getAssetPath } from "@/lib/utils";

export const portfolioData: PortfolioData = {
    en: {
        profile: {
            name: "Takaaki Nagoshi (Ayato)",
            role: "AI Researcher / ML Engineer",
            tagline: "Architecting the Symphony of Intelligence.",
            sub_tagline: "An ML engineer capable of end-to-end implementation from foundational model design through pre-training to RLHF. Developed a unique music generation model based on Transformers from scratch during graduate studies. Aims to become a highly skilled professional with deep expertise across all stages of LLM development, leveraging cutting-edge techniques like MoE.",
            location: "Tokyo, Japan",
            links: {
                github: "https://github.com/Ayato964",
                linkedin: "https://www.linkedin.com/in/nagoshidayo/",
                email: "nagoshi@kthrlab.jp"
            }
        },
        about: {
            title: "About Me",
            summary: "I am currently a Master's student at the Graduate School of Integrated Basic Sciences, Nihon University, starting in 2025 (Advisor: Prof. Kitahara Tethuro). Concurrently, I work as a Machine Learning Solutions Engineer Intern at InfoDeliver AI Lab, developing AI agents and automating document management workflows for B2B solutions. I also served as a Google AI Student Lead Ambassador, contributing to the tech community through demo presentations at GDG DevFest Tokyo 2025. I received my Bachelor's degree in Information Science from the College of Humanities and Sciences, Nihon University in 2025.　\n My research focuses on building and optimizing Foundation Models, specifically for symbolic music generation. My interests lie in designing Transformer architectures, improving computational efficiency using MoE (Mixture of Experts) and FlashAttention, and implementing alignment strategies via RLHF. I specialize in end-to-end development—from designing custom tokenizers to executing pre-training pipelines from scratch—rather than simply fine-tuning existing models.\n I am seeking Research Engineer or Researcher positions (Academia or Industry) focusing on Foundation Model architecture and pre-training after completing my Master's degree (expected March 2027). Please feel free to contact me if you are interested."
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
            title: "Publications & Works",
            items: [
                {
                    type: 'Paper',
                    title: "MORTM: MoE-Optimized Rhythmic Transformer Model for Symbolic MIDI Generation",
                    venue: "APSIPA ASC 2025 (ID: P496)",
                    date: "Oct 2025",
                    url: "http://www.apsipa.org/proceedings/2025/papers/APSIPA2025_P496.pdf",
                    description: "Presented at APSIPA ASC 2025."
                },
                {
                    type: 'Paper',
                    title: "Proposal of a Music Generation Model Incorporating Metrical Relationships",
                    venue: "IPSJ Interaction 2025 (ID: 3B-17)",
                    date: "Feb 2025",
                    url: "https://www.interaction-ipsj.org/proceedings/2025/data/pdf/3B-17.pdf",
                    description: "Published in Information Processing Society of Japan Interaction 2025."
                },
                {
                    type: 'AI',
                    title: "ConcertAI",
                    url: "https://ayato964.github.io/ConcertAI/",
                    description: "Interactive demo of the fine-tuned music generation model.",
                    thumbnail: getAssetPath("/images/concertai-thumb.png")
                },
                {
                    type: 'Game',
                    title: "RunMeMe",
                    url: "https://ayato964.github.io/RunMeMe/",
                    description: "Game developed as Google AI Student Lead Ambassador.",
                    thumbnail: getAssetPath("/images/runmeme-thumb.png")
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
            summary: "2025年より日本大学大学院 統合基礎科学研究科 修士課程に在籍しています (指導教官: 北原鉄朗 教授)． 現在は InfoDeliver AI Lab にて Machine Learning Solutions Engineer Intern として、B2B向けのAIエージェント開発およびドキュメント管理自動化ソリューションの構築を行っています．また、Google AI Student Lead Ambassador に選出され、GDG DevFest Tokyo 2025 でのデモ発表を行うなど、技術コミュニティの牽引役としても活動しました． 学部時代は情報科学を専攻し、2025年に日本大学文理学部を卒業しました．\n 基盤モデル（Foundation Model）の構築・最適化に関する研究に従事しており、特に記号的音楽（Symbolic Music）を対象とした Transformer アーキテクチャの設計、MoE (Mixture of Experts) や FlashAttention を用いた計算効率化、および RLHF (Reinforcement Learning from Human Feedback) によるアライメント技術に興味があります．既存モデルのファインチューニングに留まらず、トークナイザの設計から事前学習パイプラインの構築までをフルスクラッチで実装できるエンジニアリング能力を強みとしています．\n 修士号取得 (2027年3月見込み) 後の就職先として、アカデミア・インダストリに関係なく、基盤モデルのアーキテクチャ設計や事前学習に携われる Research Engineer / Researcher ポジションを検討しています．興味をもっていただいた方はご連絡いただけると幸いです．"
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
            title: "論文・作品",
            items: [
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
                {
                    type: 'AI',
                    title: "ConcertAI",
                    url: "https://ayato964.github.io/ConcertAI/",
                    description: "実際にチューニングしたモデルを試すことができるインタラクティブデモサイト。",
                    thumbnail: getAssetPath("/images/concertai-thumb.png")
                },
                {
                    type: 'Game',
                    title: "RunMeMe",
                    url: "https://ayato964.github.io/RunMeMe/",
                    description: "Google AI Student Lead Ambassadorとして開発・活動したゲーム。",
                    thumbnail: getAssetPath("/images/runmeme-thumb.png")
                }
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

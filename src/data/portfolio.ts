import { PortfolioData } from "@/types";

export const portfolioData: PortfolioData = {
    en: {
        profile: {
            name: "Takaaki Nagoshi (Ayato)",
            role: "AI Researcher / ML Engineer",
            tagline: "Architecting the Symphony of Intelligence.",
            sub_tagline: "Specializing in Transformer-based Music Generation & Multimodal Agents.",
            location: "Tokyo, Japan",
            links: {
                github: "https://github.com/Ayato964",
                linkedin: "https://www.linkedin.com/in/nagoshidayo/"
            }
        },
        about: {
            title: "About Me",
            summary: "M1 Master's student at Nihon University. Bridging the gap between music theory and generative AI. My focus is on autoregressive decoder models (Transformers) for symbolic music generation, enhanced with MoE and RLHF strategies."
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
                    thumbnail: "/images/concertai-thumb.png" // Placeholder or reuse something if needed, user didn't specify thumb for AI but logic might need it
                },
                {
                    type: 'Game',
                    title: "RunMeMe",
                    url: "https://ayato964.github.io/RunMeMe/",
                    description: "Game developed as Google AI Student Lead Ambassador.",
                    thumbnail: "/images/runmeme-thumb.png"
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
        footer: {
            copyright: "© 2026 Takaaki Nagoshi. All rights reserved."
        }
    },
    ja: {
        profile: {
            name: "名越 崇晃 (Ayato)",
            role: "AI Researcher / ML Engineer",
            tagline: "Architecting the Symphony of Intelligence.",
            sub_tagline: "Transformerベースの音楽生成とマルチモーダルエージェントの研究開発",
            location: "東京, 日本",
            links: {
                github: "https://github.com/Ayato964",
                linkedin: "https://www.linkedin.com/in/nagoshidayo/"
            }
        },
        about: {
            title: "自己紹介",
            summary: "音楽理論と生成AIの融合を目指し、Transformerを用いたシンボリック音楽生成の研究を行っています。"
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
                    thumbnail: "/images/concertai-thumb.png"
                },
                {
                    type: 'Game',
                    title: "RunMeMe",
                    url: "https://ayato964.github.io/RunMeMe/",
                    description: "Google AI Student Lead Ambassadorとして開発・活動したゲーム。",
                    thumbnail: "/images/runmeme-thumb.png"
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
        footer: {
            copyright: "© 2026 Takaaki Nagoshi. All rights reserved."
        }
    }
};

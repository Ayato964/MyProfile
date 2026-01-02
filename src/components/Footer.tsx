"use client";

import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolio";
import { Github, Linkedin } from "lucide-react";

export const Footer = () => {
    const { language } = useLanguage();
    const { footer, profile } = portfolioData[language];

    return (
        <footer className="py-12 px-6 border-t border-gray-200 bg-gray-50 mt-20" id="contact">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

                <div className="text-center md:text-left">
                    <div className="font-bold text-xl text-gray-800 mb-1">{profile.name}</div>
                    <p className="text-gray-500 text-sm">{footer.copyright}</p>
                </div>

                <div className="flex gap-6">
                    <a
                        href={profile.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white border border-gray-200 rounded-full text-gray-600 hover:text-gray-900 hover:shadow-md transition-all"
                    >
                        <Github size={20} />
                    </a>
                    <a
                        href={profile.links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white border border-gray-200 rounded-full text-gray-600 hover:text-google-blue hover:shadow-md transition-all"
                    >
                        <Linkedin size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

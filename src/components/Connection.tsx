"use client";

import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolio";
import { Section } from "@/components/ui/Section";
import { Mail, Linkedin } from "lucide-react";

export const Connection = () => {
    const { language } = useLanguage();
    const { connection, profile } = portfolioData[language];

    return (
        <Section id="connection">
            <h2 className="text-2xl font-bold mb-8 text-gray-900 flex items-center gap-2">
                <span className="w-1 h-8 bg-google-green rounded-full" />
                {connection.title}
            </h2>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm flex flex-col md:flex-row gap-8 items-center justify-between">
                <div className="flex-1">
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        {connection.text}
                    </p>
                </div>

                <div className="flex flex-col gap-4 w-full md:w-auto">
                    <a
                        href={`mailto:${profile.links.email}`}
                        className="flex items-center gap-3 px-6 py-4 bg-google-red text-white rounded-xl shadow hover:bg-red-600 transition-all font-medium group"
                    >
                        <div className="p-2 bg-white/20 rounded-full group-hover:scale-110 transition-transform">
                            <Mail size={20} />
                        </div>
                        <div className="flex flex-col text-left">
                            <span className="text-xs opacity-90">Email</span>
                            <span className="text-sm font-bold">{profile.links.email}</span>
                        </div>
                    </a>

                    <a
                        href={profile.links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-6 py-4 bg-[#0077b5] text-white rounded-xl shadow hover:bg-[#006399] transition-all font-medium group"
                    >
                        <div className="p-2 bg-white/20 rounded-full group-hover:scale-110 transition-transform">
                            <Linkedin size={20} />
                        </div>
                        <div className="flex flex-col text-left">
                            <span className="text-xs opacity-90">LinkedIn</span>
                            <span className="text-sm font-bold">Connect on LinkedIn</span>
                        </div>
                    </a>
                </div>
            </div>
        </Section>
    );
};

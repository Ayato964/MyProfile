"use client";

import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolio";
import { Section } from "@/components/ui/Section";

export const About = () => {
    const { language } = useLanguage();
    const { about } = portfolioData[language];

    return (
        <Section id="about">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2">
                <span className="w-1 h-8 bg-google-blue rounded-full" />
                {about.title}
            </h2>
            <div className="prose prose-lg text-gray-600 leading-relaxed max-w-4xl">
                <p>{about.summary}</p>
            </div>
        </Section>
    );
};

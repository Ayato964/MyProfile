"use client";

import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolio";
import { Section } from "@/components/ui/Section";
import { Code2, Music2, Brain } from "lucide-react";

export const Skills = () => {
    const { language } = useLanguage();
    const { skills } = portfolioData[language];

    const getIcon = (category: string) => {
        if (category.includes("Machine")) return <Brain className="text-google-red" />;
        if (category.includes("Audio")) return <Music2 className="text-google-yellow" />;
        return <Code2 className="text-google-green" />;
    };

    return (
        <Section id="skills">
            <h2 className="text-2xl font-bold mb-8 text-gray-900 flex items-center gap-2">
                <span className="w-1 h-8 bg-google-red rounded-full" />
                {skills.title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(skills.items).map(([category, items]) => (
                    <div
                        key={category}
                        className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            {getIcon(category)}
                            <h3 className="text-lg font-bold text-gray-800">
                                {category}
                            </h3>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {items.map(skill => (
                                <span
                                    key={skill}
                                    className="px-3 py-1 text-sm bg-gray-50 border border-gray-100 rounded-full text-gray-700 font-medium"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

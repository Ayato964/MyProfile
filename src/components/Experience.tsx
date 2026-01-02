"use client";

import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolio";
import { Section } from "@/components/ui/Section";
import { Briefcase } from "lucide-react";

export const Experience = () => {
    const { language } = useLanguage();
    const { experience } = portfolioData[language];

    return (
        <Section id="experience">
            <h2 className="text-2xl font-bold mb-8 text-gray-900 flex items-center gap-2">
                <span className="w-1 h-8 bg-google-yellow rounded-full" />
                {experience.title}
            </h2>

            <div className="space-y-4">
                {experience.items.map((exp, index) => (
                    <div key={index} className="flex gap-4 md:gap-8 hover:bg-gray-50 p-4 rounded-xl transition-colors border border-transparent hover:border-gray-100">
                        {/* Icon Column */}
                        <div className="flex-shrink-0 mt-1">
                            <div className="w-10 h-10 bg-blue-50 text-google-blue rounded-full flex items-center justify-center">
                                <Briefcase size={20} />
                            </div>
                        </div>

                        <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:justify-between mb-1">
                                <h3 className="text-lg font-bold text-gray-900">{exp.role}</h3>
                                <span className="text-sm font-medium text-google-blue">{exp.period}</span>
                            </div>

                            <div className="text-sm font-medium text-gray-700 mb-2">
                                {exp.company}
                            </div>

                            <p className="text-gray-600 text-sm leading-relaxed">
                                {exp.details}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import { Section } from "@/components/ui/Section";
import { FileText, Gamepad2, BrainCircuit, ExternalLink } from "lucide-react";
import Image from "next/image";
import { PublicationType } from "@/types";
import { getAssetPath } from "@/lib/utils";

export const Publications = () => {
    const { language } = useLanguage();
    const { publications } = portfolioData[language];
    const [activeTab, setActiveTab] = useState<PublicationType | 'All'>('All');

    const filteredItems = publications.items.filter(
        item => activeTab === 'All' || item.type === activeTab
    );

    const tabs: (PublicationType | 'All')[] = ['All', 'Paper', 'Game', 'AI'];

    return (
        <Section id="publications" className="bg-gray-50/50 rounded-3xl my-10 border border-gray-100">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                <h2 className="text-3xl font-bold text-gray-900">
                    {publications.title}
                </h2>

                {/* Tab Switcher */}
                <div className="flex bg-gray-200/50 p-1 rounded-xl w-fit">
                    {tabs.map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === tab
                                ? "bg-white text-google-blue shadow-sm"
                                : "text-gray-500 hover:text-gray-700"
                                }`}
                        >
                            {tab === 'All' && language === 'ja' ? 'すべて' : tab}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid gap-6">
                <AnimatePresence mode="popLayout">
                    {filteredItems.map((item, index) => (
                        <motion.div
                            key={item.url}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="group bg-white p-6 rounded-2xl border border-gray-100 hover:border-google-blue/30 hover:shadow-lg transition-all flex flex-col md:flex-row gap-6"
                        >
                            {/* Thumbnail (if exists) or Icon Placeholder */}
                            <div className="w-full md:w-48 h-32 bg-gray-50 rounded-xl overflow-hidden flex-shrink-0 flex items-center justify-center border border-gray-100 relative group-hover:scale-105 transition-transform duration-500">
                                {item.thumbnail ? (
                                    <Image
                                        src={getAssetPath(item.thumbnail)}
                                        alt={item.title}
                                        width={192}
                                        height={128}
                                        className="object-cover w-full h-full"
                                    />
                                ) : (
                                    <div className="text-gray-300">
                                        {item.type === 'Paper' && <FileText size={40} />}
                                        {item.type === 'Game' && <Gamepad2 size={40} />}
                                        {item.type === 'AI' && <BrainCircuit size={40} />}
                                    </div>
                                )}

                                {/* Type Badge */}
                                <div className={`absolute top-2 left-2 px-2 py-1 text-[10px] uppercase font-bold tracking-wider text-white rounded shadow-sm
                            ${item.type === 'Paper' ? 'bg-google-blue' : ''}
                            ${item.type === 'Game' ? 'bg-google-red' : ''}
                            ${item.type === 'AI' ? 'bg-google-green' : ''}
                        `}>
                                    {item.type}
                                </div>
                            </div>

                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-google-blue transition-colors">
                                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                        {item.title}
                                        <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                </h3>

                                <div className="text-sm font-medium text-gray-500 mb-3 flex flex-wrap gap-x-4">
                                    {item.venue && <span>{item.venue}</span>}
                                    {item.date && <span>{item.date}</span>}
                                </div>

                                <p className="text-gray-600 leading-relaxed text-sm">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </Section>
    );
};

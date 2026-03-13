"use client";

import { useParams, useRouter } from "next/navigation";
import { portfolioData } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Tag, ExternalLink } from "lucide-react";
import Image from "next/image";
import { getAssetPath } from "@/lib/utils";

export const ActivityDetailClient = () => {
    const { slug } = useParams();
    const { language } = useLanguage();
    const router = useRouter();

    const activities = portfolioData[language].publications.items;
    const activity = activities.find((item) => item.slug === slug);

    if (!activity) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Activity Not Found</h1>
                    <button 
                        onClick={() => router.back()}
                        className="text-google-blue hover:underline flex items-center gap-2 justify-center"
                    >
                        <ArrowLeft size={20} /> Go Back
                    </button>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-white">
            <Section className="pt-32 pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Back Button */}
                    <button
                        onClick={() => router.back()}
                        className="group mb-8 flex items-center gap-2 text-gray-500 hover:text-google-blue transition-colors"
                    >
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        <span>{language === 'ja' ? '戻る' : 'Back'}</span>
                    </button>

                    {/* Header */}
                    <div className="max-w-4xl">
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider text-white rounded shadow-sm
                                ${activity.type === 'Paper' ? 'bg-google-blue' : ''}
                                ${activity.type === 'Creativity' ? 'bg-google-red' : ''}
                                ${activity.type === 'AI' ? 'bg-google-green' : ''}
                            `}>
                                {activity.type}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                            {activity.title}
                        </h1>

                        <div className="flex flex-wrap gap-6 text-gray-500 mb-10 border-b border-gray-100 pb-8">
                            {activity.date && (
                                <div className="flex items-center gap-2">
                                    <Calendar size={18} />
                                    <span>{activity.date}</span>
                                </div>
                            )}
                            {activity.venue && (
                                <div className="flex items-center gap-2">
                                    <Tag size={18} />
                                    <span>{activity.venue}</span>
                                </div>
                            )}
                            <a 
                                href={activity.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-google-blue hover:underline"
                            >
                                <ExternalLink size={18} />
                                <span>{language === 'ja' ? '外部リンク' : 'External Link'}</span>
                            </a>
                        </div>
                    </div>

                    {/* Content Blocks */}
                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-12">
                            {activity.content?.map((block, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    {block.type === 'text' && (
                                        <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-wrap">
                                            {block.value}
                                        </p>
                                    )}

                                    {block.type === 'image' && (
                                        <div className="space-y-3">
                                            <div className="relative rounded-2xl overflow-hidden border border-gray-100 shadow-xl">
                                                <Image
                                                    src={getAssetPath(block.value || "")}
                                                    alt={block.caption || activity.title}
                                                    width={1200}
                                                    height={800}
                                                    className="w-full h-auto object-cover"
                                                />
                                            </div>
                                            {block.caption && (
                                                <p className="text-sm text-gray-500 text-center italic">
                                                    {block.caption}
                                                </p>
                                            )}
                                        </div>
                                    )}

                                    {block.type === 'video' && (
                                        <div className="space-y-3">
                                            <div className="relative aspect-video rounded-2xl overflow-hidden border border-gray-100 shadow-xl bg-black">
                                                <iframe
                                                    src={block.value || ""}
                                                    title={block.caption || "Video video player"}
                                                    className="absolute inset-0 w-full h-full"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                    allowFullScreen
                                                ></iframe>
                                            </div>
                                            {block.caption && (
                                                <p className="text-sm text-gray-500 text-center italic">
                                                    {block.caption}
                                                </p>
                                            )}
                                        </div>
                                    )}

                                    {block.type === 'link' && (
                                        <div className="flex justify-center">
                                            <a 
                                                href={block.url} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-6 py-3 bg-google-blue text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                                            >
                                                <ExternalLink size={20} />
                                                <span>{block.value}</span>
                                            </a>
                                        </div>
                                    )}

                                    {block.type === 'list' && (
                                        <div className="max-w-3xl mx-auto py-2">
                                            {block.listType === 'ordered' ? (
                                                <ol className="list-decimal list-inside space-y-3 text-lg text-gray-700 leading-relaxed">
                                                    {block.items?.map((item, i) => (
                                                        <li key={i} className="pl-2">
                                                            <span className="relative -left-2">{item}</span>
                                                        </li>
                                                    ))}
                                                </ol>
                                            ) : (
                                                <ul className="space-y-3 text-lg text-gray-700 leading-relaxed">
                                                    {block.items?.map((item, i) => (
                                                        <li key={i} className="flex gap-3">
                                                            <span className="text-google-blue font-bold">・</span>
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>

                        {/* Additional spacing at bottom */}
                        <div className="mt-20 pt-10 border-t border-gray-100">
                            <button
                                onClick={() => router.back()}
                                className="group flex items-center gap-2 text-google-blue font-bold hover:gap-4 transition-all"
                            >
                                <ArrowLeft size={20} />
                                <span>{language === 'ja' ? '一覧へ戻る' : 'Back to Activities'}</span>
                            </button>
                        </div>
                    </div>
                </motion.div>
            </Section>
        </main>
    );
};

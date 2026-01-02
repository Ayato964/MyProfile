"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

export const Hero = () => {
    const { language } = useLanguage();
    const { profile } = portfolioData[language];

    return (
        <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-4 pt-20">

            <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-8 relative"
            >
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-xl ring-4 ring-gray-100">
                    <Image
                        src="/images/profile.jpg"
                        alt={profile.name}
                        width={192}
                        height={192}
                        className="object-cover w-full h-full"
                        priority
                    />
                </div>

                {/* Decorative Status Dot (Google Green for 'Available/Active') */}
                <div className="absolute bottom-2 right-2 w-6 h-6 bg-google-green border-4 border-white rounded-full" title="Open to opportunities" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="max-w-4xl"
            >
                <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight text-gray-900">
                    {profile.name}
                </h1>

                <h2 className="text-xl md:text-2xl text-google-blue font-medium mb-6">
                    {profile.role}
                </h2>

                <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                    <span className="font-semibold text-gray-800">{profile.tagline}</span> <br />
                    {profile.sub_tagline}
                </p>

                <div className="flex gap-4 justify-center">
                    {/* Simple Pill Buttons */}
                    <a href="#publications" className="px-6 py-2.5 bg-google-blue text-white rounded-lg shadow hover:bg-blue-600 transition-all font-medium">
                        {language === 'en' ? 'View Research' : '研究を見る'}
                    </a>
                    <a href="#contact" className="px-6 py-2.5 bg-white text-gray-700 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 transition-all font-medium">
                        {language === 'en' ? 'Contact' : 'お問い合わせ'}
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

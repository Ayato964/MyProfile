"use client";

import { useLanguage } from "@/context/LanguageContext";
import { clsx } from "clsx";

export const Navbar = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 h-16 flex items-center justify-between px-6 md:px-12">
            <div className="font-bold text-lg tracking-tight text-gray-800">
                Ayato<span className="text-google-blue">.dev</span>
            </div>

            <div className="flex items-center gap-4">
                <button
                    onClick={toggleLanguage}
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 hover:border-google-blue hover:text-google-blue transition-colors text-sm font-medium"
                >
                    <span className={clsx(language === 'en' ? "font-bold text-gray-900" : "text-gray-500")}>EN</span>
                    <span className="text-gray-300">/</span>
                    <span className={clsx(language === 'ja' ? "font-bold text-gray-900" : "text-gray-500")}>JA</span>
                </button>
            </div>
        </nav>
    );
};

import { portfolioData } from "@/data/portfolio";
import { ActivityDetailClient } from "@/components/ActivityDetailClient";
import { LanguageProvider } from "@/context/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export function generateStaticParams() {
    // Get all unique slugs from both languages
    const enSlugs = portfolioData.en.publications.items
        .filter(item => item.slug)
        .map(item => ({ slug: item.slug }));
    
    const jaSlugs = portfolioData.ja.publications.items
        .filter(item => item.slug)
        .map(item => ({ slug: item.slug }));

    // Merge and remove duplicates
    const allSlugs = [...enSlugs, ...jaSlugs];
    const uniqueSlugs = Array.from(new Set(allSlugs.map(s => s.slug)))
        .map(slug => ({ slug }));

    return uniqueSlugs;
}

export default function Page() {
    return (
        <LanguageProvider>
            <Navbar />
            <ActivityDetailClient />
            <Footer />
        </LanguageProvider>
    );
}

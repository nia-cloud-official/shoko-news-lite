import NewsFeed from "@/components/news-feed";
import { NewsArticle } from "@/types/newsArticle";
import { cookies } from "next/headers";
import { getTopNewsUrl } from "@/modules/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Epigram: Open-Source, Free, and AI-Powered News in Short.",
  description:
    "An open-source, AI-powered news app for busy people. Stay updated with bite-sized news, real-time updates, and in-depth analysis. Experience balanced, trustworthy reporting tailored for fast-paced lifestyles in a sleek, user-friendly interface.",
  openGraph: {
    title: "Epigram: Open-Source, Free, and AI-Powered News in Short.",
    description:
      "An open-source, AI-powered news app for busy people. Stay updated with bite-sized news, real-time updates, and in-depth analysis. Experience balanced, trustworthy reporting tailored for fast-paced lifestyles in a sleek, user-friendly interface.",
    images: [{ url: "/static/images/epigram-og.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Epigram: Open-Source, Free, and AI-Powered News in Short.",
    description:
      "An open-source, AI-powered news app for busy people. Stay updated with bite-sized news, real-time updates, and in-depth analysis. Experience balanced, trustworthy reporting tailored for fast-paced lifestyles in a sleek, user-friendly interface.",
    images: ["/static/images/epigram-og.png"],
  },
};

export default async function Home() {
  const cookieStore = await cookies();
  const followedTopics = cookieStore.get("followedTopics")?.value;
  const categories = followedTopics && JSON.parse(followedTopics).join(',').toLowerCase();

  const url = getTopNewsUrl(categories);
  const response = await fetch(url);
  const newsArticles: NewsArticle[] = await response.json();

  return (
    <main className="relative h-screen bg-transparent">
      <NewsFeed newsArticles={newsArticles} />
    </main>
  );
}
import TopicsList from './topics-list';
import AppSwitcher from '@/components/AppSwitcher';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Topics - Epigram News Categories',
  description: 'Explore various news topics and categories on Epigram. Find the latest news and insights across different subjects.',
  alternates: {
    canonical: '/topics',
  },
  openGraph: {
    title: 'Topics - Epigram News Categories',
    description: 'Explore various news topics and categories on Epigram. Find the latest news and insights across different subjects.',
    images: [{ url: "/static/images/epigram-og.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: 'Topics - Epigram News Categories',
    description: 'Explore various news topics and categories on Epigram. Find the latest news and insights across different subjects.',
    images: ["/static/images/epigram-og.png"],
  },
}

export default function TopicsPage() {
  return (
    <main className="relative min-h-screen bg-transparent">
      <div className="fixed inset-0 pt-[calc(env(safe-area-inset-top)+1rem)] pb-24 px-4 overflow-y-auto">
        <div className="relative w-full max-w-[400px] mx-auto">
          <TopicsList />
        </div>
      </div>
      <AppSwitcher />
    </main>
  );
}

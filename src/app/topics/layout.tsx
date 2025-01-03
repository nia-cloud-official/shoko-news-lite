import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Topics | Epigram',
  description: 'Personalize your news experience by selecting topics that matter to you. Choose from business, technology, sports, and more.',
}

export default function TopicsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 
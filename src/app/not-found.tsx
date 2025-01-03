import { Metadata, Viewport } from "next";
import AppSwitcher from "@/components/AppSwitcher";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Epigram",
  description: "The page you're looking for doesn't exist.",
  alternates: {
    canonical: '/404',
  },
  openGraph: {
    title: "404 - Page Not Found | Epigram",
    description: "The page you're looking for doesn't exist.",
    images: [{ url: "/static/images/epigram-og.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "404 - Page Not Found | Epigram",
    description: "The page you're looking for doesn't exist.",
    images: ["/static/images/epigram-og.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default function NotFound() {
  return (
    <main className="relative min-h-screen bg-transparent">
      <div className="fixed inset-0 pt-4 pb-24 px-4 overflow-y-auto">
        <div className="relative w-full max-w-[400px] mx-auto">
          <div className="space-y-8 pb-4">
            <div className="space-y-2">
              <h1 className="text-2xl font-semibold tracking-tight">Page Not Found</h1>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The page you&apos;re looking for doesn&apos;t exist or has been moved.
              </p>
            </div>
          </div>
        </div>
      </div>
      <AppSwitcher />
    </main>
  );
} 
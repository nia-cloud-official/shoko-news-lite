import { Metadata } from "next"
import AppSwitcher from "@/components/AppSwitcher";
import { LogoIcon } from "@/components/logo-icon";
import { Globe2, Newspaper, Sparkles, Zap, Brain, BookOpen, Github, Cpu, Palette, Box, Cloud } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { XIcon } from "@/components/icons/x-icon";

export const metadata: Metadata = {
  title: 'About Epigram - AI-powered News Platform',
  description: 'Learn about Epigram, an AI-powered news platform that delivers personalized, bite-sized summaries from trusted sources worldwide.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Epigram - AI-powered News Platform',
    description: 'Learn about Epigram, an AI-powered news platform that delivers personalized, bite-sized summaries from trusted sources worldwide.',
    images: [{ url: "/static/images/epigram-og.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: 'About Epigram - AI-powered News Platform',
    description: 'Learn about Epigram, an AI-powered news platform that delivers personalized, bite-sized summaries from trusted sources worldwide.',
    images: ["/static/images/epigram-og.png"],
  },
}

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-transparent">
      <div className="fixed inset-0 pt-[calc(env(safe-area-inset-top)+1rem)] pb-24 px-4 overflow-y-auto">
        <div className="relative w-full max-w-[400px] mx-auto">
          <div className="space-y-8 pb-4">
            {/* Header */}
            <div className="space-y-2">
              <h1 className="text-2xl font-semibold tracking-tight">
                About Epigram
              </h1>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Open-Source, Free, and AI-Powered News in Short.
              </p>
            </div>

            <div className="space-y-10">
              {/* App Logo and Brief */}
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-xl">
                  <LogoIcon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="font-medium">Epigram</h2>
                  <p className="text-sm text-muted-foreground">
                    Built by humans, optimized by AI, with ❤️ from SF.
                  </p>
                </div>
              </div>

              {/* Main Description */}
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Epigram simplifies the way you stay informed. With AI, it
                  delivers quick, clear summaries from reliable sources, so you
                  get the news without the overwhelm. For more detail, dive into
                  deeper analysis or explore topics you care about—all in a feed
                  tailored to your interests.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Our goal is to use AI to make quality news easy to access,
                  understand, and personalize. We’re focused on connecting you
                  with trusted sources while cutting through the noise, so you
                  get the information that matters most.
                </p>
              </div>

              {/* Open Source */}
              <div className="space-y-4">
                <h2 className="text-lg font-medium">Open Source</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Epigram&apos;s source code is open source. We believe in
                  transparency and community-driven development.
                </p>
                <a
                  href="https://github.com/hashnode-labs/epigram/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  <Github className="w-4 h-4" />
                  <span>View code on GitHub</span>
                </a>
              </div>

              {/* Contributors */}
              <div className="space-y-4">
                <h2 className="text-lg font-medium">Contributors</h2>
                <div className="grid gap-4">
                  <a
                    href="https://x.com/sandeepg33k"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all group"
                  >
                    <Avatar className="w-12 h-12 border-2 border-background shadow-sm">
                      <AvatarImage
                        src="/static/images/sandeep-panda.jpg"
                        alt="Sandeep Panda"
                      />
                    </Avatar>
                    <div>
                      <h3 className="font-medium text-base group-hover:text-primary transition-colors">
                        Sandeep Panda
                      </h3>
                      <p className="text-sm text-muted-foreground flex items-center gap-1.5">
                        <XIcon className="w-3.5 h-3.5" />
                        @sandeepg33k
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://x.com/fazlerocks"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all group"
                  >
                    <Avatar className="w-12 h-12 border-2 border-background shadow-sm">
                      <AvatarImage
                        src="/static/images/fazle.jpg"
                        alt="Syed Fazle Rahman"
                      />
                    </Avatar>
                    <div>
                      <h3 className="font-medium text-base group-hover:text-primary transition-colors">
                        Syed Fazle Rahman
                      </h3>
                      <p className="text-sm text-muted-foreground flex items-center gap-1.5">
                        <XIcon className="w-3.5 h-3.5" />
                        @fazlerocks
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Technology Stack */}
              <div>
                <h2 className="text-lg font-medium mb-4">Technology Stack</h2>
                <div className="grid gap-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Cpu className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Next.js</h3>
                      <p className="text-sm text-muted-foreground">
                        Built with the React framework for production, providing
                        server-side rendering and optimal performance.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Palette className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">TailwindCSS & shadcn/ui</h3>
                      <p className="text-sm text-muted-foreground">
                        Styled with TailwindCSS for utility-first CSS and
                        shadcn/ui for beautiful, accessible components.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Box className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Exa</h3>
                      <p className="text-sm text-muted-foreground">
                        Powered by Exa for advanced AI capabilities and natural
                        language processing.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Cloud className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Google Cloud Run</h3>
                      <p className="text-sm text-muted-foreground">
                        Deployed on Google Cloud Run for scalable, serverless
                        container execution.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Features */}
              <div>
                <h2 className="text-lg font-medium mb-4">AI Features</h2>
                <div className="grid gap-6">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Brain className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">AI-Powered Summaries</h3>
                      <p className="text-sm text-muted-foreground">
                        Clear, quick summaries that get straight to the point of
                        every story.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <BookOpen className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Deep Analysis</h3>
                      <p className="text-sm text-muted-foreground">
                        AI-generated analysis with clear context from reliable
                        sources to help you understand news stories on a deeper
                        level.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Core Features */}
              <div>
                <h2 className="text-lg font-medium mb-4">Core Features</h2>
                <div className="grid gap-6">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Globe2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Global Coverage</h3>
                      <p className="text-sm text-muted-foreground">
                        Access news from over 50 countries in your preferred
                        language.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Sparkles className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Personalized Feed</h3>
                      <p className="text-sm text-muted-foreground">
                        Customize your news feed with topics that matter to you.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Zap className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Real-time Updates</h3>
                      <p className="text-sm text-muted-foreground">
                        Stay informed with the latest breaking news and updates.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Newspaper className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Diverse Categories</h3>
                      <p className="text-sm text-muted-foreground">
                        From technology to entertainment, find news across
                        multiple categories.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AppSwitcher />
    </main>
  );
} 